package com.project.bookstore;

import com.project.bookstore.models.Customer;
import com.project.bookstore.repositories.CustomerRepository;
import com.project.bookstore.services.CustomerService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import java.io.UnsupportedEncodingException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class CustomerServiceTest {

    @Mock
    private CustomerRepository customerRepository;

    @Mock
    private JavaMailSender mailSender;

    @InjectMocks
    private CustomerService customerService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testExistsByEmail_EmailExists() {
        when(customerRepository.existsByEmail("test@example.com")).thenReturn(true);

        boolean result = customerService.existsByEmail("test@example.com");
        assertTrue(result);
    }

    @Test
    void testExistsByEmail_EmailDoesNotExist() {
        when(customerRepository.existsByEmail("test@example.com")).thenReturn(false);

        boolean result = customerService.existsByEmail("test@example.com");
        assertFalse(result);
    }

    @Test
    void testSave() {
        Customer customer = new Customer();
        customer.setEmail("test@example.com");
        when(customerRepository.save(customer)).thenReturn(customer);

        Customer savedCustomer = customerService.save(customer);
        assertEquals(customer, savedCustomer);
    }

    @Test
    void testSendVerificationEmail() throws MessagingException, UnsupportedEncodingException {
        Customer customer = new Customer();
        customer.setEmail("test@example.com");
        customer.setVerificationCode("verificationCode");

        MimeMessage mimeMessage = mock(MimeMessage.class);
        when(mailSender.createMimeMessage()).thenReturn(mimeMessage);

        customerService.sendVerificationEmail(customer, "verify");

        verify(mailSender).send(mimeMessage);
    }
} 