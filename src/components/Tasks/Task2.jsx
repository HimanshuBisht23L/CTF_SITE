import { useNavigate } from 'react-router-dom';
import '../../styles/TaskCss/Task2.css';

export default function Task2() {
  const navigate = useNavigate();

  const SendCode = () => {
    alert("Successfully Submitted Answers");
    navigate("/");
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <main className="task-container">
      <button className="back-btn" onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="light-green" fill="none">
          <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </button>

      <h1 className="page-title">Task 2: Q&A</h1>

      <div className='Quesion_head'>
        <h3>"Death Can Be The Greatest Opportunity Of Your Life." a famous quote of a Multichaptered Visual Codex available on Netflix."</h3>
      </div>

      <div className="qa-box">
        <h3>1. In the early seasons, the gang stages a heist in a building identify the real building?</h3>
        <textarea className="answer-input" placeholder="Write your answer here..."></textarea>
      </div>

      <div className="qa-box">
        <h3>2. One of the Prof's hideouts in series was chosen for its beauty and isolation — surrounded by trees and historic charm?</h3>
        <textarea className="answer-input" placeholder="Write your answer here..."></textarea>
      </div>


      <div className="submit-section">
        <button onClick={SendCode} className="submit-btn">Submit Answers</button>
      </div>
    </main>
  );
}
