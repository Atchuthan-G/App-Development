package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Users;
import com.example.demo.Service.UserService;


@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signUp(@RequestBody Users userDto) {
        Users existingUser = userService.findByUsername(userDto.getUsername());
        if (existingUser != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already exists");
        }

        Users userEntity = new Users();
        userEntity.setEmail(userDto.getEmail());
        userEntity.setFullName(userDto.getFullName());
        userEntity.setUsername(userDto.getUsername());
        userEntity.setPassword(userDto.getPassword());

        try {
            userService.createUser(userEntity);
            return ResponseEntity.ok("User created successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to create user: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Users userDto) {
        Users userEntity = userService.findByUsername(userDto.getUsername());
        if (userEntity == null || !userEntity.getPassword().equals(userDto.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }

        // Handle successful login, such as generating and returning an authentication token
        return ResponseEntity.ok("Login successful");
    }
//    @PostMapping("/cars")
//    public ResponseEntity<String> addCar(@RequestBody UserEntity carEntity) {
//        // Perform necessary operations to add the car to the database
//        // For example, you can use a service class to handle the business logic
//
//        try {
//            // Save the carEntity to the database or perform any other required operations
//            // You can replace the println statements with the appropriate logic for your application
//
//            System.out.println("Received car details:");
//            System.out.println("Car Name: " + carEntity.getCarName());
//            System.out.println("Car Number: " + carEntity.getCarNumber());
//            System.out.println("Slot Number: " + carEntity.getSlotNumber());
//            System.out.println("Parked Time: " + carEntity.getParkedTime());
//
//            // Return a success response
//            return ResponseEntity.ok("Car added successfully");
//        } catch (Exception e) {
//            // Return an error response if there's an exception
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding car");
//        }
//    }

}
