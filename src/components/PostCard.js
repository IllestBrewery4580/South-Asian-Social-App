import React from 'react';
import '../assets/styles.css';

function PostCard(props) {
    const user = props.user;
    const content = props.content;
    const image = props.image;
    const onDm = props.onDm; // function passed from parent to handle DMs

    const children = [
        React.createElement('h3', { key: 'user' }, props.user),
        React.createElement('p', { key: 'content' }, props.content),
    ];

    if (props.image) {
        children.push(
            React.createElement('img', { key: 'image', src: props.image, alt: 'post' })
        );
    }

    children.push(
        React.createElement(
            'div',
            { key: 'actions', className: 'post-actions' },
            React.createElement('button', { key: 'like' }, 'Like'),
            React.createElement('button', { key: 'comment' }, 'Comment'),
            React.createElement(
                'button',
                { key: 'dm', onClick: () => onDm && onDM(user) }, // trigger DM if function exists
                'Message'
            )
        )
    );

    return React.createElement('div', { className: 'post-card' }, children);
}

export default PostCard;