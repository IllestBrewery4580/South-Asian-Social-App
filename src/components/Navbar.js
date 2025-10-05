import React from 'react';
import '../assets/styles.css';

const Navbar = () => {
    return React.createElement(
        'nav',
        { className: 'navbar' },
        React.createElement('h1', { className: 'logo', style: { margin: 0 } }, 'Uma'),
        React.createElement(
            'div',
            { className: 'nav-links', style: { display: 'flex', gap: '10px' } },
            React.createElement('button', null, 'Home'),
            React.createElement('button', null, 'Profile'),
            React.createElement('button', null, 'Go Live')
        )
    );
};

export default Navbar;