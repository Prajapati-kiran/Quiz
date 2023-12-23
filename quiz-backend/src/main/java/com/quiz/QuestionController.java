package com.quiz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.model.Question;
import com.quiz.service.QuestionService;

@RestController
public class QuestionController {
	
	@Autowired
	QuestionService questionservice;
	
	@GetMapping("/allQuestions")
	public List<Question> getAllQuestions() {
		return questionservice.getAllQuestions();
	}
	
	@GetMapping("/category/{category}")
	public ResponseEntity<List<Question>> getQuestionByCategory(@PathVariable String category){
		return questionservice.getQuestionsBycategory(category);
	}
	
	@PostMapping("/add")
	public ResponseEntity<String> addQuestion(@RequestBody Question question) {
		return questionservice.addQuestion(question);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> DeleteQuestionById(@PathVariable Integer id) {
		return questionservice.deleteQuestionById(id);
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> UpdateQuestionById(@RequestBody Question question) {
		return questionservice.updateQuestionById(question);
	}

}
