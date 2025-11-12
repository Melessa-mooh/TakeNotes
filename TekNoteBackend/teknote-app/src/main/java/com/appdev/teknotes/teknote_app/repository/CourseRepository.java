package com.appdev.teknotes.teknote_app.repository;

import com.appdev.teknotes.teknote_app.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
    Course findByCourseCode(String courseCode);
}