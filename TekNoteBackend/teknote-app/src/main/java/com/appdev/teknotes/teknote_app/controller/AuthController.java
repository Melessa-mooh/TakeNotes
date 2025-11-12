package com.appdev.teknotes.teknote_app.controller;

import com.appdev.teknotes.teknote_app.entity.User;
import com.appdev.teknotes.teknote_app.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public String registerUser(@RequestBody User user) {
        if (userRepository.findAll().stream()
                .anyMatch(u -> u.getEmail().equalsIgnoreCase(user.getEmail()))) {
            return "Email already exists!";
        }
        userRepository.save(user);
        return "User registered successfully!";
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody User user) {
        return userRepository.findAll().stream()
                .anyMatch(u -> u.getEmail().equalsIgnoreCase(user.getEmail())
                        && u.getPassword().equals(user.getPassword()))
                ? "Login successful!"
                : "Invalid email or password!";
    }
}