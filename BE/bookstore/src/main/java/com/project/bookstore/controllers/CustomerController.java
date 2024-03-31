package com.project.bookstore.controllers;

import com.project.bookstore.models.Customer;
import com.project.bookstore.models.ResponseObject;
import com.project.bookstore.services.CustomerService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(path = "/api/v1/Customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;
    @GetMapping(path = "")
    public ResponseEntity<ResponseObject> getAllCustomer(){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Get All Customer Success", customerService.findAll())
        );
    }
    @PostMapping(path = "/save")
    public ResponseEntity<ResponseObject> saveNewCustomer(@RequestBody Customer newCustomer){
        boolean isCustomerExists = customerService.existsByEmail(newCustomer.getEmail());
        if (isCustomerExists) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    new ResponseObject("ERROR", "Email Exists", "")
            );
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Save New Customer Success", customerService.save(newCustomer))
        );
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<ResponseObject> deleteCustomerById(@PathVariable Long id){
        Customer customer = customerService.findById(id).orElse(null);
        if (customer == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Cannot Found Customer ID = "+id, "")
            );
        }
        customerService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Delete Customer ID ="+id+ " Success", customer)
        );
    }
    @PutMapping(path = "/update/{id}")
    public ResponseEntity<ResponseObject> updateCustomerById(@PathVariable Long id, @RequestBody Customer newCustomer){
        Customer updateCustomer = customerService.findById(id).orElse(null);
        if (updateCustomer == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Cannot Found Customer ID = "+id,"")
            );
        }
        boolean isCustomerExists = customerService.existsByEmail(newCustomer.getEmail());
        if (updateCustomer.getEmail().equals(newCustomer.getEmail())){
            isCustomerExists = false;
        }
        if (isCustomerExists) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(
                    new ResponseObject("ERROR", "Email Exists", "")
            );
        }
        BeanUtils.copyProperties(newCustomer, updateCustomer, "id");
        Customer saveCustomer = customerService.save(updateCustomer);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Update Customer ID = " + id +"Success", saveCustomer)
        );
    }
}
