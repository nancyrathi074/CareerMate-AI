
package com.careermate.backend.dto;

import java.util.List;

public record ResumeAnalysisResponse(
        boolean success,
        int atsScore,
        List<String> strengths,
        List<String> missingSkills,
        List<String> suggestions
) {}
