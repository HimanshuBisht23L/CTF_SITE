import { useNavigate } from 'react-router-dom';
import '../../styles/TaskCss/Task3.css';
import { useState, useEffect } from 'react';

export default function Task3() {
  const navigate = useNavigate();
  const [Answer1, setAnswer1] = useState('');
  const [Answer2, setAnswer2] = useState('');
  const [Answer3, setAnswer3] = useState('');
  const [Answer4, setAnswer4] = useState('');
  const [Answer5, setAnswer5] = useState('');

  // Load saved answers
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('task3Answers'));
    if (Array.isArray(saved)) {
      setAnswer1(saved[0] || '');
      setAnswer2(saved[1] || '');
      setAnswer3(saved[2] || '');
      setAnswer4(saved[3] || '');
      setAnswer5(saved[4] || '');
    }
  }, []);

  // Auto-save answers
  useEffect(() => {
    const timeout = setTimeout(() => {
      const answers = [Answer1, Answer2, Answer3, Answer4, Answer5];
      localStorage.setItem('task3Answers', JSON.stringify(answers));
    }, 300);
    return () => clearTimeout(timeout);
  }, [Answer1, Answer2, Answer3, Answer4, Answer5]);

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

      <h1 className="page-title">Task 3: Q&A</h1>

      <div className='Quesion_head'>
        <h3>📜 Storyline:
          A whistleblower has attempted to send a secret message to a journalist exposing corruption in a multinational corporation. Unfortunately, the message was intercepted. The attacker used multiple layers of encryption to hide the content. You’ve managed to retrieve the encrypted file along with a few breadcrumbs. Your task is to fully decrypt the message and extract the final flag.
          <br />
          🔍 Challenge Artifacts:
          You are given a text file named intercepted_message.txt with the following content:
          <br />
          pgsql
          <br />
          Step 1:
          Uryyb Jbeyq! Gur svefg frperg vf gurer.
          <br />
          Step 2:
          QkZmRU5EbFFXMXU=
          <br />
          Step 3:
          Encrypted with: Vigenère Cipher using keyword: "orion"
          <br />
          Step 4:
          Final output is Base64 encoded again.
        </h3>
      </div>

      <div className="qa-box">
        <h3>1. ROT13 Decryption
          <br />
          Description: The first line is encrypted using ROT13.
          <br />
          Decrypt: Uryyb Jbeyq! Gur svefg frperg vf gurer.<br />Answer format: ROT13: [plaintext]</h3>
        <textarea
          className="answer-input3"
          value={Answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          placeholder="Write your answer here..."
        />
      </div>

      <div className="qa-box">
        <h3>2. Base64 Decode
          <br />
          Description: The result from Step 2 is Base64 encoded.
          <br />
          Decode: QkZmRU5EbFFXMXU=
          <br />
          Answer format: Base64: [plaintext]</h3>
        <textarea
          className="answer-input3"
          value={Answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          placeholder="Write your answer here..."
        />
      </div>

      <div className="qa-box">
        <h3>3. Vigenère Cipher Decryption
          <br />
          Description: Decrypt the result from Q2 using the Vigenère Cipher with keyword "orion".
          <br />
          Answer format: Vigenere: [plaintext]</h3>
        <textarea
          className="answer-input3"
          value={Answer3}
          onChange={(e) => setAnswer3(e.target.value)}
          placeholder="Write your answer here..."
        />
      </div>

      <div className="qa-box">
        <h3>4. Final Layer Base64
          <br />
          Description: The decrypted result from Step 3 is Base64 again.
          <br />
          Task: Perform the final Base64 decode to retrieve the full message.
          <br />
          Answer format: Final Message: [plaintext]</h3>
        <textarea
          className="answer-input3"
          value={Answer4}
          onChange={(e) => setAnswer4(e.target.value)}
          placeholder="Write your answer here..."
        />
      </div>

      <div className="qa-box">
        <h3>5. The Flag <br />
          {`Task: Extract the CTF flag from the message. The flag will be in the format: CTF{...}`}</h3>
        <textarea
          className="answer-input3"
          value={Answer5}
          onChange={(e) => setAnswer5(e.target.value)}
          placeholder="Write your answer here..."
        />
      </div>

      <div className="submit-section">
        <button onClick={SendCode} className="submit-btn">Submit Answers</button>
      </div>
    </main>
  );
}
