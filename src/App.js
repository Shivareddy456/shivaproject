import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Update the imports
import Header from './components/Dashboard/Header';
import Sidebar from './components/Dashboard/Sidebar';
import Home from './components/Dashboard/Home';
import QuizComponent from './components/QuizComponents/QuizComponents';
import Cards from './components/Quiz/Card'; //
import BlankPage from './components/BlankPage';
import OpenQuiz from './components/OpenQuiz';
import QuizResult from './components/QuizResult';
import Participants from './components/Dashboard/Participants';
import QuizHistory from './components/Dashboard/QuizHistory';


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }
  
  return (
    <Router>
      <div className='grid-container'>                                                    
        <Header OpenSidebar={OpenSidebar} />                                             
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />             
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/dashboard" element={<Home />} /> {/* Use element prop */}
          {/* <Route path='/quiz' element={<quiz />} /> */}
          <Route path='/questions' element={<QuizComponent />} />
          <Route path='/cards' element={<Cards />} />
          <Route path="/blankpage" element={<BlankPage />} /> 
          <Route path="/openquiz" element={<OpenQuiz />} />
          <Route path="/quizcomponent" element={<QuizComponent />} />
          <Route path="/quizresult" element={<QuizResult />} />
          <Route path="/participants" element={<Participants/>}/>
        
          <Route path='/score' element={<QuizResult />} />
          <Route path='/quiz history' element={<QuizHistory />} />
          <Route path='/new quiz' element={<new quiz />} /> 
         {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
