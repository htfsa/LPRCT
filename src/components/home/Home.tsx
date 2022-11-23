import React from 'react';
import './home.css';
import logo from '../../assets/logo.png';

function Home() {
    return (
        <div className="HomePage">
            <header className="HomeHeader">
                <img src={logo} />
            </header>
        </div>
    );
}

export default Home;