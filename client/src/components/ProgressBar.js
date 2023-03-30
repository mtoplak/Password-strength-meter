import React from 'react';
import './ProgressBar.css';

function ProgressBar(props) {
    const { score } = props;
    const progress = score * 1.6;
    console.log(progress)
    console.log(score)

    let progressClass = '';
    if (progress >= 140) {
        progressClass = 'strong';
    } else if (progress >= 100) {
        progressClass = 'medium2';
    } else if (progress >= 60) {
        progressClass = 'medium';
    } else {
        progressClass = 'weak';
    }

    return (
        <>
            <p>Score: {progress > 200 ? "200" : progress.toFixed(0)}</p>
            <div className="progress-container">
                <div className="progress-bar">
                    <div className={`progress-bar-filled progress-bar-filled-${progressClass}`} style={{ width: progress }}></div>
                </div>
            </div>
        </>
    );
}

export default ProgressBar;