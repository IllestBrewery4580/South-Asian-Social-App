import React from 'react'

export default function Register({ navigate }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navButton = (text, target) =>
        React.createElement(
            'button',
            { onClick: () => navigate(target), style: { margin: '10px', padding: '5px 10px', cursor: 'pointer' } },
            text
        );

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registered!\nUsername: ${username}\nEmail: ${email}`);
        // Optionally navigate to profile page here
        navigate('profile');
    };
        
    return React.createElement(
        'div',
        { className: 'page' },
        React.createElement('h1', null, 'Register for Uma Social Media'),
        React.createElement(
            'form',
            {
                style: { display: 'flex', flexDirection: 'column', width: '300px', margin: '20px auto' },
                onSubmit: e => { e.preventDefault(); alert('Registered!') }
            },
            React.createElement('input', { type: 'text', placeholder: 'Username', required: true, value: username, onChange: (e) => setUsername(e.target.value), style: { marginBottom: '10px', padding: '8px' } }),
            React.createElement('input', { type: 'email', placeholder: 'Email', required: true, value: email, onChange: (e) => setEmail(e.target.value), style: { marginBottom: '10px', padding: '8px' } }),
            React.createElement('input', { type: 'password', placeholder: 'Password', required: true, value: password, onChange: (e) => setPassword(e.target.value), style: { marginBottom: '10px', padding: '8px' } }),
            React.createElement('button', { type: 'submit', style: { padding: '8px', cursor: 'pointer' } }, 'Register')
        ),
        navButton('Back to Home', 'home')
    );
}