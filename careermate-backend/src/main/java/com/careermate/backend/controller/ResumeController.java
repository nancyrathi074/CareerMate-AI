
package com.careermate.backend.controller;

import com.careermate.backend.dto.ResumeAnalysisResponse;
import com.careermate.backend.service.ResumeService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/resume")
public class ResumeController {

    private static final Logger logger =
            LoggerFactory.getLogger(ResumeController.class);

    private final ResumeService resumeService;

    public ResumeController(ResumeService resumeService) {
        this.resumeService = resumeService;
    }

    @PostMapping(
            value = "/analyze",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public ResponseEntity<?> analyzeResume(
            @RequestParam("resume") MultipartFile resume) {

        try {
            ResumeAnalysisResponse result =
                    resumeService.analyzeResume(resume);

            return ResponseEntity.ok(result);

        } catch (IllegalArgumentException exception) {

            return ResponseEntity.badRequest().body(
                    Map.of(
                            "success", false,
                            "message", exception.getMessage()
                    )
            );

        } catch (IOException exception) {

            logger.warn("Resume extraction failed", exception);

            return ResponseEntity.badRequest().body(
                    Map.of(
                            "success", false,
                            "message", "Could not read the uploaded resume. Please try another file."
                    )
            );

        } catch (IllegalStateException exception) {

            logger.error("Resume analysis service failed", exception);

            return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(
                    Map.of(
                            "success", false,
                            "message", "Resume analysis service is temporarily unavailable."
                    )
            );

        } catch (Exception exception) {

            logger.error("Unexpected resume analysis error", exception);

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                    Map.of(
                            "success", false,
                            "message", "Resume analysis failed. Please try again."
                    )
            );
        }
    }

    @ExceptionHandler(MaxUploadSizeExceededException.class)
    public ResponseEntity<?> handleFileTooLarge(
            MaxUploadSizeExceededException exception) {

        return ResponseEntity.status(HttpStatus.PAYLOAD_TOO_LARGE).body(
                Map.of(
                        "success", false,
                        "message", "Resume file must not exceed 5 MB."
                )
        );
    }
}
