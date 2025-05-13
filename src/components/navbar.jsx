import { useState } from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
    const [active, setActive] = useState('home');
    const { isAuthenticated, logout, loginWithRedirect, user  } = useAuth0();
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
                        onClick={() => { setActive('home'); navigate("/") }}
                    >
                        Home
                    </a>
                </li>
                <li>
                    {/* Contribute endpoint can be added here */}
                    <a
                        className={active === 'contributions' ? 'highlight' : ''}
                        onClick={() => { setActive('contributions'); navigate("/") }}
                    >
                        Contributions
                    </a>
                </li>
            </ul>
            <div className="nav-right">
                    <p className='user-mail'>{isAuthenticated &&  user.name}</p>
                    { isAuthenticated && <img className='img-user' src={user.picture} alt={user.name} />}
                {
                    isAuthenticated ?
                        <button className='loginbtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                        : <button className='loginbtn' onClick={() => loginWithRedirect()}>Log In</button>
                }
            </div>
        </header>
    );
}
