import React from 'react';
import './styles.css';

const PostCard = ({ user, content, image }) => {
    return (
        <div className="post-card">
            <h3>{user}</h3>
            <p>{content}</p>
            {image && <img src={image} alt="post" />}
            <div className="post-actions">
                <button>Like</button>
                <button>Comment</button>
            </div>
        </div>
    );
};

export default PostCard;