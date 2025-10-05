import React, { useState } from 'react'
import './App.css'

// Pages
import Home from './pages/Home.js'
import Live from './pages/Live.js'
import Profile from './pages/Profile.js'
import Register from './components/Register.js'
import Settings from './components/Settings.js'

// Components
import Navbar from './components/Navbar.js'

export default function App() {
  const [page, setPage] = useState('home')
  const navigate = (target) => setPage(target)

  let currentPage
  if (page === 'home') currentPage = React.createElement(Home, { navigate })
  else if (page === 'live') currentPage = React.createElement(Live, { navigate })
  else if (page === 'profile') currentPage = React.createElement(Profile, { navigate })
  else if (page === 'register') currentPage = React.createElement(Register, { navigate })
  else if (page === 'settings') currentPage = React.createElement(Settings, { navigate })
  return React.createElement(
    'div',
    { className: 'app-container', style: { paddingTop: '60px' } }, // South Asian styled background

    // Navbar
    React.createElement(
      'nav',
      { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', background: '#f4f4f4' } },
      React.createElement('h2', null, 'Uma Social'),
      React.createElement(
        'div',
        null,
        React.createElement('button', { onClick: () => navigate('home'), style: { marginRight: '10px' } }, 'Home'),
        React.createElement('button', { onClick: () => navigate('live'), style: { marginRight: '10px' } }, 'Explore'),
        React.createElement('button', { onClick: () => navigate('profile') }, 'Profile')
      )
    ),

    // Main content
    React.createElement('main', { style: { marginTop: '20px'} }, currentPage),

    // Footer with copyright
    React.createElement(
      'footer',
      { style: { textAlign: 'center', marginTop: '40px', color: '#555' } }, 
      '\u00A9 2025 Uma Social. All rights reserved.'
    )
  );
}