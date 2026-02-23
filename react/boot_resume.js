import React from "react";

function Resume() {

  var name = "Dhruti Dhameliya";
  var dob = "7 Feb 2005";
  var gender = "Female";
  var address = "Bhavngar, Gujarat, India";
  var mobile = "+91 95743 77460";
  var email = "dhruti@email.com";

  var education = "BCA (Bachelor of Computer Applications)";
  var college = "XYZ College";
  var skills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap"];
  var experience = "Fresher";

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">

        <div className="text-center mb-3">
          <h1 className="text-primary">{name}</h1>
          <p className="text-muted">Web Developer</p>
        </div>

        <hr />

        <h4 className="text-secondary">Personal Details</h4>
        <div className="row">
          <div className="col-md-6">
            <p><strong>Date of Birth:</strong> {dob}</p>
            <p><strong>Gender:</strong> {gender}</p>
          </div>
          <div className="col-md-6">
            <p><strong>Mobile:</strong> {mobile}</p>
            <p><strong>Email:</strong> {email}</p>
          </div>
        </div>

        <p><strong>Address:</strong> {address}</p>

        <hr />

        <h4 className="text-secondary">Education</h4>
        <p><strong>Degree:</strong> {education}</p>
        <p><strong>College:</strong> {college}</p>

        <hr />

        <h4 className="text-secondary">Skills</h4>
        <div>
          {skills.map(function(skill, index) {
            return (
              <span key={index} className="badge bg-primary me-2 mb-2">
                {skill}
              </span>
            );
          })}
        </div>

        <hr />

        <h4 className="text-secondary">Experience</h4>
        <p>{experience}</p>

      </div>
    </div>
  );
}

export default Resume;