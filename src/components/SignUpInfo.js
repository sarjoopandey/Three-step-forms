import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
    <label>Projects Name</label>
      <input
        type="text"
        placeholder="Enter projects name here"
        value={formData.projectName}
        onChange={(event) =>
          setFormData({ ...formData, projectNAme: event.target.value })
        }
      />
      <label>Clients</label> <br/>
      <div className="client-info">
      <select><option>Select a client</option></select>
      <input  type="text"
        placeholder="+ New client"/>
      </div>
      <label>Date</label>
      <div className="all-dates">
      <input type="date"placeholder="todaydate"/>
      <input type="date"placeholder="todaydate"/>
      </div>
      <label>Notes</label>
      <textarea rows="4" cols="0" placeholder="Optional"
      />
    </div>
  );
}

export default SignUpInfo;
