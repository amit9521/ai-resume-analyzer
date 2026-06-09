package com.somity.ai_resume_analyzer.controller;

import com.somity.ai_resume_analyzer.dto.LoginRequest;
import com.somity.ai_resume_analyzer.dto.LoginResponse;
import com.somity.ai_resume_analyzer.dto.SignupRequest;
import com.somity.ai_resume_analyzer.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest request) {

        return userService.signup(request);
    }

    @PostMapping("/login")
    public LoginResponse  login(@RequestBody LoginRequest request) {

        return userService.login(request);
    }
}
