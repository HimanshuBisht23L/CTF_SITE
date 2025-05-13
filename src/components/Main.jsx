import { useNavigate } from 'react-router-dom';
import '../styles/Main.css'


export default function Main() {
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
                    <div onClick={() => navigate("/Task1")} className="card">
                        <div className="icon red">🛡️</div>
                        <h3>Web Application Security</h3>
                        <p>Introduction to web Application Security</p>
                        <div className="details">
                            <span className="difficulty easy">Easy</span>
                            <span>📦 3 challenges</span>
                        </div>
                    </div>

                    <div onClick={() => navigate("/Task2")} className="card">
                        <div className="icon blue">🔵</div>
                        <h3>Blue Team Analyst</h3>
                        <p>Build your skills as a junior blue team analyst</p>
                        <div className="details">
                            <span className="difficulty medium">Medium</span>
                            <span>📦 2 challenges</span>
                        </div>
                    </div>

                    <div onClick={() => navigate("/Task3")} className="card">
                        <div className="icon yellow">🔓</div>
                        <h3>Cryptography Unlocked</h3>
                        <p>A junior’s guide to breaking cryptography</p>
                        <div className="details">
                            <span className="difficulty medium">Medium</span>
                            <span>📦 23 challenges</span>
                        </div>
                    </div>

                    <div onClick={() => navigate("/Task4")} className="card">
                        <div className="icon yellow">🔓</div>
                        <h3>Cryptography Unlocked</h3>
                        <p>A junior’s guide to breaking cryptography</p>
                        <div className="details">
                            <span className="difficulty medium">Medium</span>
                            <span>📦 23 challenges</span>
                        </div>
                    </div>

                    <div onClick={() => navigate("/Task5")} className="card">
                        <div className="icon yellow">🔓</div>
                        <h3>Cryptography Unlocked</h3>
                        <p>A junior’s guide to breaking cryptography</p>
                        <div className="details">
                            <span className="difficulty medium">Medium</span>
                            <span>📦 23 challenges</span>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
