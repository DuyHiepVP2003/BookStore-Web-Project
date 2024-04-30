package com.project.bookstore.services;

import com.project.bookstore.models.OrderItem;
import com.project.bookstore.repositories.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderItemService {
    @Autowired
    private OrderItemRepository orderItemRepository;
    public List<OrderItem> getAllOrderItem(){
        return orderItemRepository.findAll();
    }
    public OrderItem save(OrderItem orderItem){
        return orderItemRepository.save(orderItem);
    }
}
