package com.Datacampus.Team5.service;

import com.Datacampus.Team5.repository.ResponseRepository;
import lombok.RequiredArgsConstructor;
import com.Datacampus.Team5.entity.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ResponseService {
    private final ResponseRepository responseRepository;

    public void insertdata(ResponseEntity responseEntity) {
        responseRepository.save(responseEntity);
    }

    public ResponseEntity response() {
        ResponseEntity responseEntity = responseRepository.findFirstBy();
        return responseEntity;
    }
}
