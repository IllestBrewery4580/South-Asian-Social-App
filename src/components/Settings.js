import React from 'react'

export default function Settings({ navigate }) {
  const navButton = (text, target) =>
    React.createElement(
      'button',
      { onClick: () => navigate(target), style: { margin: '10px', padding: '5px 10px', cursor: 'pointer' } },
      text
    )

  return React.createElement(
    'div',
    { className: 'page' },
    React.createElement('h1', null, 'Settings'),
    React.createElement('p', null, 'Here you can update your profile and app preferences.'),
    navButton('Back to Home', 'home')
  )
}