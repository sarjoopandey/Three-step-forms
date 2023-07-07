import React from "react";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <h2>Add Task</h2>
      <div className="buttons-info">
      <input  type="text"
        placeholder="Add Task"/>
        <button>Add</button>
      </div>
      <div className="budget-text3">
       <input type="checkbox"/><p>Marketing Website Design</p>
       <span>X</span>
      </div>
      <hr/>
      <div className="budget-text4">
       <input type="checkbox"/><p>Branding Design</p>
       <span>X</span>
      </div>
      <hr/>
      <div className="budget-text5">
       <input type="checkbox"/><p>UI/UX Fundamental</p>
       <span>X</span>
      </div>
      <hr/>
      <div className="budget-text6">
       <input type="checkbox"/><p>Wireframe and Prototype</p>
       <span>X</span>
      </div>
      <hr/>
      <div className="budget-text7">
       <input type="checkbox"/><p>Style Guide</p>
       <span>X</span>
      </div>
      <hr/>
      <div className="budget-text8">
       <input type="checkbox"/><p>UX Research and flow</p>
       <span>X</span>
      </div>
      <hr/>
      <div className="budget-text9">
       <input type="checkbox"/><p>LayoutDesign</p>
       <span>X</span>
      </div>
      <hr/>
    </div>
  );
}

export default OtherInfo;
