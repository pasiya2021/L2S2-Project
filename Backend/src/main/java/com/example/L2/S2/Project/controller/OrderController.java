package com.example.L2.S2.Project.controller;

import com.example.L2.S2.Project.dao.request.OrderRequest;
import com.example.L2.S2.Project.dao.request.PaymentStatusUpdateDTO;
import com.example.L2.S2.Project.dao.response.OrderItemDetailsDTO;
import com.example.L2.S2.Project.model.Order;
import com.example.L2.S2.Project.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/order")
public class OrderController {
    private final OrderService orderService;

    
    @PostMapping("/create")
    // @PreAuthorize("hasAnyAuthority('User')")
    public ResponseEntity<String> createOrder(@RequestBody OrderRequest orderRequest) {
        orderService.createOrder(orderRequest);
        return new ResponseEntity<>("Order created successfully", HttpStatus.OK);
    }

    @GetMapping("/all")
    // @PreAuthorize("hasAnyAuthority('Admin','User')")
    public List<Order> allOrders() throws IllegalStateException {
        return orderService.allOrders();
    }

    @GetMapping("/user/{userId}/details")
    public ResponseEntity<List<OrderItemDetailsDTO>> getOrderDetailsByUserId(@PathVariable Long userId) {
        List<OrderItemDetailsDTO> orderDetails = orderService.getOrderDetailsByUserId(userId);
        return ResponseEntity.ok(orderDetails);
    }

//    @DeleteMapping("/delete/{orderId}")
//    // @PreAuthorize("hasAnyAuthority('Admin')")
//    public ResponseEntity<String> deleteOrder(@PathVariable Long orderId) {
//        orderService.deleteOrder(orderId);
//        return new ResponseEntity<>("Order deleted successfully", HttpStatus.OK);
//    }

    @DeleteMapping("/delete/{orderItemId}")
    // @PreAuthorize("hasAnyAuthority('Admin')")
    public ResponseEntity<String> deleteOrderItems(@PathVariable Long orderItemId) {
        System.out.println("Order Item ID: " + orderItemId);
        orderService.deleteOrderItems(orderItemId);
        return new ResponseEntity<>("Order items deleted successfully", HttpStatus.OK);
    }

    @PatchMapping("updateOrderStatus/{orderId}")
    public ResponseEntity<String> updateOrderPaymentStatus(@PathVariable Long orderId, @RequestBody PaymentStatusUpdateDTO PaymentStatus) {
        orderService.updateOrderPaymentStatus(orderId, PaymentStatus);
        return new ResponseEntity<>("Order status updated successfully", HttpStatus.OK);
    }


//    // Endpoint to get total price of a single order
//    @GetMapping("/{orderId}/total")
//    public ResponseEntity<BigDecimal> getOrderTotal(@PathVariable Long orderId) {
//        BigDecimal total = orderService.calculateOrderTotal(orderId);
//        return ResponseEntity.ok(total);
//    }

//    // Endpoint to get grand total of all orders
//    @GetMapping("/grandtotal")
//    public ResponseEntity<BigDecimal> getGrandTotal() {
//        BigDecimal grandTotal = orderService.calculateGrandTotal();
//        return ResponseEntity.ok(grandTotal);
//    }

//    @GetMapping("/{orderId}/details")
//    public ResponseEntity<Map<String, Object>> getOrderDetailsWithGrandTotal(@PathVariable Long orderId) {
//        List<OrderItemDetailsDTO> orderDetails = orderService.getOrderDetails(orderId);
//        BigDecimal grandTotal = orderService.calculateGrandTotal();
//
//        Map<String, Object> response = new HashMap<>();
//        response.put("orderDetails", orderDetails);
//        response.put("grandTotal", grandTotal);
//
//        return ResponseEntity.ok(response);
//    }

}
