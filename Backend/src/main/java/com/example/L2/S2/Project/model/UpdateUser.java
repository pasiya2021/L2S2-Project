package com.example.L2.S2.Project.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "UserUpdate")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long UpdateId;

    private String address;
    private String profilePhotoUrl;
    private String fullName;
    private String phone;
    private String CompanyId;

    @OneToOne
    private User user;
}
