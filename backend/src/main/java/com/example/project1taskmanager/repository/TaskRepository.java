package com.example.project1taskmanager.repository;

import com.example.project1taskmanager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

    // 根据用户ID查找任务
    List<Task> findByUserId(Long userId);
}