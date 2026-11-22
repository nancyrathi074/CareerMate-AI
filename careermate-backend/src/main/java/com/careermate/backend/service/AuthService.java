
package com.careermate.backend.service;

import com.careermate.backend.model.User;
import com.careermate.backend.repository.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User signup(String name, String email, String password) {

        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email is already registered.");
        }

        User user = new User(
                name,
                email,
                passwordEncoder.encode(password)
        );

        return userRepository.save(user);
    }

    public User login(String email, String password) {

        User user = userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Invalid email or password."));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Invalid email or password.");
        }

        return user;
    }
}
