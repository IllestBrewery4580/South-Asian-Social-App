import React from 'react';
import '../assets/styles.css';

const Navbar = () => {
    return React.createElement(
        'nav',
        { className: 'navbar' },
        React.createElement('h1', { className: 'logo' }, 'Uma'),
        React.createElement(
            'div',
            { className: 'nav-links' },
            React.createElement('button', null, 'Home'),
            React.createElement('button', null, 'Profile'),
            React.createElement('button', null, 'Go Live')
        )
    );
};

export default Navbar;