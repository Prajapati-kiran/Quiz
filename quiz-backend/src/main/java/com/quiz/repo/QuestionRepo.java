package com.quiz.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.quiz.model.Question;

@Repository
public interface QuestionRepo extends JpaRepository<Question,Integer> {
	
	List<Question> findByCategory(String category);
	
	@Query(value = "SELECT * FROM Question where CATEGORY = :category", nativeQuery = true)
	List<Question> findQuestionsByCategory(String category);


	
}
																																																																																																																																																