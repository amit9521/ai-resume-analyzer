package com.somity.ai_resume_analyzer.service;

import com.somity.ai_resume_analyzer.dto.SignupRequest;
import com.somity.ai_resume_analyzer.entity.User;
import com.somity.ai_resume_analyzer.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String signup(SignupRequest request) {

        User user = new User();

        user.setFullName(request.getFullName());

        user.setEmail(request.getEmail());

        user.setPassword(request.getPassword());

        userRepository.save(user);

        return "User Registered Successfully";
    }
}
