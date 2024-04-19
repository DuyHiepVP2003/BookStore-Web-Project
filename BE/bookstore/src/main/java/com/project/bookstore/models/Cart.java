package com.project.bookstore.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Data
public class Cart {
    private List<CartItem> cartItems;
    public Cart(){
        this.cartItems = new ArrayList<>();
    }
    public void addCartItem(CartItem cartItem){
        for (CartItem item: cartItems){
            if (item.getBook().getId().equals(cartItem.getBook().getId())){
                item.setQuantity(item.getQuantity()+1);
                return;
            }
        }
        cartItems.add(cartItem);
    }
}
