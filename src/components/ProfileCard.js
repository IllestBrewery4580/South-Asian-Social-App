import React from 'react';

// ProfileCard component displays user info with avatar, name, bio, and a follow button
function ProfileCard({ user, avatar, bio }) {
    return (
        <div className="profile-card">
            {/* User avatar */}
            <img src={avatar || 'https://via.placeholder.com/100'} alt={user} className="profile-avatar" />

            {/* User name */}
            <h3>{user}</h3>

            {/* User bio */}
            <p>{bio || 'This user has no bio yet.'}</p>

            {/* Follow button */}
            <button>Follow</button>
        </div>
    );
}

export default ProfileCard;