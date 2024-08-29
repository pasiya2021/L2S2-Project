package com.example.L2.S2.Project.service;

import com.example.L2.S2.Project.dao.request.UpdateUserReq;
import com.example.L2.S2.Project.exception.UserNotFoundException;
import com.example.L2.S2.Project.model.UpdateUser;
import com.example.L2.S2.Project.model.User;
import com.example.L2.S2.Project.repository.UpdateUserRepository;
import com.example.L2.S2.Project.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {


    private final UserRepository userRepository;
    private final UpdateUserRepository updateUserRepository;

//    @Autowired
//    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
//    }

    public UserDetailsService userDetailsService() {
        return email -> userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found exception"));
    }

    public User updateUserDetails(Long userId, UpdateUserReq userDetails) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found for ID: " + userId));

        user.setProfilePhotoUrl(userDetails.getProfilePhotoUrl());
        user.setFullName(userDetails.getFullName());
        user.setPhone(userDetails.getPhone());
        user.setCompanyId(userDetails.getCompanyId());
        user.setAddress(userDetails.getAddress());
        user.setDistrict(userDetails.getDistrict());

        // update other fields as necessary

        return userRepository.save(user);
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found for email: " + email));
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found for ID: " + userId));
    }
}

//package com.example.L2.S2.Project.service;
//
//import com.example.L2.S2.Project.repository.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//public class UserService {
//
//    private final UserRepository userRepository;
//
//    @Autowired
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    public UserDetailsService userDetailsService() {
//        return email -> userRepository.findByEmail(email)
//                .orElseThrow(() -> new UsernameNotFoundException("User not found exception"));
//    }
//
//}
