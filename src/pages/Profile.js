import React from 'react';
import ProfileCard from '../components/ProfileCard';

// Profile page displays the user's profile information
function Profile() {
    // Example user data
    const userData = {
        user: 'Ananya',
        avatar: 'https://via.placeholder.com/100',
        bio: 'Singer, dancer, and lover of South Asian culture'
    };

    return (
        <div className="profile-page">
            {/* Render ProfileCard component with user data */}
            <ProfileCard {...userData} />
        </div>
    );
}

export default Profile;