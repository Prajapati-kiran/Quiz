import React, { useEffect, useState } from 'react'
import QuizService from '../Services/QuizService';
import { useNavigate} from 'react-router-dom';

function CreateQuiz() {

  let navigate = useNavigate();

  const [dataToSend, setDataToSend] = useState(null);
  const [QuizTitle,setQuizTitle] = useState("");
  const [QuizType,setQuizType] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await QuizService.createQuiz(QuizTitle, QuizType);
      console.log("iam res"+res);
      setDataToSend(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    if (dataToSend !== null && dataToSend!==undefined) {
      console.log("iam res"+dataToSend)
      navigate('/createQuestions', { state: { data: dataToSend } });
    }
  }, [dataToSend,navigate]);
  
  return (
    <div className="container mt-3">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center text-success">Create quiz</h3>
            <div className="card-body">
              <form>
                <div className="form-group my-2">
                  <label>Quiz Title</label>
                  <input placeholder="Quiz Title" name="title" className="form-control"
                          value={QuizTitle} onChange={(e)=> setQuizTitle(e.target.value)}/>
                </div>
                <div className="form-group my-2">
                  <label>Quiz</label>
                  <select name="type"  className="form-control"
                         value={QuizType} onChange={(e)=> setQuizType(e.target.value)}>
                    <option value="">Select a option</option>
                    <option value="java"> Java </option>
                    <option value="python"> python </option>
                  </select>
                </div>
                <button className='btn btn-success' onClick={handleClick} style={{marginTop:"5px"}}>Create</button>
              </form>
            </div>
          </div>
        </div>  
    </div>
  )
}

export default CreateQuiz