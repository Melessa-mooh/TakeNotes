package com.appdev.teknotes.teknote_app.service;

import com.appdev.teknotes.teknote_app.entity.Course;
import com.appdev.teknotes.teknote_app.repository.CourseRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CourseService {
    private final CourseRepository repo;

    public CourseService(CourseRepository repo) {
        this.repo = repo;
    }

    public List<Course> getAllCourses() {
        return repo.findAll();
    }
}