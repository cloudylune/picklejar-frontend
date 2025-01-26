import React, { useState } from 'react';
import './newjar.css';

function Newjar() {
    return (
        <>
        <body id="newjarmain">
        <div class="mainContent">
    <div class="leftFrame">
      <div class="progressText">
        <div class="step">
          <p class="stepSub">Step 0</p>
          <p class="stepMain">Create a pickle jar</p>
        </div>
        <div class="step">
          <p class="stepSub">Step 1</p>
          <p class="stepMain">Make a suggestion</p>
          <p class="stepSub">Today</p>
        </div>
        <div class="step">
          <p class="stepSub">Step 2</p>
          <p class="stepMain">Cast your votes</p>
          <p class="stepSub">In 2 days</p>
        </div>
        <div class="step">
          <p class="stepSub">Step 3</p>
          <p class="stepMain">View results</p>
          <p class="stepSub">In 5 days</p>
        </div>
      </div>
      <div class="progressCircles">
        <div class="largeCircle">
          <div class="smallCircle"></div>
        </div>
        <div class="barCircles"> 
          <div class="largeCircle"></div>
          <div class="largeCircle"></div>
          <div class="largeCircle"></div>
        </div>
      </div>
    </div>
    <div class="rightFrame">
      <div class="formContent">
        <div class="formTitle">
          <h1>New pickle jar</h1>
        </div>
        <div class="formFields"> 
          <div class="sectionTop">
            <label for="name">What decision are you trying to make?</label>
            <input type="text" id="name" name="name" required></input>
          </div>
          <div class="sectionBottom">
            <p class="setEndDate">Set End Date</p>
            <div class="sectionBottom2">
              <div class="suggestingPeriod">
                <label for="submission_deadline">Suggestion Period</label>
                <input type="datetime-local" id="submission_deadline" name="submission_deadline" required></input>
              </div>
              <div class="votingPeriod">
                <label for="voting_deadline">Voting Period</label>
                <input type="datetime-local" id="voting_deadline" name="voting_deadline" required></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" class="button">Create Hangout</button>
    </div>
  </div>
            
        </body>
        </>
    );
}

export default Newjar;