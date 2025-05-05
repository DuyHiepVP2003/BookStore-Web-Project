package com.project.bookstore.services;

import com.project.bookstore.models.Customer;
import com.project.bookstore.repositories.CustomerRepository;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private JavaMailSender mailSender;
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
    public Optional<Customer> findByEmail(String email){
        return customerRepository.findByEmail(email);
    }
    public Optional<Customer> findByVerificationCode(String code){
        return customerRepository.findByVerificationCode(code);
    }
    public boolean verify(String verificationCode){
        Customer customer = customerRepository.findByVerificationCode(verificationCode).orElse(null);
        if (customer == null || customer.isEnabled()) return false;
        customer.setEnabled(true);
        customerRepository.save(customer);
        return true;
    }
    public void sendVerificationEmail(Customer user, String type) throws MessagingException, UnsupportedEncodingException {
        String subject = "Please verify your registation";
        String senderName = "Book store";
        String siteURL = "http://localhost:5173";
        String mailContent = "<p>Dear customer,</p>";
        mailContent+="<p>Please click the link below to verify to your registation:</p>";
        String verifyURL = siteURL + "/"+type+"?code=" + user.getVerificationCode();
        mailContent+="<h3><a href=\""+ verifyURL + "\">VERIFY</a></h3>";
        mailContent+="<p>Thank you<br>Book store</p>";

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("buiduyhiep0@gmail.com", senderName);
        helper.setTo(user.getEmail());
        helper.setSubject(subject);
        helper.setText(mailContent, true);
        mailSender.send(message);
    }
}
