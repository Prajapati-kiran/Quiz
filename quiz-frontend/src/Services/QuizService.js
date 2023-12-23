import axios from 'axios';
import { useState } from 'react';

const QUIZ_API_URL = "http://localhost:9998/quiz";

class QuizService {
    constructor() {
        this.quizQuestions = [];
    }
    async createQuiz(QuizTitle, QuizType) {
        // creating a quiz 
        axios.post(QUIZ_API_URL + "/create/" + QuizType + "/" + QuizTitle)
            .then(response => {
                console.log("Created quiz message after creating quiz :" + response.data);
            }).catch(error => {
                console.error("Error creating quiz:", error);
                return;
            });

        // calling returnQuiz
        try {
            const response = await axios.get(QUIZ_API_URL + "/getid/" + QuizTitle);
            this.quizQuestions = response.data;
            // console.log("iam quizquestion"+this.quizQuestions);
            if(this.quizQuestions!==null && this.quizQuestions.length!==0){
                console.log("failed to create quiz")
                // futer process 
                // delete the created quiz and disaplay a msg that recreate your quiz
                return this.quizQuestions;
            }else{
                console.log("recreate quiz");
            }
        } catch (error) {
            console.error("Error creating/getting quiz:", error);
            return;
        }
           
    }

    async getScore(quizId, finalResponse) {
        try {
            const score = await axios.post(QUIZ_API_URL + "/submit/" + quizId, finalResponse
            );
            // console.log("quiz id"+quizId);
            return score;
        } catch (error) {
            // console.log("quiz id"+quizId);
            console.error("Error creating/getting quiz:", error);
            return;
        }
    }

}
export default new QuizService();