package com.example.L2.S2.Project.dao.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDetailsDTO {
    private String productName;
    private int quantity;
    private double price;
    private String imageUrl;
    private Long orderItemId;
    private String paymentStatus;
    public BigDecimal getTotalPrice() {
        return BigDecimal.valueOf(price * quantity);
    }

}

