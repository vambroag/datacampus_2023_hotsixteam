package com.Datacampus.Team5.controller;


import com.Datacampus.Team5.constants.PageSet;
import com.Datacampus.Team5.entity.ResponseEntity;
import com.Datacampus.Team5.service.ResponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/")
@RequiredArgsConstructor
public class MainController {
    private final ResponseService responseService;

    @GetMapping("/")
    public String getIndex() {
        return "index";
    }

    @GetMapping("/survey/survey")
    public String getSurbey() {
        return "survey";
    }

    @ResponseBody
    @PostMapping("/answer")
    public HashMap<String, String> getAnswer(@RequestBody ResponseEntity responseEntity) {
        responseEntity.setResult(11111);
        responseService.insertdata(responseEntity);
        HashMap<String, String> result = new HashMap<String, String>();
        try {
            String[] command = new String[] {"python.exe", "C:\\Project\\total_mai3.py"};
            ProcessBuilder processBuilder = new ProcessBuilder(command);
            Process process = processBuilder.start();
            int exitCode = process.waitFor();
            System.out.println("\nExited with error code : " + exitCode);

            // 파이썬에서 연산이 끝나면 결과를 DB에서 받아온다
            ResponseEntity responseEntity1 = responseService.response();
            // DB 호출해서 받아오는 코드 작성

            result.put("id", "0");
            result.put("nickname", responseEntity1.getNickname());
            result.put("mg", "500");
            // PAGE_SET에서 해당하는 코드를 가져와서 해결
            result.put("type", PageSet.PAGE_SET.get(String.format("%d", responseEntity1.getResult())));
        } catch (Exception e) {
            System.out.println("\nExited with error code : " + e.getMessage());
        } finally {
            return result;
        }
    }

}