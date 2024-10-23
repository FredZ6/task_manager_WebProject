package com.example.project1taskmanager.service;

import com.example.project1taskmanager.model.User;
import com.example.project1taskmanager.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User registerUser(String username, String password) {
        if (userRepository.findByUsername(username) != null) {
            throw new RuntimeException("User already exists");
        }
        String encodedPassword = passwordEncoder.encode(password);
        User user = new User(username, encodedPassword);
        return userRepository.save(user);
    }

    public User loginUser(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user == null || !passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("Invalid username or password");
        }
        return user;
    }

    //find all users
    public Iterable<User> findAll() {
        return userRepository.findAll();
    }

    public User findById(Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
    }
}