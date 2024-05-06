package com.project.bookstore.controllers;

import com.project.bookstore.models.Customer;
import com.project.bookstore.models.ResponseObject;
import com.project.bookstore.services.AuthService;
import com.project.bookstore.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class RegistrationController {
    @Autowired
    private CustomerService customerService;
    @Autowired
    private AuthService authService;
//    @PostMapping(path = "/register")
//    public ResponseEntity<ResponseObject> processRegistration(@RequestBody Customer customer){
//
//    }
}
