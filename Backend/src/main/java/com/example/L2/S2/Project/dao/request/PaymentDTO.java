package com.example.L2.S2.Project.dao.request;


import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentDTO {


    @NotNull
    private String email;

    @NotNull
    private Long amount;

    @NotNull
    private String currency;

    // Getters and setters
    private Long orderId;

    private String paymentIntentId;
}
