import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import QuizService from '../Services/QuizService';

function Score() {
    const { state } = useLocation();
    const response =  state  &&  state.data;
    const [score,setScore] = useState(null);
    console.log("StateID"+state.ID);

    const calScore = async()=>{
      try{
        const res = await QuizService.getScore(state.ID,response);
        console.log(res.data);
        setScore(res.data);
      }catch(e){
        console.log(e);
      }
    }
    useEffect(()=>{
      calScore();
    },[])
  return (
    <div className='mt-5 container bg-dark fs-5 rounded '>
      <div className=' text-center text-light'> 
        Your score is 
      </div>
      <div className=' text-center text-light'> 
        {score}
      </div>
    </div>
  )
}

export default Score