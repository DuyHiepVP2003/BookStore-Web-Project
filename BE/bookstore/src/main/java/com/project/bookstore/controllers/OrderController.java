package com.project.bookstore.controllers;

import com.project.bookstore.models.*;
import com.project.bookstore.services.OrderItemService;
import com.project.bookstore.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/Order")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private OrderItemService orderItemService;
    @GetMapping(path = "")
    public ResponseEntity<ResponseObject> getAllOrder(){
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Get All Order Success", orderService.findAll())
        );
    }
    @GetMapping(path = "/{id}")
    public ResponseEntity<ResponseObject> findById(@PathVariable Long id){
        Order order = orderService.findById(id).orElse(null);
        if (order == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Cannot found Order ID = "+id, "")
            );
        }
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Get Order ID = "+id+"Success", orderService.findById(id) )
        );
    }
    @PostMapping(path = "/save")
    public ResponseEntity<ResponseObject> saveNewOrder(@RequestBody OrderRequest orderRequest){
        Order newOrder = new Order();
        newOrder.setEmail(orderRequest.getEmail());
        newOrder.setAddress(orderRequest.getAddress());
        newOrder.setCheckOut(false);
        newOrder.setPhoneNumber(orderRequest.getPhoneNumber());
        newOrder.setFirstName(orderRequest.getFirstName());
        newOrder.setLastName(orderRequest.getLastName());
        newOrder.setTotal(orderRequest.getTotal());
        List<OrderItem> orderItems = new ArrayList<>();
        for (OrderItemRequest orderItemRequest: orderRequest.getOrderItems()){
            OrderItem orderItem = new OrderItem();
            orderItem.setBook(orderItemRequest.getBook());
            orderItem.setQuantity(orderItemRequest.getQuantity());
            orderItem.setOrder(newOrder);
            orderItems.add(orderItem);
        }
        newOrder.setOrderItems(orderItems);
        orderService.save(newOrder);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Save new success", newOrder)
        );
    }
    @PutMapping(path = "/update/{id}")
    public ResponseEntity<ResponseObject> changeOrderStatus(@PathVariable Long id){
        Order order = orderService.findById(id).orElse(null);
        if (order == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                    new ResponseObject("ERROR", "Cannot found Order ID = "+id, "")
            );
        }
        order.setCheckOut(!order.isCheckOut());
        orderService.save(order);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Change status success", "")
        );
    }
    @DeleteMapping(path = "/delete/{id}")
    public ResponseEntity<ResponseObject> deleteById(@PathVariable Long id){
        orderService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(
                new ResponseObject("OK", "Delete success", "")
        );
    }
}
