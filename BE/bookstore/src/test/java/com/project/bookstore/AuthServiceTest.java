package com.project.bookstore;

import com.project.bookstore.models.Customer;
import com.project.bookstore.repositories.CustomerRepository;
import com.project.bookstore.services.AuthService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class AuthServiceTest {

    @Mock
    private CustomerRepository customerRepository;

    @InjectMocks
    private AuthService authService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testIsValidAuth_ValidCredentials() {
        Customer customer = new Customer();
        customer.setEmail("test@example.com");
        customer.setPassword("password123");
        when(customerRepository.findByEmail("test@example.com")).thenReturn(Optional.of(customer));

        boolean result = authService.isValidAuth("test@example.com", "password123");
        assertTrue(result);
    }

    @Test
    void testIsValidAuth_InvalidCredentials() {
        when(customerRepository.findByEmail("test@example.com")).thenReturn(Optional.empty());

        boolean result = authService.isValidAuth("test@example.com", "wrongpassword");
        assertFalse(result);
    }

    @Test
    void testIsEnabledAuth_EnabledAccount() {
        Customer customer = new Customer();
        customer.setEmail("test@example.com");
        customer.setEnabled(true);
        when(customerRepository.findByEmail("test@example.com")).thenReturn(Optional.of(customer));

        boolean result = authService.isEnabledAuth("test@example.com");
        assertTrue(result);
    }

    @Test
    void testIsEnabledAuth_DisabledAccount() {
        Customer customer = new Customer();
        customer.setEmail("test@example.com");
        customer.setEnabled(false);
        when(customerRepository.findByEmail("test@example.com")).thenReturn(Optional.of(customer));

        boolean result = authService.isEnabledAuth("test@example.com");
        assertFalse(result);
    }
} 