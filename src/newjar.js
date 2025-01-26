import React, { useState } from 'react';
import './newjar.css';
import Sidebar from './sidebar';
import HangoutForm from './hangoutform';

function Newjar() {
    return (
        <>
        <body id="newjarmain">
            <div id="sidebarmain"> <Sidebar/> </div>
            <div> <HangoutForm /> </div>
        </body>
        </>
    );
}


export default Newjar;