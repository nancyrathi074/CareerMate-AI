
package com.careermate.backend.service;

import com.careermate.backend.dto.ResumeAnalysisResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ResumeService {

    private final ResumeExtractionService extractionService;
    private final GroqService groqService;

    public ResumeService(
            ResumeExtractionService extractionService,
            GroqService groqService) {
        this.extractionService = extractionService;
        this.groqService = groqService;
    }

    public ResumeAnalysisResponse analyzeResume(MultipartFile file)
            throws IOException {

        String resumeText = extractionService.extractText(file);

        return groqService.analyzeResume(resumeText);
    }
}
