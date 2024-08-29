package com.example.L2.S2.Project.controller;

import com.example.L2.S2.Project.dao.request.SignInRequest;
import com.example.L2.S2.Project.dao.request.SignUpRequest;
import com.example.L2.S2.Project.dao.request.UpdateUserReq;
import com.example.L2.S2.Project.dao.response.JwtAuthenticationResponse;
import com.example.L2.S2.Project.exception.UserNotFoundException;
import com.example.L2.S2.Project.model.UpdateUser;
import com.example.L2.S2.Project.model.User;
import com.example.L2.S2.Project.repository.UserRepository;
import com.example.L2.S2.Project.service.AuthenticationService;
import com.example.L2.S2.Project.service.JwtService;
import com.example.L2.S2.Project.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/user")
@Component
@RequiredArgsConstructor
public class UserController {
    private final AuthenticationService authenticationService;
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<JwtAuthenticationResponse> signUp(@RequestBody SignUpRequest request) {
        return ResponseEntity.ok(authenticationService.signUp(request));
    }

    @PostMapping("/signin")
    public ResponseEntity<JwtAuthenticationResponse> signIn(@RequestBody SignInRequest request) {
        return ResponseEntity.ok(authenticationService.signIn(request));
    }

    @PostMapping("/adminSignup")
    public ResponseEntity<JwtAuthenticationResponse> adminSignup(@RequestBody SignUpRequest request) {
        return ResponseEntity.ok(authenticationService.adminSignup(request));
    }

    @PostMapping("/adminSignin")
    public ResponseEntity<JwtAuthenticationResponse> adminSignin(@RequestBody SignInRequest request) {
        return ResponseEntity.ok(authenticationService.signIn(request));
    }

    
    @PatchMapping("/{userId}/update")
    public ResponseEntity<?> updateUserDetails(@PathVariable Long userId, @RequestBody UpdateUserReq userDetails) {
        try {
            User updatedUser = userService.updateUserDetails(userId, userDetails);
            return ResponseEntity.ok(updatedUser);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while updating the user.");
        }
    }


    @PatchMapping("/{userId}/change-password")
    public ResponseEntity<String> changeUserPassword(@PathVariable("userId") Long userId, @RequestParam("newPassword") String newPassword) {
        try {
            authenticationService.updateUserPassword(userId, newPassword);
            return ResponseEntity.ok("Password updated successfully.");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @GetMapping("/userEmail/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        try {
            User user = userService.getUserByEmail(email);
            return ResponseEntity.ok(user);
        } catch (UserNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while fetching the user.");
        }
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable Long userId) {
        return userService.getUserById(userId);

    }
//    @GetMapping("/getUserId")
//    public String getUserId(HttpServletRequest request) {
//        String token = request.getHeader("Authorization").replace("Bearer ", "");
//        return jwtUtil.extractUserId(token);
//    }
}
