
package com.careermate.backend.service;

import com.careermate.backend.dto.ResumeAnalysisResponse;
import com.google.gson.*;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientResponseException;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class GroqService {

    private static final String API_URL =
            "https://api.groq.com/openai/v1/chat/completions";

    private static final String MODEL =
            "openai/gpt-oss-120b";

    private final RestClient restClient = RestClient.create();
    private final Gson gson = new Gson();

    @Value("${groq.api.key:}")
    private String apiKey;

    public ResumeAnalysisResponse analyzeResume(String resumeText) {

        if (apiKey == null || apiKey.isBlank()) {
            throw new IllegalStateException(
                    "Groq API key is not configured."
            );
        }

        if (resumeText == null || resumeText.isBlank()) {
            throw new IllegalArgumentException(
                    "Resume text cannot be empty."
            );
        }

        String prompt = """
                You are an expert ATS Resume Analyzer.

                Analyze the resume based on:
                - Relevant skills
                - Work experience
                - Education
                - Projects
                - Resume structure
                - Role-related keywords

                Give a realistic ATS score between 0 and 100.

                Evaluate the resume fairly and provide actionable
                suggestions. Do not invent qualifications or experience.

                RESUME:
                """ + resumeText.substring(
                        0, Math.min(resumeText.length(), 15000)
                ) + """

                Return only a valid JSON object in this exact format:

                {
                  "atsScore": 85,
                  "strengths": ["...", "...", "..."],
                  "missingSkills": ["...", "...", "..."],
                  "suggestions": ["...", "...", "..."]
                }

                Do not include Markdown or code fences.
                Return only JSON.
                """;

        Map<String, Object> requestBody = new LinkedHashMap<>();

        requestBody.put("model", MODEL);

        requestBody.put(
                "messages",
                List.of(
                        Map.of(
                                "role", "user",
                                "content", prompt
                        )
                )
        );

        requestBody.put("temperature", 0.2);

        requestBody.put(
                "response_format",
                Map.of("type", "json_object")
        );

        try {

            String rawResponse = restClient.post()
                    .uri(API_URL)
                    .header(
                            HttpHeaders.AUTHORIZATION,
                            "Bearer " + apiKey
                    )
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(requestBody)
                    .retrieve()
                    .body(String.class);

            if (rawResponse == null || rawResponse.isBlank()) {
                throw new IllegalStateException(
                        "Groq returned an empty response."
                );
            }

            JsonObject root = JsonParser
                    .parseString(rawResponse)
                    .getAsJsonObject();

            JsonArray choices = root.getAsJsonArray("choices");

            if (choices == null || choices.isEmpty()) {
                throw new IllegalStateException(
                        "Groq returned no analysis choices."
                );
            }

            JsonObject message = choices.get(0)
                    .getAsJsonObject()
                    .getAsJsonObject("message");

            if (message == null ||
                    !message.has("content") ||
                    message.get("content").isJsonNull()) {
                throw new IllegalStateException(
                        "Groq returned an empty analysis."
                );
            }

            String content = message.get("content").getAsString();

            JsonObject result = JsonParser
                    .parseString(content)
                    .getAsJsonObject();

            int score = 0;

            if (result.has("atsScore") &&
                    !result.get("atsScore").isJsonNull()) {
                score = result.get("atsScore").getAsInt();
            }

            score = Math.max(0, Math.min(100, score));

            return new ResumeAnalysisResponse(
                    true,
                    score,
                    readStringList(result, "strengths"),
                    readStringList(result, "missingSkills"),
                    readStringList(result, "suggestions")
            );

        } catch (RestClientResponseException exception) {

            throw new IllegalStateException(
                    "Groq API request failed with HTTP status "
                            + exception.getStatusCode().value(),
                    exception
            );

        } catch (JsonParseException exception) {

            throw new IllegalStateException(
                    "Groq returned an invalid JSON response.",
                    exception
            );
        }
    }

    private List<String> readStringList(
            JsonObject object,
            String fieldName) {

        List<String> values = new ArrayList<>();

        if (!object.has(fieldName) ||
                !object.get(fieldName).isJsonArray()) {
            return values;
        }

        JsonArray array = object.getAsJsonArray(fieldName);

        for (JsonElement element : array) {
            if (element != null && element.isJsonPrimitive()
                    && element.getAsJsonPrimitive().isString()) {
                values.add(element.getAsString());
            }
        }

        return values;
    }
}
