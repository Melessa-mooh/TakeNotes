package com.appdev.teknotes.teknote_app.repository;

import com.appdev.teknotes.teknote_app.entity.User;
import org.springframework.data.jpa.repository.*;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepository extends JpaRepository<User, Long> {
    @Modifying
    @Transactional
    @Query("UPDATE User u SET u.studyPreferences = :prefs WHERE u.id = :userId")
    int updateStudyPreferences(Long userId, String prefs);
}