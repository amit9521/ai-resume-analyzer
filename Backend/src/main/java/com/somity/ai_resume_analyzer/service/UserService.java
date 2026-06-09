package com.somity.ai_resume_analyzer.service;

import com.somity.ai_resume_analyzer.dto.LoginRequest;
import com.somity.ai_resume_analyzer.dto.LoginResponse;
import com.somity.ai_resume_analyzer.dto.SignupRequest;
import com.somity.ai_resume_analyzer.entity.User;
import com.somity.ai_resume_analyzer.exception.EmailAlreadyExistsException;
import com.somity.ai_resume_analyzer.exception.InvalidCredentialsException;
import com.somity.ai_resume_analyzer.repository.UserRepository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

        private final UserRepository userRepository;
        private final BCryptPasswordEncoder passwordEncoder;

        public UserService(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
                this.userRepository = userRepository;
                this.passwordEncoder = passwordEncoder;
        }

        public String signup(SignupRequest request) {

                User user = new User();

                user.setFullName(request.getFullName());

                if (userRepository.findByEmail(request.getEmail()).isPresent()) {
                        throw new EmailAlreadyExistsException("Email already exists");
                }
                user.setEmail(request.getEmail());

                user.setPassword(passwordEncoder.encode(request.getPassword()));

                userRepository.save(user);

                return "User Registered Successfully";
        }

        public LoginResponse login(LoginRequest request) {

                User user = userRepository.findByEmail(request.getEmail())
                                .orElseThrow(() -> new InvalidCredentialsException("Invalid email or password"));

                boolean matches = passwordEncoder.matches(request.getPassword(),user.getPassword());

                if (!matches) {
                            throw new InvalidCredentialsException("Invalid email or password");
                }
                         return new LoginResponse("Login Successful",user.getEmail());
        }
}
