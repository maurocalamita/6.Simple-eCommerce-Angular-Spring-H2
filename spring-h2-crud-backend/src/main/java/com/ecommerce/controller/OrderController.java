package com.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.entities.Order;
import com.ecommerce.entities.OrderProduct;
import com.ecommerce.service.OrderProductService;
import com.ecommerce.service.OrderService;



@RestController
@CrossOrigin(origins = "http://localhost:4200") 
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
    
    @GetMapping("/order-products")
    public ResponseEntity<Page<OrderProduct>> getAllOrderProducts(Pageable pageable) {
        Page<OrderProduct> orderProducts = orderProductService.getAllOrderProducts(pageable);
        return ResponseEntity.ok(orderProducts);
    }
    
    
}

