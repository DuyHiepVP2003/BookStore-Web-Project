package com.project.bookstore;

import com.project.bookstore.models.Order;
import com.project.bookstore.repositories.OrderRepository;
import com.project.bookstore.services.OrderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    @InjectMocks
    private OrderService orderService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testFindAll() {
        List<Order> orders = Arrays.asList(new Order(), new Order());
        when(orderRepository.findAll()).thenReturn(orders);

        List<Order> result = orderService.findAll();

        assertEquals(orders, result);
    }

    @Test
    void testFindById_OrderExists() {
        Order order = new Order();
        order.setId(1L);
        when(orderRepository.findById(1L)).thenReturn(Optional.of(order));

        Optional<Order> result = orderService.findById(1L);

        assertTrue(result.isPresent());
        assertEquals(order, result.get());
    }

    @Test
    void testFindById_OrderNotExists() {
        when(orderRepository.findById(1L)).thenReturn(Optional.empty());

        Optional<Order> result = orderService.findById(1L);

        assertFalse(result.isPresent());
    }

    @Test
    void testSave() {
        Order order = new Order();
        when(orderRepository.save(any(Order.class))).thenReturn(order);

        Order result = orderService.save(order);

        assertEquals(order, result);
    }

    @Test
    void testDeleteById() {
        doNothing().when(orderRepository).deleteById(1L);

        orderService.deleteById(1L);

        verify(orderRepository).deleteById(1L);
    }
} 