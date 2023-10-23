import React from "react";
import "./HeadOfKite.css"; 
import HOD from "./images/HOD.jpg"
function HeadOfKite() {
  const teamMembers = [
    {
      name: "Dr.T.Thenmozhi",
      position: "HOD/CSE,  KiTE",
      imageSrc: HOD, 
    },
    {
      name: "Dr.S.Suresh Kumar",
      position: "PRINCIPAL,  KiTE",
      imageSrc: "https://www.kgkite.ac.in/wp-content/uploads/2023/06/Principal-KiTE-3.jpeg", // Add the image file path
    },


  ];

  return (
    <section className="team-section">
      {teamMembers.map((member, index) => (
        <div className="team-member" key={index}>
          <img src={member.imageSrc} alt={member.name} className="member-image" />
          <h3 className="member-name">{member.name}</h3>
          <p className="member-position">{member.position}</p>
        </div>
      ))}
    </section>
  );
}

export default HeadOfKite;
