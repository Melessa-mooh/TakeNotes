package com.appdev.teknotes.teknote_app.controller;

import com.appdev.teknotes.teknote_app.entity.Course;
import com.appdev.teknotes.teknote_app.service.CourseService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {
    private final CourseService service;

    public CourseController(CourseService service) {
        this.service = service;
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return service.getAllCourses();
    }
}