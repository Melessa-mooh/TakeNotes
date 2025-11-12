package com.appdev.teknotes.teknote_app.repository;

import com.appdev.teknotes.teknote_app.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    boolean existsByUser_IdAndResource_Id(Long userId, Long resourceId);
}