import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <p>Don't Panic-You can also customise this type of settings</p>
      <div className="step-button">
        <button className="Firt-button1">Time & MAterial</button>
        <button className="Firt-button2">Fixed Fee</button>
        <button className="Firt-button3">Non-Billiable</button>
      </div>
      <h5>Hourly</h5>
      <p className="horly-name">We need hourly rates to track your project's billable amount.</p>
      <div className="selection-part">
        <select>
          <option>Project Hourly Rate</option>
        </select>
        <input type="number" className="number-field" placeholder="$1234.."/>
      </div>
      <h5>Budget</h5>
      <p className="horly-name">We need hourly rates to track your project's billable amount.</p>
      <div className="budget-selection-part">
        <select>
          <option>Hours per Person</option>
        </select>
      </div>
      <div className="budget-text">
       <input type="checkbox"/><p>Budget rates every months</p>
      </div>
      <div className="budget-text2">
      <input type="checkbox"/><p>Send emails alert if projects exceed <button>80.00</button> % of budget</p>
      </div>
    </div>
  );
}

export default PersonalInfo;
