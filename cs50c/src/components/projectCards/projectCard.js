import React from 'react';
import './projectCard.css'; 


function ProjectCard({title, description, img}) {
  return (
    <div className="card">
      <div className="cardSec">
         <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="cardSec" style={{backgroundImage: `url(${img})`}}></div>
    </div>
  );
}

export default ProjectCard; 

