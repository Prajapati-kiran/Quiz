package com.quiz.repo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.quiz.model.Question;
import com.quiz.model.Quiz;

public interface Quizrepo extends JpaRepository<Quiz, Integer>{

	List<Quiz> findByTitle(String Title);
	

}
