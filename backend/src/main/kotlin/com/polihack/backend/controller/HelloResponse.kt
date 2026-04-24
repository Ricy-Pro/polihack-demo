package com.polihack.backend.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

data class HelloResponse(val message: String, val status: String)

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = ["http://localhost:4200"])
class HelloController {

    @GetMapping("/hello")
    fun getGreeting(): HelloResponse {
        return HelloResponse(
            message = "Hello from your Kotlin Spring Boot backend!", 
            status = "success"
        )
    }
}