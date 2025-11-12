package com.appdev.teknotes.teknote_app.service;

import com.appdev.teknotes.teknote_app.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {
    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    @Transactional
    public void updatePreferences(Long userId, String prefs) {
        repo.updateStudyPreferences(userId, prefs);
    }
}