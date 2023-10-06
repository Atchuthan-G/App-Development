package com.fitness.tracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@OpenAPIDefinition(
		info =@Info(
				title = "fitness form",
				version = "1.1.2",
				description = "App Description",
				contact = @Contact(
						name = "track",
						email = "Author Email"
						)
				)
		)

@SpringBootApplication
public class fitnessApplication {

	public static void main(String[] args) {
		SpringApplication.run(fitnessApplication.class, args);
	}

}
