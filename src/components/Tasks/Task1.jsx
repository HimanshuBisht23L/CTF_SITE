  import { useNavigate } from 'react-router-dom';
  import '../../styles/TaskCss/Task1.css';
  import { useState, useEffect } from 'react';

  export default function Task1() {
    const navigate = useNavigate();
    const [Answer1, setAnswer1] = useState('');
    const [Answer2, setAnswer2] = useState('');
    const [Answer3, setAnswer3] = useState('');

    // Load answers
    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('task1Answers'));
      if (Array.isArray(saved)) {
        setAnswer1(saved[0] || '');
        setAnswer2(saved[1] || '');
        setAnswer3(saved[2] || '');
      }
    }, []);


    useEffect(() => {
      const timeout = setTimeout(() => {
        const dataToSave = [Answer1, Answer2, Answer3];
        localStorage.setItem('task1Answers', JSON.stringify(dataToSave));
      }, 300);

      return () => clearTimeout(timeout);
    }, [Answer1, Answer2, Answer3]);

    const SendCode = () => {
      alert('Successfully Submitted Answers');
      navigate('/');
    };

    return (
      <main className="task-container">
        <button className="back-btn" onClick={() => navigate('/')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="light-green" fill="none">
            <path d="M3.99982 11.9998L19.9998 11.9998" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>

        <h1 className="page-title">Task 1: Q&A</h1>

        <div className="Quesion_head">
          <h3>
            "Young 'knows nothing politics' becomes MP" – answer the questions below.
          </h3>
        </div>

        <div className="qa-box">
          <h3>1. Unit served during military service?</h3>
          <textarea
            className="answer-input1"
            value={Answer1}
            onChange={(e) => setAnswer1(e.target.value)}
            placeholder="Write your answer here..."
          />
        </div>

        <div className="qa-box">
          <h3>2. Income made till 7 July 2024?</h3>
          <textarea
            className="answer-input1"
            value={Answer2}
            onChange={(e) => setAnswer2(e.target.value)}
            placeholder="Write your answer here..."
          />
        </div>

        <div className="qa-box">
          <h3>3. Political party associated with?</h3>
          <textarea
            className="answer-input1" 
            value={Answer3}
            onChange={(e) => setAnswer3(e.target.value)}
            placeholder="Write your answer here..."
          />
        </div>

        <div className="submit-section">
          <button className="submit-btn" onClick={SendCode}>
            Submit Answers
          </button>
        </div>
      </main>
    );
  }
