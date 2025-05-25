package com.project.bookstore;

import com.project.bookstore.controllers.CategoryController;
import com.project.bookstore.models.Category;
import com.project.bookstore.models.ResponseObject;
import com.project.bookstore.services.CategoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CategoryControllerTest {

    @Mock
    private CategoryService categoryService;

    @InjectMocks
    private CategoryController categoryController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllCategories() {
        List<Category> categories = Arrays.asList(new Category(), new Category());
        when(categoryService.findAll()).thenReturn(categories);

        ResponseEntity<ResponseObject> response = categoryController.getAllCategories();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
        assertEquals(categories, response.getBody().getData());
    }

    @Test
    void testGetCategoryById_CategoryExists() {
        Category category = new Category();
        category.setId(1L);
        when(categoryService.findById(1L)).thenReturn(Optional.of(category));

        ResponseEntity<ResponseObject> response = categoryController.getCategoryById(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
        assertEquals(category, response.getBody().getData());
    }

    @Test
    void testGetCategoryById_CategoryNotExists() {
        when(categoryService.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<ResponseObject> response = categoryController.getCategoryById(1L);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ERROR", response.getBody().getStatus());
    }

    @Test
    void testCreateCategory() {
        Category category = new Category();
        when(categoryService.save(any(Category.class))).thenReturn(category);

        ResponseEntity<ResponseObject> response = categoryController.createCategory(category);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
    }

    @Test
    void testUpdateCategory_CategoryExists() {
        Category category = new Category();
        category.setId(1L);
        when(categoryService.findById(1L)).thenReturn(Optional.of(category));
        when(categoryService.save(any(Category.class))).thenReturn(category);

        ResponseEntity<ResponseObject> response = categoryController.updateCategory(1L, category);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
    }

    @Test
    void testUpdateCategory_CategoryNotExists() {
        when(categoryService.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<ResponseObject> response = categoryController.updateCategory(1L, new Category());

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ERROR", response.getBody().getStatus());
    }

    @Test
    void testDeleteCategory_CategoryExists() {
        Category category = new Category();
        category.setId(1L);
        when(categoryService.findById(1L)).thenReturn(Optional.of(category));

        ResponseEntity<ResponseObject> response = categoryController.deleteCategory(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
        verify(categoryService).deleteById(1L);
    }

    @Test
    void testDeleteCategory_CategoryNotExists() {
        when(categoryService.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<ResponseObject> response = categoryController.deleteCategory(1L);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ERROR", response.getBody().getStatus());
    }
} 