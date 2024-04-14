package com.project.bookstore.controllers;

import com.project.bookstore.models.Customer;
import com.project.bookstore.models.LoginRequest;
import com.project.bookstore.models.ResponseObject;
import com.project.bookstore.services.AuthService;
import com.project.bookstore.services.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/auth")
public class AuthController {
    @Autowired
    private AuthService authService;
    @Autowired
    private CustomerService customerService;
    @PostMapping
    public ResponseEntity<ResponseObject> authenticateUser(@RequestBody LoginRequest loginRequest){
        boolean isCustomer = authService.isValidAuth(loginRequest.getEmail(), loginRequest.getPassword());
        if (isCustomer){
            Customer customer = customerService.findByEmail(loginRequest.getEmail()).orElse(null);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK", "User valid", customer)
            );
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ResponseObject("ERROR", "User not valid", "")
        );
    }
}
