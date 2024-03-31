package com.project.bookstore.controllers;

import com.project.bookstore.models.Author;
import com.project.bookstore.models.ResponseObject;
import com.project.bookstore.services.AuthorService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/Author")
public class AuthorController {
    @Autowired
    private AuthorService authorService;
    @GetMapping(path = "")
    public ResponseEntity<ResponseObject> getAllAuthor(){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Get All Author Success", authorService.findAll())
        );
    }
    @GetMapping(path = "/{id}")
    public ResponseEntity<ResponseObject> getAuthorById(@PathVariable Long id){
        Author author = authorService.findById(id).orElse(null);
        if (author == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Can Not Found Author Id = "+id, "")
            );
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Get Author Id = "+id+" Success",author)
        );
    }
    @PostMapping(path = "/save")
    public ResponseEntity<ResponseObject> saveNewAuthor(@RequestBody Author author){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Save New Author Success", authorService.save(author))
        );
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<ResponseObject> deleteAuthorById(@PathVariable Long id){
        Author deleteAuthor = authorService.findById(id).orElse(null);
        if (deleteAuthor == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Cannot Found Author With ID = "+id,"")
            );
        }
        authorService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Delete Author ID = "+id+" Success", "")
        );
    }
    @PutMapping(path = "/update/{id}")
    public ResponseEntity<ResponseObject> updateAuthorById(@PathVariable Long id, @RequestBody Author author){
        Author updateAuthor = authorService.findById(id).orElse(null);
        if (updateAuthor==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Cannot Found Author With Id = "+id, "")
            );
        }
        BeanUtils.copyProperties(author, updateAuthor, "id");
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Update Author Id = "+id+" Success", authorService.save(updateAuthor))
        );
    }
}
