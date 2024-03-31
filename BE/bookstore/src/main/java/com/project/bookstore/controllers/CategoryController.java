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
@RequestMapping(path = "/api/v1/Category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private BookService bookService;
    @GetMapping(path = "")
    public ResponseEntity<ResponseObject> getAllCategory(){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Get All Category Success", categoryService.findAll())
        );
    }
    @PostMapping(path = "/save")
    public ResponseEntity<ResponseObject> saveNewCategory(@RequestBody Category category){
        boolean isCategoryExists = categoryService.existsByName(category.getName());
        if (isCategoryExists){
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    new ResponseObject("ERROR", "Category Exists", "")
            );
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Save New Category Success", categoryService.save(category))
        );
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<ResponseObject> deleteById(@PathVariable Long id){
        categoryService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Delete Category ID = "+id+" Success", "")
        );
    }
    @PutMapping(path = "/update/{id}")
    public ResponseEntity<ResponseObject> updateById(@PathVariable Long id, @RequestBody Category newCategory){
        Category updateCategory = categoryService.findById(id).orElse(null);
        if (updateCategory == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Cannot Found Category ID = "+id, "")
            );
        }
        BeanUtils.copyProperties(newCategory, updateCategory, "id");
        categoryService.save(updateCategory);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Update Category ID = "+id+" Success", updateCategory)
        );
    }
}
