package com.example.project1taskmanager.service;

import com.example.project1taskmanager.entity.Task;
import com.example.project1taskmanager.entity.User;
import com.example.project1taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

/**
 * Service class for handling task-related business logic
 */
@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    /**
     * Creates a new task for a user
     */
    public Task createTask(String title, String description, LocalDate dueDate, User user) {
        Task task = new Task(title, description, dueDate, user);
        return taskRepository.save(task);
    }

    /**
     * Retrieves all tasks for a specific user
     */
    public List<Task> getTasksByUser(User user) {
        return taskRepository.findByUserId(user.getId());
    }

    /**
     * Updates an existing task
     */
    public Task updateTask(Long taskId, String title, String description, LocalDate dueDate, User user) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        task.setTitle(title);
        task.setDescription(description);
        task.setDueDate(dueDate);
        return taskRepository.save(task);
    }

    /**
     * Deletes a task by its ID
     */
    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }
}