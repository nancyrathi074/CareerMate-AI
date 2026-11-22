
package com.careermate.backend.dto;

public record AuthResponse(
        String message,
        String token,
        String name,
        String email
) {}

