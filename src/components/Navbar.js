import React from 'react';
import '../assets/styles.css';

const Navbar = ({ navigate }) => {
    return React.createElement(
        'nav',
        { className: 'navbar' },
        React.createElement('h1', { className: 'logo', style: { margin: 0 } }, 'Uma'),
        React.createElement(
            'div',
            { className: 'nav-links' },
            React.createElement('button', { onClick: () => navigate('home') }, 'Home'),
            React.createElement('button', { onClick: () => navigate('profile') }, 'Profile'),
            React.createElement('button', { onClick: () => navigate('live') }, 'Go Live'),
            React.createElement('button', { onClick: () => navigate('dm') }, 'Direct Messages')
        )
    );
};

export default Navbar;