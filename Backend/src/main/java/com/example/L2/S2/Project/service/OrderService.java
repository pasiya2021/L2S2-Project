package com.example.L2.S2.Project.service;

import com.example.L2.S2.Project.dao.request.OrderItemRequest;
import com.example.L2.S2.Project.dao.request.OrderRequest;
import com.example.L2.S2.Project.dao.request.PaymentStatusUpdateDTO;
import com.example.L2.S2.Project.dao.response.OrderItemDetailsDTO;
import com.example.L2.S2.Project.model.*;
import com.example.L2.S2.Project.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    private final CustomerRepository customerRepository;
    public final UserRepository userRepository;
    private final DriverRepository driverRepository;
    private final ProductRepository productRepository;

    // public OrderService(OrderRepository orderRepository, CustomerRepository
    // customerRepository, DriverRepository driverRepository, ProductRepository
    // productRepository) {
    // this.orderRepository = orderRepository;
    // this.customerRepository = customerRepository;
    // this.driverRepository = driverRepository;
    // this.productRepository = productRepository;
    // }

    @Transactional
    public void createOrder(OrderRequest orderRequest) {
        // Retrieve customer
        // Customer customer =
        // customerRepository.findCustomerByEmail(orderRequest.getUserEmail())
        // .orElseThrow(() -> new RuntimeException("Customer not found with Email: " +
        // orderRequest.getUserEmail()));
        User user = userRepository.findById(orderRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found with Email: " + orderRequest.getUserId()));
        // create order

        /*
         * Order order= new Order();
         * order.setCustomer(customer);
         * order.setReturnDate(orderRequest.getReturnDate());
         */

        Order order = new Order();
        order.setUser(user);
        order.setReturnDate(orderRequest.getReturnDate());

        // Assign Deliver

        Driver driver = driverRepository.findById(orderRequest.getDriverId())
                .orElseThrow(() -> new RuntimeException("Delivery person not found"));

        order.setDriver(driver);

        DeliverDetails deliverDetails = new DeliverDetails();
        deliverDetails.setDriver(driver);

        order.setCreateAt(LocalDateTime.now());
        deliverDetails.setOrder(order);
        driver.addOrder(deliverDetails);
        order.setPaymentStatus(orderRequest.getPaymentStatus());
        orderRepository.save(order);
        // process order items
        for (OrderItemRequest itemRequest : orderRequest.getOrderItems()) {
            Product product = productRepository.findById(itemRequest.getProductId())
                    .orElseThrow(
                            () -> new RuntimeException("Product not found with ID: " + itemRequest.getProductId()));

            orderItemRepository.save(OrderItem.builder()
                    .product(product)
                    .quantity(itemRequest.getQuantity())
                    .order(order)
                    .build());

            // Check if there is enough quantity available
//            if (product.getQuantity() >= itemRequest.getQuantity()) {
//                OrderItem orderItem = new OrderItem();
//                orderItem.setProduct(product);
//                orderItem.setQuantity(itemRequest.getQuantity());
//                order.addOrderItem(orderItem);
//
//                // update product quantity
//                product.setQuantity(product.getQuantity() - itemRequest.getQuantity());
//                productRepository.save(product);
//            } else {
//                throw new RuntimeException(
//                        "Not enough quantity available for product with ID: " + itemRequest.getProductId());
//            }
        }

        // save the order


    }

    public List<Order> allOrders() {
        return orderRepository.findAll();
    }

    public List<OrderItemDetailsDTO> getOrderDetailsByUserId(Long userId) {
        List<Order> orders = orderRepository.findByUserId(userId);
        List<OrderItemDetailsDTO> orderDetails = new ArrayList<>();
        for (Order order : orders) {
            for (OrderItem item : order.getOrderItems()) {
                OrderItemDetailsDTO detail = OrderItemDetailsDTO.builder()
                        .productName(item.getProduct().getTitle())
                        .quantity(item.getQuantity())
                        .price(item.getProduct().getPrice())
                        .imageUrl(item.getProduct().getImageUrl())
                        .orderItemId(item.getId())
                        .paymentStatus(order.getPaymentStatus())
                        .build();
                orderDetails.add(detail);
            }
        }
        return orderDetails;
    }

    public void deleteOrderItems(Long orderItemId) {
        orderItemRepository.deleteById(orderItemId);
    }


    @PatchMapping("/updateOrderStatus/{orderId}")
    public ResponseEntity<String> updateOrderPaymentStatus(@PathVariable Long orderId, @RequestBody PaymentStatusUpdateDTO paymentStatusUpdateDTO) {
        System.out.println("Order ID: " + orderId);
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if (optionalOrder.isPresent()) {
            Order order = optionalOrder.get();
            order.setPaymentStatus(paymentStatusUpdateDTO.getPaymentStatus());
            orderRepository.save(order);
            return ResponseEntity.ok("Order payment status updated successfully");
        } else {
            return ResponseEntity.status(404).body("Order not found with ID: " + orderId);
        }

    }
}
