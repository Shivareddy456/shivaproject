import React from 'react';
import { Link } from 'react-router-dom'; // Update the import
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import HistoryIcon from '@mui/icons-material/History';
import AddIcon from '@mui/icons-material/Add';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""} style={{position:'fix'}}>
      {/* ... Other sidebar content ... */}
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/dashboard"> {/* Use Link to navigate */}
            <DashboardIcon className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/cards"> {/* Use Link to navigate */}
            < AssessmentIcon className='icon' /> Quiz
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/questions"> {/* Use Link to navigate */}
            <QuestionAnswerIcon className='icon' /> Questions
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/quizresult"> {/* Use Link to navigate */}
            <CreditScoreIcon  className='icon' /> Score
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/quiz history"> {/* Use Link to navigate */}
            <HistoryIcon className='icon' /> Quiz History
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/questions"> {/* Use Link to navigate */}
            <AddIcon className='icon' /> New Quiz
          </Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </aside>
  );
}

export default Sidebar;