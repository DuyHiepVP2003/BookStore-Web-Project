package com.project.bookstore;

import com.project.bookstore.controllers.AuthController;
import com.project.bookstore.models.Customer;
import com.project.bookstore.models.ResponseObject;
import com.project.bookstore.services.AuthService;
import com.project.bookstore.services.CustomerService;
import jakarta.mail.MessagingException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.UnsupportedEncodingException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class AuthControllerTest {

    @Mock
    private AuthService authService;

    @Mock
    private CustomerService customerService;

    @InjectMocks
    private AuthController authController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testProcessResetPassword_EmailExists() throws MessagingException, UnsupportedEncodingException {
        Customer customer = new Customer();
        customer.setEmail("test@example.com");
        when(customerService.findByEmail("test@example.com")).thenReturn(Optional.of(customer));

        ResponseEntity<ResponseObject> response = authController.processResetPassword("test@example.com");

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
        assertEquals("Send email reset password success", response.getBody().getMessage());
    }

    @Test
    void testProcessResetPassword_EmailDoesNotExist() throws MessagingException, UnsupportedEncodingException {
        when(customerService.findByEmail("test@example.com")).thenReturn(Optional.empty());

        ResponseEntity<ResponseObject> response = authController.processResetPassword("test@example.com");

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("ERROR", response.getBody().getStatus());
        assertEquals("Email not Exist", response.getBody().getMessage());
    }

    @Test
    void testVerifyAccount_ValidCode() {
        when(customerService.verify("validCode")).thenReturn(true);

        ResponseEntity<ResponseObject> response = authController.verifyAccount("validCode");

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
        assertEquals("Verify account success", response.getBody().getMessage());
    }

    @Test
    void testVerifyAccount_InvalidCode() {
        when(customerService.verify("invalidCode")).thenReturn(false);

        ResponseEntity<ResponseObject> response = authController.verifyAccount("invalidCode");

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("ERROR", response.getBody().getStatus());
        assertEquals("Cannot verify account", response.getBody().getMessage());
    }
} 