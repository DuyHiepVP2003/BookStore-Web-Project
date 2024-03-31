package com.project.bookstore.controllers;

import com.project.bookstore.models.Book;
import com.project.bookstore.models.Category;
import com.project.bookstore.models.ResponseObject;
import com.project.bookstore.services.BookService;
import com.project.bookstore.services.CategoryService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1/Book")
public class BookController {
    @Autowired
    private BookService bookService;
    @Autowired
    private CategoryService categoryService;
    @GetMapping(path = "")
    public ResponseEntity<ResponseObject> getAllBook() {
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Get All Book Success", bookService.findAll())
        );
    }
    @PostMapping(path = "/save")
    public ResponseEntity<ResponseObject> saveNewBook(@RequestBody Book book){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Save New Book Success", bookService.save(book))
        );
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<ResponseObject> deleteById(@PathVariable Long id){
        Book deleteBook = bookService.findById(id).orElse(null);
        if (deleteBook == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Can Not Found Book Id = "+id, "")
            );
        }
        bookService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Delete Book Id = "+id+" Success", deleteBook)
        );
    }
    @PutMapping(path = "/update/{id}")
    public ResponseEntity<ResponseObject> updateById(@PathVariable Long id, @RequestBody Book newBook){
        Book updateBook = bookService.findById(id).orElse(null);
        if (updateBook == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Can Not Found Book Id = "+id, "")
            );
        }
        BeanUtils.copyProperties(newBook, updateBook, "id");
        bookService.save(updateBook);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Update Book Id = "+id+" Success", updateBook)
        );
    }
}
