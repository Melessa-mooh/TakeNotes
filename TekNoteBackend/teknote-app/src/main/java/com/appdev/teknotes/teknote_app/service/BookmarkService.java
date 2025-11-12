package com.appdev.teknotes.teknote_app.service;

import com.appdev.teknotes.teknote_app.entity.*;
import com.appdev.teknotes.teknote_app.repository.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BookmarkService {
    private final BookmarkRepository bookmarkRepo;
    private final UserRepository userRepo;
    private final ResourceRepository resourceRepo;

    public BookmarkService(BookmarkRepository bookmarkRepo, UserRepository userRepo, ResourceRepository resourceRepo) {
        this.bookmarkRepo = bookmarkRepo;
        this.userRepo = userRepo;
        this.resourceRepo = resourceRepo;
    }

    @Transactional
    public Bookmark addBookmark(Long userId, Long resourceId) {
        if (bookmarkRepo.existsByUser_IdAndResource_Id(userId, resourceId)) return null;
        User user = userRepo.findById(userId).orElseThrow();
        Resource resource = resourceRepo.findById(resourceId).orElseThrow();
        Bookmark b = new Bookmark();
        b.setUser(user);
        b.setResource(resource);
        return bookmarkRepo.save(b);
    }
}