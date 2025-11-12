package com.appdev.teknotes.teknote_app.controller;

import com.appdev.teknotes.teknote_app.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    public static class PreferencesRequest {
        public String studyPreferences;
    }

    @PutMapping("/preferences")
    public void updatePreferences(@RequestBody PreferencesRequest req, @RequestHeader("X-User-Id") Long userId) {
        service.updatePreferences(userId, req.studyPreferences);
    }
}