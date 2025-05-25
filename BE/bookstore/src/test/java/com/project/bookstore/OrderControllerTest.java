package com.project.bookstore;

import com.project.bookstore.controllers.OrderController;
import com.project.bookstore.models.Order;
import com.project.bookstore.models.OrderItem;
import com.project.bookstore.models.OrderRequest;
import com.project.bookstore.models.ResponseObject;
import com.project.bookstore.services.OrderService;
import com.project.bookstore.services.OrderItemService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class OrderControllerTest {

    @Mock
    private OrderService orderService;

    @Mock
    private OrderItemService orderItemService;

    @InjectMocks
    private OrderController orderController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllOrders() {
        List<Order> orders = Arrays.asList(new Order(), new Order());
        when(orderService.findAll()).thenReturn(orders);

        ResponseEntity<ResponseObject> response = orderController.getAllOrders();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
        assertEquals(orders, response.getBody().getData());
    }

    @Test
    void testGetOrderById_OrderExists() {
        Order order = new Order();
        order.setId(1L);
        when(orderService.findById(1L)).thenReturn(Optional.of(order));

        ResponseEntity<ResponseObject> response = orderController.getOrderById(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
        assertEquals(order, response.getBody().getData());
    }

    @Test
    void testGetOrderById_OrderNotExists() {
        when(orderService.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<ResponseObject> response = orderController.getOrderById(1L);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ERROR", response.getBody().getStatus());
    }

    @Test
    void testCreateOrder() {
        OrderRequest orderRequest = new OrderRequest();
        Order order = new Order();
        when(orderService.save(any(Order.class))).thenReturn(order);

        ResponseEntity<ResponseObject> response = orderController.createOrder(orderRequest);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
    }

    @Test
    void testUpdateOrder_OrderExists() {
        Order order = new Order();
        order.setId(1L);
        when(orderService.findById(1L)).thenReturn(Optional.of(order));
        when(orderService.save(any(Order.class))).thenReturn(order);

        ResponseEntity<ResponseObject> response = orderController.updateOrder(1L, order);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
    }

    @Test
    void testUpdateOrder_OrderNotExists() {
        when(orderService.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<ResponseObject> response = orderController.updateOrder(1L, new Order());

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ERROR", response.getBody().getStatus());
    }

    @Test
    void testDeleteOrder_OrderExists() {
        Order order = new Order();
        order.setId(1L);
        when(orderService.findById(1L)).thenReturn(Optional.of(order));

        ResponseEntity<ResponseObject> response = orderController.deleteOrder(1L);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("OK", response.getBody().getStatus());
        verify(orderService).deleteById(1L);
    }

    @Test
    void testDeleteOrder_OrderNotExists() {
        when(orderService.findById(1L)).thenReturn(Optional.empty());

        ResponseEntity<ResponseObject> response = orderController.deleteOrder(1L);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("ERROR", response.getBody().getStatus());
    }
} 