package com.appdev.teknotes.teknote_app.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "bookmark", uniqueConstraints = @UniqueConstraint(columnNames = { "user_id", "resource_id" }))
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "resource_id", nullable = false)
    private Resource resource;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt = Instant.now();

    public Bookmark() {
    }

    public Bookmark(Long id, User user, Resource resource, Instant createdAt) {
        this.id = id;
        this.user = user;
        this.resource = resource;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Resource getResource() {
        return resource;
    }

    public void setResource(Resource resource) {
        this.resource = resource;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}