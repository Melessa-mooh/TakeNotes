package com.appdev.teknotes.teknote_app.controller;

import com.appdev.teknotes.teknote_app.entity.Resource;
import com.appdev.teknotes.teknote_app.service.ResourceService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {
    private final ResourceService service;

    public ResourceController(ResourceService service) {
        this.service = service;
    }

    @GetMapping("/search")
    public List<Resource> searchByCourse(@RequestParam("code") String courseCode) {
        return service.searchByCourseCode(courseCode);
    }
}