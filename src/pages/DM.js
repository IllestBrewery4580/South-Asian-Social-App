import React, { useState, useEffect, useRef } from 'react';
import '../assets/styles.css';

export default function DM({ navigate }) {
    const [selectedUser, setSelectedUser] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    const [messages, setMessages] = useState({}); // { username: [(text, fromMe)] }

    const users = [
        { username: 'Ananya', followers: [], settings: { allowMessages: true } },
        { username: 'Raj', followers: [], settings: { allowMessages: true } },
        { username: 'Kiran', followers: [], settings: { allowMessages: true } },
    ]; // Example users

    const messagesEndRef = useRef(null);

    const sendMessage = () => {
        if (!selectedUser || !messageInput) return;

        const user = users.find(u => u.username === selectedUser);
        const currentUsername = 'You'; // replace with logged-in user

        const youFollowThem = user.followers.includes(currentUsername);
        const theyFollowYou = false; // replace with logic if you track who you follow
        const canMessage = theyFollowYou && youFollowThem || user.settings.allowMessages;
        
        if (!canMessage) {
            alert('Message request sent (they need to approve).');
            setMessageInput('');
            return;
        }

        setMessages(prev => ({
            ...prev,
            [selectedUser]: [
                ...(prev[selectedUser] || []),
                { text: messageInput, fromMe: true }
            ]
        }));
        setMessageInput('');
    };

    // Scroll to bottom on new messages
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, selectedUser]);

    return React.createElement(
        'div',
        { className: 'dm-page', style: { display: 'flex', height: '80vh', margin: '20px' } },

        // Users list
        React.createElement(
            'div',
            { className: 'dm-users', style: { width: '200px', borderRight: '1px solid #ccc', padding: '10px' } },
            users.map(user =>
                React.createElement(
                    'div',
                    {
                        key: user,
                        onClick: () => setSelectedUser(user),
                        style: {
                            padding: '10px',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            backgroundColor: selectedUser === user ? '#f0f0f0' : 'transparent',
                            color: selectedUser === user ? '#fff' : '#000'
                        }
                    },
                    user
                )
            )
        ),

        // Messages panel
        React.createElement(
            'div',
            { className: 'dm-messages', style: { flex: 1, display: 'flex', flexDirection: 'column', padding: '10px' } },

            selectedUser
                ? React.createElement(
                    React.Fragment,
                    null,
                    React.createElement('h3', null, `Chat with ${selectedUser}`),
                    React.createElement(
                        'div',
                        { 
                            style: { 
                                flex: 1, 
                                overflowY: 'auto', 
                                marginBottom: '10px', 
                                border: '1px solid #ddd', 
                                padding: '10px', 
                                borderRadius: '5px' 
                            } 
                        },
                        (messages[selectedUser] || []).map((msg, index) =>
                            React.createElement(
                                'div',
                                {
                                    key: index,
                                    style: { 
                                        textAlign: msg.fromMe ? 'right' : 'left', 
                                        margin: '5px 0',
                                        backgroundColor: msg.fromMe ? '#ffb347' : '#eee',
                                        color: msg.fromMe ? '#fff' : '#000',
                                        display: 'inline-block',
                                        padding: '6px 10px',
                                        borderRadius: '10px',
                                        maxWidth: '70%'
                                    }
                                },
                                msg.text
                            )
                        ),
                        React.createElement('div', { ref: messagesEndRef })
                    ),
                    React.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        React.createElement('input', {
                            value: messageInput,
                            onChange: e => setMessageInput(e.target.value),
                            placeholder: 'Type a message...',
                            style: { flex: 1, padding: '8px', borderRadius: '5px', border: '1px solid #ccc' },
                            onKeyDown: e => { if (e.key === 'Enter') sendMessage(); }
                        }),
                        React.createElement(
                            'button',
                            { 
                                onClick: sendMessage, 
                                style: { marginLeft: '5px', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' } 
                            },
                            'Send'
                        )
                    )
                )
                : React.createElement('p', null, 'Select a user to start chatting.')    
        )
    );
}