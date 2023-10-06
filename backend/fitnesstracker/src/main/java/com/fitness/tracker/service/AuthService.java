package com.fitness.tracker.service;

import com.fitness.tracker.dto.request.AuthenticationRequest;
import com.fitness.tracker.dto.request.RegisterRequest;
import com.fitness.tracker.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);

}
