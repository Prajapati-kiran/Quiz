package com.quiz.exception;

public class ErrorDetails {
	private String customString;
	
	ErrorDetails(String customString){
		this.customString = customString;
	}

	public String getCustomString() {
		return customString;
	}

	public void setCustomString(String customString) {
		this.customString = customString;
	}
}
