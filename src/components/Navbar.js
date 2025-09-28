import React from 'reaact';
import './styles.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Uma</h1>
            <div className="nav-links">
                <button>Home</button>
                <button>Profile</button>
                <button>Go Live</button>            
            </div>
        </nav>
    );
};

export default Navbar;