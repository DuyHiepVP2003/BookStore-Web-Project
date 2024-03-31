package com.project.bookstore.services;

import com.project.bookstore.models.Category;
import com.project.bookstore.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }
    public Category save(Category category){
        return categoryRepository.save(category);
    }
    public void deleteById(Long id){
        categoryRepository.deleteById(id);
    }
    public Optional<Category> findById(Long id){
        return categoryRepository.findById(id);
    }
    public boolean existsByName(String name){
        return categoryRepository.existsByName(name);
    }
}
