package com.project.bookstore.repositories;

import com.project.bookstore.models.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
