import React from 'react';
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

const Home = () => {
    const dummyPosts = [
        { user: 'Ananya', content: 'Celebrating Diwali vibes!', image: null },
        { user: 'Raj', content: 'New song release', image: 'bttps://via.placeholder.com/200' },
    ];

    return (
        <div>
            <Navbar />
            <div className="feed">
                {dummyPosts.map((post, index) => (
                    <PostCard key={index} {...post} />
                ))}
            </div>
        </div>
    );
};

export default Home;