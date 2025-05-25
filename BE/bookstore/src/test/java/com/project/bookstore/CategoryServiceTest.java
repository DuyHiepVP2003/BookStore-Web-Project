package com.project.bookstore;

import com.project.bookstore.models.Category;
import com.project.bookstore.repositories.CategoryRepository;
import com.project.bookstore.services.CategoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CategoryServiceTest {

    @Mock
    private CategoryRepository categoryRepository;

    @InjectMocks
    private CategoryService categoryService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindAll() {
        List<Category> categories = Arrays.asList(new Category(), new Category());
        when(categoryRepository.findAll()).thenReturn(categories);

        List<Category> result = categoryService.findAll();

        assertEquals(categories, result);
    }

    @Test
    void testFindById_CategoryExists() {
        Category category = new Category();
        category.setId(1L);
        when(categoryRepository.findById(1L)).thenReturn(Optional.of(category));

        Optional<Category> result = categoryService.findById(1L);

        assertTrue(result.isPresent());
        assertEquals(category, result.get());
    }

    @Test
    void testFindById_CategoryNotExists() {
        when(categoryRepository.findById(1L)).thenReturn(Optional.empty());

        Optional<Category> result = categoryService.findById(1L);

        assertFalse(result.isPresent());
    }

    @Test
    void testSave() {
        Category category = new Category();
        when(categoryRepository.save(any(Category.class))).thenReturn(category);

        Category result = categoryService.save(category);

        assertEquals(category, result);
    }

    @Test
    void testDeleteById() {
        doNothing().when(categoryRepository).deleteById(1L);

        categoryService.deleteById(1L);

        verify(categoryRepository).deleteById(1L);
    }
} 