import React from 'react';
import './style/sidebar.css';

function Sidebar() {
    return (
        <>
            <div className="container">
                <div className="rectangle"></div>
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
            </div>
            

                <p className="circle-top">Step 1</p>
                <p className="circle-middle">Make a Suggestion</p>
                <p className="circle-bottom">Today</p>
        </>
    );
}

export default Sidebar;