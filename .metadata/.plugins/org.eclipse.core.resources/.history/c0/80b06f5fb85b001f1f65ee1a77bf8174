package com.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.entities.Order;
import com.ecommerce.service.OrderProductService;
import com.ecommerce.service.OrderService;



@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderProductService orderProductService;
    
    @Autowired
    private OrderService orderService;

    @PostMapping("/{orderId}/products/{productId}")
    public ResponseEntity<String> addProductToOrder(
            @PathVariable Long orderId,
            @PathVariable Long productId,
            @RequestParam Integer quantity) {

        orderProductService.addProductToOrder(orderId, productId, quantity);
        return ResponseEntity.ok("Product added to order successfully");
    }
    
    @PostMapping("/create")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order createdOrder = orderService.createOrder(order);
        return ResponseEntity.ok(createdOrder);
    }
}
