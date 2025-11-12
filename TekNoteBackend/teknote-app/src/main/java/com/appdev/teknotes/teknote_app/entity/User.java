package com.appdev.teknotes.teknote_app.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Lob
    @Column(name = "study_preferences")
    private String studyPreferences;

    public User() {
    }

    public User(Long id, String email, String password, String studyPreferences) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.studyPreferences = studyPreferences;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStudyPreferences() {
        return studyPreferences;
    }

    public void setStudyPreferences(String studyPreferences) {
        this.studyPreferences = studyPreferences;
    }
}