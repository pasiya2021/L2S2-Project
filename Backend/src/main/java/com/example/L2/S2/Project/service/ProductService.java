package com.example.L2.S2.Project.service;

import com.example.L2.S2.Project.dao.request.ProductRequest;
import com.example.L2.S2.Project.model.Product;
import com.example.L2.S2.Project.repository.CategoryRepository;
import com.example.L2.S2.Project.repository.ProductRepository;
import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    private Map<Long, Product> productCache = new HashMap<>();

    public Product getProductById(Long id) {
        if (!productCache.containsKey(id)) {
            Product product = productRepository.findById(id).orElse(null);
            if (product == null) {
                return null;
            }
            productCache.put(id, product);
        }
        return productCache.get(id);
    }

    public List<Product> allProduct() {
        return productRepository.findAll();
    }

//    public Product updateProductById(Long id, Product product) {
//        Optional<Product> existProduct = productRepository.findById(id);
//        if (existProduct.isPresent()) {
//            Product orginalProduct = existProduct.get();
//            if (Objects.nonNull(product.getTitle()) && !"".equalsIgnoreCase(product.getTitle())) {
//                orginalProduct.setTitle(product.getTitle());
//            }
//            if (product.getPrice() != 0) {
//                orginalProduct.setPrice(product.getPrice());
//            }
//            if (product.getQuantity() != 0) {
//                orginalProduct.setQuantity(product.getQuantity());
//            }
//            if (!"".equalsIgnoreCase(product.getImageUrl())) {
//                orginalProduct.setImageUrl(product.getImageUrl());
//            }
//            if (!"".equalsIgnoreCase(product.getDescription())) {
//                orginalProduct.setDescription(product.getDescription());
//            }
//            if (!"".equalsIgnoreCase(product.getBrand())) {
//                orginalProduct.setBrand(product.getBrand());
//            }
//            return productRepository.save(orginalProduct);
//        }
//        return null;
//    }

    public String deleteProductById(Long id) {
        if (productRepository.findById(id).isPresent()) {
            productRepository.deleteById(id);
            return "product deleted successfully...";
        }
        return "no such product in the database";
    }

    public Product addProduct(Product product) {
        product.setCreatedAt(LocalDateTime.now());
        return productRepository.save(product);
    }

    public List<ProductRequest> allProductBasics() {

        return productRepository.findAllProductRequests();
    }

    public ProductRequest addProductRequest(ProductRequest product) {

        System.out.println("Product: " + product);
        Product newProduct = new Product();
        newProduct.setTitle(product.getName());
        newProduct.setDescription(product.getDescription());
        newProduct.setBrand(product.getBrand());
        newProduct.setPrice(product.getPrice());
        newProduct.setImageUrl(product.getImageUrl());
        newProduct.setCategory(categoryRepository.findById(product.getCategory()).orElse(null));
        return toProductRequest(productRepository.save(newProduct));
    }

    public ProductRequest toProductRequest(Product product) {
        return new ProductRequest(
                product.getId(),
                product.getTitle(),
                product.getDescription(),
                product.getBrand(),
                product.getCategory().getId(),
                product.getPrice(),
                product.getImageUrl());
    }


    public List<ProductRequest> allProductBasicsByCategory(Long categoryID) {
        List<Product> products = productRepository.findAllByCategoryId(categoryID);
        return products.stream()
                .map(this::convertToProductRequest)
                .collect(Collectors.toList());
    }

    private ProductRequest convertToProductRequest(Product product) {
        ProductRequest productRequest = new ProductRequest();
//        productRequest.setId(product.getId());
//        productRequest.setDescription(product.getDescription());
//        productRequest.setPrice(product.getPrice());
//        productRequest.setBrand(product.getBrand());
//        productRequest.setName(product.getTitle());

        productRequest.setId(product.getId());
        productRequest.setName(product.getTitle());
        productRequest.setDescription(product.getDescription());
        productRequest.setBrand(product.getBrand());
        productRequest.setCategory(product.getCategory().getId());
        productRequest.setPrice(product.getPrice());
        productRequest.setImageUrl(product.getImageUrl());

        // Set other fields as necessary
        return productRequest;
    }
//    public List<Product> findProductsByWarehouse(Long warehouseId) {
//         productRepository.findByWarehouseId(warehouseId);
//         return productRepository.findAllProductsInWarehouses(warehouseId);
//    }
}
