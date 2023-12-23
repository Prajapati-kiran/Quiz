import React, { useEffect, useState } from 'react';
import Question from './Question';
import { useLocation, useNavigate } from 'react-router-dom';

function CreateQuestions() {
   
  const navigate = useNavigate();
  const { state } = useLocation();
  const data = state && state.data;
  const [dataToEval, setDataToEval] = useState(null);
  const [userResponses, setUserResponses] = useState([]);


  const id = data[0].id;

  const handleResponse = (questionId, response) => {
    setUserResponses(prevResponses => ({
      ...prevResponses,
      [questionId]: response,
    }));
  };
  // useEffect(()=>{
  //   console.log(userResponses);
  // },[userResponses]);
  
  const handleClick =()=>{
    let finalResponse = [];
    for (const key in userResponses) {
      if (userResponses.hasOwnProperty(key)) {
        let obj = userResponses[key];
        const x = Object.values(obj).find(value => value !== false) || "";
        finalResponse.push({ id: key, response: x });
      }
    }
    // setDataToEval({id,finalResponse});
    setDataToEval(finalResponse);
    // console.log("final response", finalResponse);
  }
  useEffect(() => {
    if (dataToEval !== null && dataToEval!==undefined) {
      console.log(JSON.stringify(dataToEval));
      navigate('/score', { state: { data: dataToEval, ID:id } });
    }
  }, [dataToEval,navigate]);

  const questionComponents = data[0].question.map((question, index) => (
    <Question
      key={index}
      quizId={id}
      questionID={index+1}
      question={question.questionTitle}
      option1={question.option1}
      option2={question.option2}
      option3={question.option3}
      option4={question.option4}
      onAnswer={(response) => handleResponse(question.id, response)}
    />
  ));

  // console.log('User Responses:', userResponses);

  return (
    <div>
      {questionComponents}
      <div className='mt-3 conatiner bg-light rounded custom-font-1'>
        <div className="d-flex">
          <div className="p-2 flex-grow-1 bd-highlight fs-3">
              Submit Your Quiz 
          </div>
          <div className="p-2 bd-highlight"> 
            <button className='btn btn-danger' onClick={handleClick}>
                Submit
            </button>
          </div>
        </div>
        </div>
    </div>
  );
}

export default CreateQuestions;
