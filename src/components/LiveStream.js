import React from 'react';

// LiveStream component shows information about a live broadcast
function LiveStream({ user, streamTitle, viewers }) {
    return (
        <div className="live-stream-card">
            {/* Stream title with red live indicator */}
            <h3>🔴 {streamTitle}</h3>

            {/* Host name */}
            <p>Hosted by: {user}</p>

            {/* Number of viewers */}
            <p>Viewers: {viewers || 0}</p>

            {/* Button to join live stream */}
            <button>Join Live</button>
        </div>
    );
}

export default LiveStream;