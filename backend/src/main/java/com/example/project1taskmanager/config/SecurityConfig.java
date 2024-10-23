package com.example.project1taskmanager.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // 禁用 CSRF
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/users/register", "/api/users/login").permitAll() // 开放用户注册和登录接口
                        //.requestMatchers("/api/tasks/**").authenticated() // 任务相关 API 需要认证
                        .anyRequest().permitAll() // 其他请求都允许访问
                )
                .httpBasic(httpBasic -> {}); // 使用 lambda 风格配置 HTTP Basic 认证

        return http.build();
    }

//    @Bean
//    public CorsFilter corsFilter() {
//        CorsConfiguration config = new CorsConfiguration();
//        config.addAllowedOrigin("http://localhost:3000");
//        config.addAllowedMethod("*");
//        config.addAllowedHeader("*");
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", config);
//
//        return new CorsFilter(source);
//    }

}