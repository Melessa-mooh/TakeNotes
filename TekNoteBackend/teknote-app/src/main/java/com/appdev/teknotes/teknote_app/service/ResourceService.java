package com.appdev.teknotes.teknote_app.service;

import com.appdev.teknotes.teknote_app.entity.Resource;
import com.appdev.teknotes.teknote_app.repository.ResourceRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ResourceService {
    private final ResourceRepository repo;

    public ResourceService(ResourceRepository repo) {
        this.repo = repo;
    }

    public List<Resource> searchByCourseCode(String courseCode) {
        return repo.findByCourseCode(courseCode);
    }
}