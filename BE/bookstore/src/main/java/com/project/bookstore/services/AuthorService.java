package com.project.bookstore.services;

import com.project.bookstore.models.Author;
import com.project.bookstore.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {
    @Autowired
    private AuthorRepository authorRepository;
    public List<Author> findAll(){
        return authorRepository.findAll();
    }
    public Optional<Author> findById(Long id){
        return authorRepository.findById(id);
    }
    public void deleteById(Long id){
        authorRepository.deleteById(id);
    }
    public Author save(Author author){
        return authorRepository.save(author);
    }
}
