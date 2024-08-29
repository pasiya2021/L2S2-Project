package com.example.L2.S2.Project.service;

import com.example.L2.S2.Project.dao.request.PaymentDTO;
import com.example.L2.S2.Project.model.Order;
import com.example.L2.S2.Project.model.Payment;
import com.example.L2.S2.Project.repository.OrderRepository;
import com.example.L2.S2.Project.repository.PaymentRepository;
import com.stripe.Stripe;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final OrderRepository   orderRepository;

    @Value("${stripe.apiKey}")
    private String stripeApiKey;

    @PostConstruct
    public void init() {
        Stripe.apiKey = stripeApiKey;
    }

    public PaymentIntent createPaymentIntent(PaymentDTO paymentDTO) throws Exception {
        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAmount(paymentDTO.getAmount())
                .setCurrency(paymentDTO.getCurrency())
                .setReceiptEmail(paymentDTO.getEmail())
                .build();

        PaymentIntent intent = PaymentIntent.create(params);

        return intent;
    }

    public void savePaymentDetails(PaymentDTO paymentDTO) {

        Payment payment = new Payment();
        payment.setEmail(paymentDTO.getEmail());
        payment.setAmount(paymentDTO.getAmount());
        payment.setCurrency(paymentDTO.getCurrency());
        payment.setPaymentIntentId(paymentDTO.getPaymentIntentId());

        Optional<Order> optionalOrder = orderRepository.findById(paymentDTO.getOrderId());

        if (optionalOrder.isPresent()) {
            System.out.println(optionalOrder.get().getId());
            Order order = optionalOrder.get();
            payment.setOrder(order);
            paymentRepository.save(payment);
            order.setPaymentStatus("succeed");
            orderRepository.save(order);
        }

    }

}
