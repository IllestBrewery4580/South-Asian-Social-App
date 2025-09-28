import React from 'react';
import LiveStream from '../components/LiveStream';

// Live page displays all active live streams
function Live() {
    // Example Live streams
    const liveStreams = [
        { user: 'Raj', streamTitle: 'New Track Drop 🎵', viewers: 120 },
        { user: 'Sana', streamTitle: 'Live Dance Session 💃', viewers: 85 }
    ];

    return (
        <div className="live-page">
            {/* Render each live stream using LiveStream component */}
            {liveStreams.map((stream, index) => (
                <LiveStream key={index} {...stream} />
            ))}
        </div>
    );
}

export default Live;