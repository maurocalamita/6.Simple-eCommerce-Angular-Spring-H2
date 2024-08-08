package com.ecommerce.service;

import org.springframework.stereotype.Service;

import com.ecommerce.entities.Order;

@Service
public interface OrderProductService {
    void addProductToOrder(Long orderId, Long productId, Integer quantity);
}
