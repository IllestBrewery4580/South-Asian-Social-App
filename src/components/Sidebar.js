import React, { useState } from 'react';
import '../assets/styles.css';

export default function Sidebar({ navigate }) {
    const [isOpen, setIsOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const users = ['Ananya', 'Raj', 'Kiran', 'Aisha', 'Dev', 'Mallika']; // Example users
    const filteredUsers = users.filter(u => 
        u.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return React.createElement(
        'div',
        {
            className: 'sidebar',
            style: {
                width: isOpen ? '250px' : '60px',
                transition: 'width 0.3s ease',
                background: 'linear-gradient(180deg, #ff6f61, #ffb347)',
                color: 'white',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                overflowY: 'auto',
                boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
                padding: isOpen ? '20px' : '10px',
            },
        },

        // Toggle Button
        React.createElement(
            'button',
            {
                onClick: () => setIsOpen(!isOpen),
                style: {
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    marginBottom: '15px',
                }
            },
            isOpen ? '☰' : '->'
        ),

        // Sidebar Content (only when open)
        isOpen &&
        React.createElement(
            'div',
            null,
            React.createElement('h2', { style: { marginBottom: '15px' } }, 'Uma Social'),

            // Navigation links
            React.createElement(
                'div',
                { style: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' } },
                React.createElement('button', { onClick: () => navigate('home'), className: 'sidebar-btn' }, '🏠 Home'),
                React.createElement('button', { onClick: () => navigate('profile'), className: 'sidebar-btn' }, '👤 Profile'),
                React.createElement('button', { onClick: () => navigate('dm'), className: 'sidebar-btn' }, '💬 Messages')
            ),

            // Search bar
            React.createElement('input', {
                type: 'text',
                placeholder: 'Search user...',
                value: searchTerm,
                onChange: e => setSearchTerm(e.target.value),
                style: {
                    width: '100%',
                    padding: '8px',
                    borderRadius: '5px',
                    border: 'none',
                    outline: 'none',
                    marginBottom: '10px',
                }
            }),

            // User search results
            React.createElement(
                'div',
                null,
                filteredUsers.map(user =>
                    React.createElement(
                        'div',
                        {
                            key: user,
                            onClick: () => navigate('dm'),
                            style: {
                                padding: '8px',
                                borderRadius: '4px',
                                background: 'rgba(255,255,255,0.2)',
                                marginBottom: '5px',
                                cursor: 'pointer'
                            }
                        },
                        user
                    )
                )
            )
        )
    );
}