package com.project.bookstore.services;

import com.project.bookstore.models.Publisher;
import com.project.bookstore.repositories.PublisherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PublisherService {
    @Autowired
    private PublisherRepository publisherRepository;
    public List<Publisher> findAll(){
        return publisherRepository.findAll();
    }
    public Optional<Publisher> findById(Long id){
        return publisherRepository.findById(id);
    }
    public void deleteById(Long id){
        publisherRepository.deleteById(id);
    }
    public Publisher save(Publisher publisher){
        return publisherRepository.save(publisher);
    }
    public boolean existsByName(String name){
        return publisherRepository.existsByName(name);
    }
}
