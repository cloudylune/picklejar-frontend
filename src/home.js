import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    
    return (
        <>
        <body id="home">
            <h1 id="title">Can't decide?</h1>
            <h4 id="desc">Help your group make a collective decision! Anonymously create 
                suggestions and vote for your next group hangout.</h4>
            <a href="./newjar.js"><button><span id="newjar">Create a pickle jar</span></button></a>
        </body>
        </>
    );
}

export default Home;