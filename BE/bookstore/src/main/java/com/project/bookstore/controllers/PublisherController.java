package com.project.bookstore.controllers;

import com.project.bookstore.models.Publisher;
import com.project.bookstore.models.ResponseObject;
import com.project.bookstore.services.PublisherService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1/Publisher")
public class PublisherController {
    @Autowired
    private PublisherService publisherService;
    @GetMapping(path = "")
    public ResponseEntity<ResponseObject> getAllPublisher(){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Get All Publisher Success", publisherService.findAll())
        );
    }
    @PostMapping(path = "/save")
    public ResponseEntity<ResponseObject> saveNewPublisher(@RequestBody Publisher newPublisher){
        boolean isPublisherExists = publisherService.existsByName(newPublisher.getName());
        if (isPublisherExists){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    new ResponseObject("ERROR", "Publisher Exists", "")
            );
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Save New Publisher Success", publisherService.save(newPublisher))
        );
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<ResponseObject> deletePublisherById(@PathVariable Long id){
        Publisher deletePublisher = publisherService.findById(id).orElse(null);
        if (deletePublisher == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Cannot found Publisher With ID = "+id, "")
            );
        }
        publisherService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Delete Publisher Id = "+id+" Success", "")
        );
    }
    @PutMapping(path = "/update/{id}")
    public ResponseEntity<ResponseObject> updatePublisherById(@PathVariable Long id, @RequestBody Publisher newPublisher){
        Publisher updatePublisher = publisherService.findById(id).orElse(null);
        if (updatePublisher == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Cannot Found Publisher With ID = "+id, "")
            );
        }
        BeanUtils.copyProperties(newPublisher, updatePublisher, "id");
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Update Publisher With ID = "+id+" Success", publisherService.save(updatePublisher))
        );
    }
}
