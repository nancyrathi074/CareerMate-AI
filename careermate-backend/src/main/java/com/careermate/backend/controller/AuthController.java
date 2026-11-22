
package com.careermate.backend.controller;

import com.careermate.backend.dto.AuthResponse;
import com.careermate.backend.dto.LoginRequest;
import com.careermate.backend.dto.SignupRequest;
import com.careermate.backend.model.User;
import com.careermate.backend.service.AuthService;
import com.careermate.backend.service.JwtService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final AuthService authService;
    private final JwtService jwtService;

    public AuthController(
            AuthService authService,
            JwtService jwtService) {
        this.authService = authService;
        this.jwtService = jwtService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupRequest request) {
        try {
            User user = authService.signup(
                    request.name(),
                    request.email(),
                    request.password()
            );

            String token = jwtService.generateToken(user.getEmail());

            return ResponseEntity.status(HttpStatus.CREATED).body(
                    new AuthResponse(
                            "Registration successful",
                            token,
                            user.getName(),
                            user.getEmail()
                    )
            );

        } catch (RuntimeException exception) {
            return ResponseEntity.badRequest().body(
                    java.util.Map.of("message", exception.getMessage())
            );
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            User user = authService.login(
                    request.email(),
                    request.password()
            );

            String token = jwtService.generateToken(user.getEmail());

            return ResponseEntity.ok(
                    new AuthResponse(
                            "Login successful",
                            token,
                            user.getName(),
                            user.getEmail()
                    )
            );

        } catch (RuntimeException exception) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(
                    java.util.Map.of("message", exception.getMessage())
            );
        }
    }
}
