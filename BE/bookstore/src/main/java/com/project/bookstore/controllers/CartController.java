package com.project.bookstore.controllers;

import com.project.bookstore.models.CartItem;
import com.project.bookstore.models.ResponseObject;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/cart")
public class CartController {
        @PostMapping(path = "/add")
        public ResponseEntity<ResponseObject> addToCart(HttpSession session, @RequestBody CartItem cartItem){
            List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");
            if (cart==null){
                cart = new ArrayList<>();
                session.setAttribute("cart", cart);
            }
            cart.add(cartItem);
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK", "Post new cart item", cart)
            );
        }
        @GetMapping(path = "/get")
        public ResponseEntity<ResponseObject> getCart(HttpSession session){
            List<CartItem> cart = (List<CartItem>) session.getAttribute("cart");
            if (cart==null){
                cart = new ArrayList<>();
                session.setAttribute("cart", cart);
            }
            return ResponseEntity.status(HttpStatus.OK).body(
                    new ResponseObject("OK", "Get cart", cart)
            );
        }
}
