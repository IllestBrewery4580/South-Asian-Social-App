import React from 'react';
import LiveStream from '../components/LiveStream';

// Live page displays all active live streams
function Live() {
    // Example Live streams
    const liveStreams = [
        { user: 'Raj', streamTitle: 'New Track Drop 🎵', viewers: 120 },
        { user: 'Sana', streamTitle: 'Live Dance Session 💃', viewers: 85 }
    ];

    return React.createElement(
        'div',
        { className: 'live-page' },
        liveStreams.map((stream, index) =>
            React.createElement(LiveStream, { key: index, ...stream })
        )
    );
}

export default Live;