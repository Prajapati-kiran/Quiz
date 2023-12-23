package com.quiz.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.quiz.exception.CustomException;
import com.quiz.model.Question;
import com.quiz.repo.QuestionRepo;

@Service
public class QuestionService {
	
	@Autowired
	QuestionRepo questionrepo;

	public List<Question> getAllQuestions() {
		if(questionrepo.findAll().isEmpty()) {
			throw new CustomException("Noting Found");
		}else {
			return questionrepo.findAll();
		}
	}

	
	public ResponseEntity<List<Question>> getQuestionsBycategory(String category) {
		try {
			return new ResponseEntity<>(questionrepo.findByCategory(category),HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>(questionrepo.findByCategory(category),HttpStatus.BAD_REQUEST);
	}
	

	public ResponseEntity<String> addQuestion(Question question) {
		try {
			questionrepo.save(question);
			return new ResponseEntity<>("Question Added",HttpStatus.CREATED);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>("Error Occured",HttpStatus.NOT_ACCEPTABLE);
	}
	

	public ResponseEntity<String> deleteQuestionById(Integer id) {
		try {
			questionrepo.deleteById(id);
			return new ResponseEntity<>("Question Deleted",HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return new ResponseEntity<>("Error Occured",HttpStatus.NOT_FOUND);
	}
	

	public ResponseEntity<String> updateQuestionById(Question question) {
	    try {
	        Question oldQuestion = questionrepo.findById(question.getId()).orElse(null);

	        if (oldQuestion != null) {
	            oldQuestion.setCategory(question.getCategory());
	            oldQuestion.setDifficultylevel(question.getDifficultylevel());
	            oldQuestion.setOption1(question.getOption1());
	            oldQuestion.setOption2(question.getOption2());
	            oldQuestion.setOption3(question.getOption3());
	            oldQuestion.setOption4(question.getOption4());
	            oldQuestion.setQuestionTitle(question.getQuestionTitle());
	            oldQuestion.setRightAnswer(question.getRightAnswer());
	            return new ResponseEntity<>("Question Updated", HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>("Question Not Found", HttpStatus.NOT_FOUND);
	        }
	    } catch (Exception e) {
	        e.printStackTrace(); 
	        return new ResponseEntity<>("Error Occurred", HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

}
