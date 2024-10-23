package com.example.project1taskmanager.controller;



import com.example.project1taskmanager.model.Task;
import com.example.project1taskmanager.model.User;
import com.example.project1taskmanager.service.TaskService;
import com.example.project1taskmanager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @Autowired
    private UserService userService;

    // 创建任务
//    @PostMapping("/create")
//    public Task createTask(@RequestParam String title,
//                           @RequestParam String description,
//                           @RequestParam Long userId) {
//        User user = userService.findById(userId);
//        return taskService.createTask(title, description, user);
//    }
    @PostMapping("/create")
    public Task createTask(@RequestBody Map<String, Object> requestBody) {
        String title = (String) requestBody.get("title");
        String description = (String) requestBody.get("description");
        Long userId = Long.valueOf(requestBody.get("userId").toString());
        User user = userService.findById(userId);

        return taskService.createTask(title, description, user);
    }

    // 获取指定用户的所有任务
    @GetMapping("/{userId}")
    public List<Task> getTasksByUser(@PathVariable Long userId) {
        User user = userService.findById(userId);
        return taskService.getTasksByUser(user);
    }

    // 更新任务
    @PutMapping("/{taskId}")
    public Task updateTask(@PathVariable Long taskId,
                           @RequestBody Map<String, Object> requestBody) {
        String title = (String) requestBody.get("title");
        String description = (String) requestBody.get("description");
        Long userId = Long.valueOf(requestBody.get("userId").toString());
        User user = userService.findById(userId);
        String dueDateStr = (String) requestBody.get("dueDate"); // 从请求体获取 dueDate
        LocalDate dueDate = dueDateStr != null ? LocalDate.parse(dueDateStr) : null; // 将字符串转为 LocalDate

        return taskService.updateTask(taskId, title, description, dueDate, user);
    }

    // 删除任务
    @DeleteMapping("/{taskId}")
    public void deleteTask(@PathVariable Long taskId) {
        taskService.deleteTask(taskId);
        System.out.println("Task"+ taskId +" is deleted");
    }
}