import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CodeIcon from '@mui/icons-material/Code';
import { Link } from 'react-router-dom';

function Home({ selectedMenu }) {
  return (
    <main className='main-container'>
      {/* ... your other content ... */}
      <div className='card-container'>
        <div className='card' style={{ backgroundColor: 'green' }}>
          <Link to="/participants" className='card-link'>
            <div className='card-inner'>
              <h3>Number of Participants</h3>
              <PeopleIcon className='card_icon' />
            </div>
            <h1>50</h1>
          </Link>
        </div>
        <div className='card' style={{ backgroundColor: 'red' }}>
          <Link to="/average-score" className='card-link'>
            <div className='card-inner'>
              <h3>Average Score</h3>
              <StarIcon className='card_icon' />
            </div>
            <h1>50</h1>
          </Link>
        </div>
        <div className='card' style={{ backgroundColor: 'blue' }}>
          <Link to="/average-time" className='card-link'>
            <div className='card-inner'>
              <h3>Average Time</h3>
              <AccessTimeIcon className='card_icon' />
            </div>
            <h1>1:30</h1>
          </Link>
        </div>
        <div className='card' style={{ backgroundColor: 'brown' }}>
          <Link to="/quiz-type" className='card-link'>
            <div className='card-inner'>
              <h3>Quiz Name</h3>
              <CodeIcon className='card_icon' />
            </div>
            <h1>Basics of Html</h1>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
