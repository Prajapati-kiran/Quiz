package com.quiz.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(CustomException.class)
	public ResponseEntity<?> HandleCustomException(CustomException exception,WebRequest req){
		ErrorDetails ed = new ErrorDetails(exception.getMessage());
		return new ResponseEntity<>(ed,HttpStatus.NOT_FOUND);  
	}
}
