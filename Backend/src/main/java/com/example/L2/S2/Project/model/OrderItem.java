package com.example.L2.S2.Project.model;

import com.example.L2.S2.Project.model.Order;
import com.example.L2.S2.Project.model.Product;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "Order_Item")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int quantity;

    @ManyToOne
    private Order order;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public BigDecimal getTotalPrice() {
        BigDecimal price = BigDecimal.valueOf(product.getPrice()); // Convert double to BigDecimal
        return price.multiply(BigDecimal.valueOf(quantity)); // Use BigDecimal for multiplication
    }
}
