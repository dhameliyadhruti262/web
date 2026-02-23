import React from "react";
import "./resume.css";

function Resume() {

  var name = "Dhruti Dhameliya";
  var dob = "7 Feb 2005";
  var gender = "Female";
  var address = "Bhavngar, Gujarat, India";
  var mobile = "+91 41256987450";
  var email = "dhruti@email.com";

  var education = "BCA (Bachelor of Computer Applications)";
  var college = "XYZ College";
  var skills = "HTML, CSS, JavaScript, React";
  var experience = "Fresher";

  return (
    <div className="resume-container">
      <h1 className="resume-name">{name}</h1>
      <hr />

      <h3>Personal Details</h3>
<div className="section">
  <p><b>Date of Birth:</b> {dob}</p>
  <p><b>Gender:</b> {gender}</p>
  <p><b>Address:</b> {address}</p>
  <p><b>Mobile:</b> {mobile}</p>
  <p><b>Email:</b> {email}</p>
</div>

<h3>Education</h3>
<div className="section">
  <p><b>Degree:</b> {education}</p>
  <p><b>College:</b> {college}</p>
</div>

<h3>Skills</h3>
<div className="section">
  <span className="skills">HTML</span>
  <span className="skills">CSS</span>
  <span className="skills">JavaScript</span>
  <span className="skills">React</span>
</div>
    </div>
  );
}

export default Resume;