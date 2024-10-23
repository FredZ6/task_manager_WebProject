package com.example.project1taskmanager.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    private String description;

    //@Column(nullable = false)
    @Column(name = "due_date")
    private LocalDate dueDate;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    // 构造函数、Getter 和 Setter

    public Task() {}

    public Task(String title, String description, LocalDate dueDate, User user) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
