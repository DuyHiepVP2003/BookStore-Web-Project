package com.project.bookstore.services;

import com.project.bookstore.models.Customer;
import com.project.bookstore.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }
    public Optional<Customer> findById(Long id) {
        return customerRepository.findById(id);
    }
    public void deleteById(Long id){
        customerRepository.deleteById(id);
    }
    public Customer save(Customer customer){
        return customerRepository.save(customer);
    }
    public boolean existsByEmail(String email) {
        return customerRepository.existsByEmail(email);
    }
}
