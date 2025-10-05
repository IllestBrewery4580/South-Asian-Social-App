import React from 'react';

// LiveStream component shows information about a live broadcast
function LiveStream(props) {
    const user = props.user;
    const streamTitle = props.streamTitle;
    const viewers = props.viewers || 0;

    return React.createElement(
        'div',
        { className: 'live-stream-card' },
        // Stream title with red live indicator
        React.createElement('h3', null, '🔴 ', streamTitle),
        // Host name
        React.createElement('p', null, 'Hosted by: ', user),
        // Number of viewers
        React.createElement('p', null, 'Viewers: ', viewers),
        // Button to join live stream
        React.createElement('button', null, 'Join Live')
    );
}

export default LiveStream;