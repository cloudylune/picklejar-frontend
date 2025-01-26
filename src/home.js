import React from 'react';
import './home.css';

function Home() {
    const navigateToAnotherPage = () => {
        window.location.href = "/newjar.js";
      };

    return (
        <>
        <body>
            <h1 id="title">Can't decide?</h1>
            <h4 id="desc">Help your group make a collective decision! Anonymously create 
                suggestions and vote for your next group hangout.</h4>
            <button onClick={navigateToAnotherPage}><span id="newjar">Create a pickle jar</span></button>
        </body>
        </>
    );
}

export default Home;