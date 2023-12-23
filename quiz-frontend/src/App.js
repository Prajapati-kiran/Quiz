import './App.css';
import CreateQuiz from './Components/CreateQuiz';
import Header from './Components/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Question from './Components/Question';
import CreateQuestions from './Components/CreateQuestions';
import Score from './Components/Score';

function App() {
  return (
     <div className='container'>
      <Header/>
      <Router>
				<Routes>
					<Route path='/'                element={<CreateQuiz/>}>      </Route>
          <Route path='/quiz'            element={<Question/>}>        </Route>
          <Route path='/createQuestions' element={<CreateQuestions/>}> </Route>
          <Route path='/score'           element={<Score/>}>           </Route>
				</Routes>
		  </Router>
     </div>
  );
}

export default App;
