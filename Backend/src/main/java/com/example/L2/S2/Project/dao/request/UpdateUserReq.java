package com.example.L2.S2.Project.dao.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UpdateUserReq {

    private String profilePhotoUrl;
    private String fullName;
    private String phone;
    private String companyId;
    private String address;
    private String district;
}
