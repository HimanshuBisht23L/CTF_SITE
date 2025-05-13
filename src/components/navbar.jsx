import { useState } from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const [active, setActive] = useState('home');
    const navigate = useNavigate();

    return (
        <header className="navbar">
            <div className="logo">
                <img src="htb_box_transparent.png" alt="HTB Logo" />
                <span>CTF</span>
            </div>
            <ul className="nav-links">
                <li>
                    <a
                        className={active === 'home' ? 'highlight' : ''}
                        onClick={() =>{ setActive('home'); navigate("/")}}
                    >
                        Home
                    </a>
                </li>
                <li>
                    {/* Contribute endpoint can be added here */}
                    <a
                        className={active === 'contributions' ? 'highlight' : ''}
                        onClick={() => { setActive('contributions'); navigate("/")}}
                    >
                        Contributions
                    </a>
                </li>
            </ul>
            <div className="nav-right">
                <div className="user">Try</div>
            </div>
        </header>
    );
}
