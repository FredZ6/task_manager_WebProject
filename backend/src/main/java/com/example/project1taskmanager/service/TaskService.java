package com.example.project1taskmanager.service;

import com.example.project1taskmanager.model.Task;
import com.example.project1taskmanager.model.User;
import com.example.project1taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(String title, String description, User user) {
        Task task = new Task(title, description, null, user);
        return taskRepository.save(task);
    }

    public List<Task> getTasksByUser(User user) {
        return taskRepository.findByUserId(user.getId());
    }

    public Task updateTask(Long taskId, String title, String description, LocalDate dueDate, User user) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        task.setTitle(title);
        task.setDescription(description);
        task.setDueDate(dueDate);
        return taskRepository.save(task);
    }



    public void deleteTask(Long taskId) {
        taskRepository.deleteById(taskId);
    }
}