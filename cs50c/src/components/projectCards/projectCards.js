import React from 'react';
import './projectCard.css';
import ProjectCard from './projectCard'; 

function ProjectCards() {
  const cardData = [{id: 1, title: "Week10-11", 
                     description: "A map component which utilizes api functionality to enable a global digital aesthetic.", 
                     img: "/imgs/project1.png"}, 
                    
                    {id: 2, 
                     title: "Week11-12", 
                     description: "The previous map component integrated with front end static web app functionality, buttons and other interactive features.", 
                     img: "/imgs/project2.png"},

                    {id: 3, 
                       title: "Week12-14", 
                       description: "A brief exploration of data visualization, using jquery code to to bring data to life.", 
                       img: "/imgs/project3.png"},

                    {id: 4, 
                       title: "Week13-15", 
                       description: "A more in depth data visualization experience. This app brings ground breaking interactive features to the forefront, allowing users to switch data with the click of a button ", 
                       img: "/imgs/project4.png"},

                    {id: 5, 
                       title: "Week13-16", 
                       description: "An exclusive look at our work in cutting edge game development. Play axe collector! A side scrolling adventure where you collect axes to save the red lands. ", 
                       img: "/imgs/project5.png"},

                    {id: 6, 
                       title: "Week14-17", 
                       description: "Our newest entry into the red Lands series. Incendiary Bomb Survival! Dodge bombs and earn points to save the red lands. ", 
                       img: "/imgs/project6.png"},
    ]
  return (<div className="container">
          {cardData.map((card) => (
            <ProjectCard key={card.id} title={card.title} description={card.description} img={card.img}/>
          ))}
         </div>
         );
}

export default ProjectCards; 