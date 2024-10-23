package com.example.project1taskmanager.controller;

import com.example.project1taskmanager.model.User;
import com.example.project1taskmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.registerUser(user.getUsername(), user.getPassword());
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return userService.loginUser(user.getUsername(), user.getPassword());
    }

    //find all users
    @GetMapping("/all")
    public Iterable<User> findAll() {
        return userService.findAll();
    }

    @GetMapping("/{userId}")
    public User findById(@PathVariable Long userId) {
        return userService.findById(userId);
    }

    @GetMapping("/hello")
    public String hello(){
        return "Hello World";
    }
}