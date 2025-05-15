import { useNavigate } from 'react-router-dom';
import '../../styles/TaskCss/Task4.css';
import { useState, useEffect } from 'react';

export default function Task4() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');

  // Load answers
  useEffect(() => {
    const saved = localStorage.getItem('task4Answer');
    if (saved) setAnswer(saved);
  }, []);

  // save answer
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem('task4Answer', answer);
    }, 300);
    return () => clearTimeout(timeout);
  }, [answer]);

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

      <h1 className="page-title">Task 4: Q&A</h1>

      <div className='Quesion_head'>
        <h3>Solve By Image.</h3>
      </div>

      <div className="download-section">
        <h3>Download the CAP file:</h3>
        <a
          href="../../Data/Haystack.pcap"
          download="Haystack.pcap"
          className="download-btn"
        >
          Download CAP File
        </a>
      </div>

      <div className="qa-box">
        <h3>Answer in this format: <br /><br /> {`FLAG = ctfa{terrific_traffic}`} <br /> protocol = TCP </h3>
        <textarea
          className="answer-input4"
          placeholder="Write your answer here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>
      </div>

      <div className="submit-section">
        <button onClick={SendCode} className="submit-btn">Submit Answers</button>
      </div>
    </main>
  );
}
