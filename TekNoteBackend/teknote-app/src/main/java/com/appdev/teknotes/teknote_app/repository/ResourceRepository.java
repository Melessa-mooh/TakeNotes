package com.appdev.teknotes.teknote_app.repository;

import com.appdev.teknotes.teknote_app.entity.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ResourceRepository extends JpaRepository<Resource, Long> {
    @Query("SELECT r FROM Resource r JOIN r.course c WHERE c.courseCode = :courseCode")
    List<Resource> findByCourseCode(String courseCode);
}