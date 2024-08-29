package com.example.L2.S2.Project.controller;

import com.example.L2.S2.Project.dao.request.PaymentDTO;
import com.example.L2.S2.Project.service.PaymentService;
import com.stripe.model.PaymentIntent;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;


    @PostMapping("/create")
    public ResponseEntity<?> createPaymentIntent(@RequestBody PaymentDTO paymentDTO) {
        try {
            PaymentIntent intent = paymentService.createPaymentIntent(paymentDTO);
            return ResponseEntity.ok(intent.getClientSecret());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/save")
    public ResponseEntity<?> savePaymentDetails(@RequestBody PaymentDTO paymentDTO) {
        paymentService.savePaymentDetails(paymentDTO);
        return ResponseEntity.ok("Payment details saved successfully");
    }
}

