import React, { useState } from 'react';
import './hangoutform.css';


function HangoutForm() {

  // Step 1: Set up state to store form values
  const [formData, setFormData] = useState({
    name: '',
    submissionDeadline: '',
    votingDeadline: ''
  });

  // Step 2: Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value // Update the corresponding field in the form data
    });
  };

  // Step 3: Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submission
    console.log('Form submitted:', formData);
    // Here you could send the form data to a server or perform other actions
  };

  return (
    <div id="picklejarform">
      <h1 id="newpicklejar">New pickle jar</h1>
      <form id="hangoutForm" onSubmit={handleSubmit}>
        {/* Hangout Name */}
        <label htmlFor="name">What decision are you trying to make?</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name} // Bind value to state
          onChange={handleInputChange} // Handle changes
          required
        />
        <br /><br />
        
        <p class="enddate">Set End Date</p>

        <div id="form_section">
        {/* Submission Deadline */}
        <label htmlFor="submission_deadline">Suggesting Period<br></br></label>
        <input
          type="datetime-local"
          id="submission_deadline"
          name="submissionDeadline"
          value={formData.submissionDeadline} // Bind value to state
          onChange={handleInputChange} // Handle changes
          required
        />
        <br /><br />
    
    
        {/* Voting Deadline & CHECK VARIABLES!*/}
        <label htmlFor="voting_deadline">Voting Period<br></br></label>
        <input
          type="datetime-local"
          id="voting_deadline"
          name="votingDeadline"
          value={formData.votingDeadline} // Bind value to state
          onChange={handleInputChange} // Handle changes
          required
        />
        <br /><br />
        </div>
        
        <button type="submit" id="createpickle"><span id="createpickletext">Create a pickle jar</span></button>
      </form>
    </div>
  );
}


export default HangoutForm;
