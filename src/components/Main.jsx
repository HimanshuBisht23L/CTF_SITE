import { useNavigate } from 'react-router-dom';
import '../styles/Main.css'
import { useAuth0 } from "@auth0/auth0-react";



export default function Main() {
      const { isAuthenticated  } = useAuth0();
    const navigate = useNavigate();

    return (
        <>
            <main>
                <section className="hero">
                    <div>
                        <h1>
                            Explore <span className="green">5+</span>
                            <br />
                            challenges & Solve
                            <br />
                            your CTF event
                        </h1>
                        <p>
                            Discover the list of challenges curated into packs and start
                            Solving your CTF today.
                        </p>
                    </div>
                    <div className="image">
                        <img src="background.webp" alt="" />
                    </div>
                </section>


                {/* Cards */}
                <section className="cards">
                    <div onClick={() => isAuthenticated ? navigate("/Task1") : alert("Login First!!!")} className="card">
                        <div className="icon red">🛡️</div>
                        <h3>Web Application Security</h3>
                        <p>Introduction to web Application Security</p>
                        <div className="details">
                            <span className="difficulty easy">Easy</span>
                            <span>📦 3 challenges</span>
                        </div>
                    </div>

                    <div onClick={() => isAuthenticated ?  navigate("/Task2") : alert("Login First!!!")} className="card">
                        <div className="icon blue">🔵</div>
                        <h3>Blue Team Analyst</h3>
                        <p>Build your skills as a junior blue team analyst</p>
                        <div className="details">
                            <span className="difficulty medium">Medium</span>
                            <span>📦 2 challenges</span>
                        </div>
                    </div>

                    <div onClick={() => isAuthenticated ?  navigate("/Task3"): alert("Login First!!!")} className="card">
                        <div className="icon yellow">🔓</div>
                        <h3>Cryptography Unlocked</h3>
                        <p>A junior’s guide to breaking cryptography</p>
                        <div className="details">
                            <span className="difficulty medium">Medium</span>
                            <span>📦 5 challenges</span>
                        </div>
                    </div>

                    <div onClick={() => isAuthenticated ?  navigate("/Task4") : alert("Login First!!!")} className="card">
                        <div className="icon yellow">🔓</div>
                        <h3>Image Unlocked</h3>
                        <p>A junior’s guide to breaking cryptography</p>
                        <div className="details">
                            <span className="difficulty medium">Medium</span>
                            <span>📦 1 challenges</span>
                        </div>
                    </div>

                    <div onClick={() => isAuthenticated ?  navigate("/Task5") : alert("Login First!!!") } className="card">
                        <div className="icon yellow">🔓</div>
                        <h3>Cap File Unlocked</h3>
                        <p>A junior’s guide to breaking cryptography</p>
                        <div className="details">
                            <span className="difficulty medium">Medium</span>
                            <span>📦 1 challenges</span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
