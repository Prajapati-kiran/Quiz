package com.quiz.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.quiz.model.Question;
import com.quiz.model.QuestionWrapper;
import com.quiz.model.Quiz;
import com.quiz.model.Response;
import com.quiz.repo.QuestionRepo;
import com.quiz.repo.Quizrepo;

@Service
public class QuizService {
	
	@Autowired
	Quizrepo quizrepo;
	
	@Autowired
	QuestionRepo questionrepo;
	

	public ResponseEntity<String> createQuiz(String category,String title) {
        List<Question> questions = questionrepo.findQuestionsByCategory(category);
        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setCategory(category);
        quiz.setQuestion(questions);
        quizrepo.save(quiz);
        return new ResponseEntity<>("Success", HttpStatus.CREATED);
    }


	public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
		Optional<Quiz> quiz = quizrepo.findById(id);
		List<Question> questionFromDB = quiz.get().getQuestion();
		List<QuestionWrapper> questionForUser = new ArrayList<>();
		for(Question q: questionFromDB) {
			QuestionWrapper qw  = new QuestionWrapper(q.getId(),q.getQuestionTitle() ,q.getOption1(), q.getOption2(), q.getOption3(), q.getOption4());
			questionForUser.add(qw);
		}
		return new ResponseEntity<>(questionForUser, HttpStatus.OK);
	}

	public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
		Quiz quiz = quizrepo.findById(id).get();
		List<Question> questions = quiz.getQuestion();
		int score = 0;
		int i = 0;
		for(Response response: responses) {
			if(response.getResponse().equals(questions.get(i).getRightAnswer())) {
				score++;
			}
			i++;
		}
		return new ResponseEntity<>(score,HttpStatus.OK);
		
	}

	public ResponseEntity<List<Quiz>> getid(String title) {
		List<Quiz> arr = quizrepo.findByTitle(title);
		return new ResponseEntity<>(arr,HttpStatus.OK);
	}
	
	
}
