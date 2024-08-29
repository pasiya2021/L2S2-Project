package com.example.L2.S2.Project.repository;

import com.example.L2.S2.Project.model.Order;
import com.example.L2.S2.Project.model.UpdateUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UpdateUserRepository extends JpaRepository<UpdateUser, Long> {

    Optional<UpdateUser> findByUserId(Long userId);
}
