import React from 'react';
import './ProgressBar.css';

function ProgressBar(props) {
    const { score } = props;
    const progress = score * 0.5;

    let progressClass = '';
    if (progress >= 80) {
        progressClass = 'strong';
    } else if (progress >= 60) {
        progressClass = 'medium2';
    } else if (progress >= 40) {
        progressClass = 'medium';
    } else {
        progressClass = 'weak';
    }

    return (
        <>
            <br></br>
            Score: {progress}
            <div className="progress-container">
                <div className="progress-bar">
                    <div className={`progress-bar-filled progress-bar-filled-${progressClass}`} style={{ width: progress }}></div>
            </div>
        </div>
        </>
    );
}

export default ProgressBar;