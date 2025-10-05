import React from 'react';

function ProfileCard(props) {
    const user = props.user;
    const avatar = props.avatar || 'https://via.placeholder.com/100';
    const bio = props.bio || 'This user has no bio yet.';

    return React.createElement(
        'div',
        { className: 'profile-card' },
        // User avatar
        React.createElement('img', { src: avatar, alt: user, className: 'profile-avatar' }),
        // User name
        React.createElement('h3', null, user),
        // User bio
        React.createElement('p', null, bio),
        // Follow button
        React.createElement('button', null, 'Follow')
    );
}

export default ProfileCard;