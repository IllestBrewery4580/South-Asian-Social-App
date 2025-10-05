import React from 'react';
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

function Home() {
    const dummyPosts = [
        { user: 'Ananya', content: 'Celebrating Diwali vibes!', image: null },
        { user: 'Raj', content: 'New song release', image: 'https://via.placeholder.com/200' },
    ];

    const postElements = dummyPosts.map(function(post, index) {
        return React.createElement(PostCard, { key: index, ...post });
    });

    return React.createElement(
        'div',
        null,
        // Navbar
        React.createElement(Navbar, null),
        // Feed container
        React.createElement(
            'div',
            { className: 'feed' },
            dummyPosts.map(function(post, index) {
                return React.createElement(PostCard, { key: index, ...post });
            })
        )
    );
}

export default Home;