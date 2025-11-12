package com.appdev.teknotes.teknote_app.controller;

import com.appdev.teknotes.teknote_app.entity.Bookmark;
import com.appdev.teknotes.teknote_app.service.BookmarkService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookmarks")
public class BookmarkController {
    private final BookmarkService service;

    public BookmarkController(BookmarkService service) {
        this.service = service;
    }

    @PostMapping("/{resourceId}")
    public Bookmark addBookmark(@PathVariable Long resourceId, @RequestHeader("X-User-Id") Long userId) {
        return service.addBookmark(userId, resourceId);
    }
}