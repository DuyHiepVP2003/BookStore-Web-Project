package com.project.bookstore.services;

import com.project.bookstore.models.Customer;
import com.project.bookstore.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private CustomerRepository customerRepository;
    public boolean isValidAuth(String email, String password){
        Customer customer = customerRepository.findByEmail(email).orElse(null);
        if (customer == null){
            return false;
        }
        if (!customer.getPassword().equals(password)) return false;
        return true;
    }
    public boolean isEnabledAuth(String email){
        Customer customer = customerRepository.findByEmail(email).orElse(null);
        if (customer == null){
            return false;
        }
        if (!customer.isEnabled()) return false;
        return true;
    }
}
