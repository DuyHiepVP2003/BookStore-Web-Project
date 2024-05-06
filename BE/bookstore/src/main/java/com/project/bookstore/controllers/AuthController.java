package com.project.bookstore.controllers;

import com.project.bookstore.models.Customer;
import com.project.bookstore.models.LoginRequest;
import com.project.bookstore.models.ResponseObject;
import com.project.bookstore.services.AuthService;
import com.project.bookstore.services.CustomerService;
import jakarta.mail.MessagingException;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;

@RestController
@RequestMapping(path = "/api/v1/auth")
public class AuthController {
    @Autowired
    private AuthService authService;
    @Autowired
    private CustomerService customerService;
    @PostMapping(path = "/register")
    public ResponseEntity<ResponseObject> processRegistration(@RequestBody Customer customer) throws MessagingException, UnsupportedEncodingException {
        if (customerService.existsByEmail(customer.getEmail())){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                    new ResponseObject("ERROR", "Email exist", "")
            );
        }
        customer.setRole("USER");
        customer.setEnabled(false);
        String randomString = RandomStringUtils.random(64, true, true);
        customer.setVerificationCode(randomString);
        customerService.save(customer);
        customerService.sendVerificationEmail(customer);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Regitration success", customer)
        );
    }
    @GetMapping(path = "/verify")
    public ResponseEntity<ResponseObject> verifyAccount(@Param("code")String code){
        boolean isVerified = customerService.verify(code);
        if (isVerified) return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Verify account success", "")
        );
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new ResponseObject("ERROR", "Cannot verify account", "")
        );
    }
    @PostMapping
    public ResponseEntity<ResponseObject> authenticateUser(@RequestBody LoginRequest loginRequest){
        boolean isCustomer = authService.isValidAuth(loginRequest.getEmail(), loginRequest.getPassword());
        boolean isEnabled = authService.isEnabledAuth(loginRequest.getEmail());
        if (isCustomer && isEnabled){
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
