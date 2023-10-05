package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.Users;

public interface UserRepo extends JpaRepository<Users, Long> {
    Users findByUsername(String username);
}
