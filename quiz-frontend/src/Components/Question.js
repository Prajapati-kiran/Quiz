import React, { useEffect, useState } from 'react'

function Question(props) {

  const [responses,setResponses] = useState({});

  const questionId = props.questionID;
  const question = props.question;
  const option1 = props.option1;
  const option2 = props.option2;
  const option3 = props.option3;
  const option4 = props.option4;
  const onAnswer = props.onAnswer;

    const [check,setCheck] = useState({
        opt1:false,
        opt2:false,
        opt3:false,
        opt4:false
    });

  const handleClick =()=>{
    setResponses({});
    setCheck({opt1:false,
        opt2:false,
        opt3:false,
        opt4:false})
  }
  const handleChange =(e)=>{
    const name = e.target.name;
    setCheck((prevCheck) => ({
        opt1: name === 'opt1' ? !prevCheck.opt1 : false,
        opt2: name === 'opt2' ? !prevCheck.opt2 : false,
        opt3: name === 'opt3' ? !prevCheck.opt3 : false,
        opt4: name === 'opt4' ? !prevCheck.opt4 : false
    }));
    setResponses((res) => ({
        opt1: name === 'opt1' ? option1: false,
        opt2: name === 'opt2' ? option2: false,
        opt3: name === 'opt3' ? option3: false,
        opt4: name === 'opt4' ? option4: false,
    }));
  }
  useEffect(()=>{
    onAnswer(responses);
  },[responses])

  return (
    <div className='bg-light rounded m-3 p-4 custom-font-2'>
        <div className='d-flex'>
            <p className='m-2'>{questionId}</p> <p className='m-2'>{question}</p>
        </div>
        <div className='d-flex align-items-center'>
            <input className="form-check-input m-2" type="checkbox" name="opt1" checked={check.opt1}
             onChange={handleChange}/>
            <p className='m-2'> {option1}</p> 
        </div>
        <div className='d-flex align-items-center'>
            <input className="form-check-input m-2" type="checkbox" name="opt2" checked={check.opt2}
             onChange={handleChange}/>
            <p className='m-2'> {option2}</p>
        </div>
        <div className='d-flex align-items-center'>
            <input className="form-check-input m-2" type="checkbox" name="opt3" checked={check.opt3}
             onChange={handleChange}/>
            <p className='m-2'>{option3}</p>
        </div>
        <div className='d-flex align-items-center'>
            <input className="form-check-input m-2" type="checkbox" name="opt4" checked={check.opt4}
             onChange={handleChange}/>
            <p className='m-2'> {option4}</p>
        </div>
        <div className='d-flex justify-content-end custom-font-1'>
            <button type='button' className='btn btn-danger mb-2' onClick={handleClick}>Clear</button>
        </div>
    </div>
  )
}

export default Question