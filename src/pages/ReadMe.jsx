import React from "react";

export default function ReadMe() {
    return (
       <div className="help-me-container">
        <h1>Mini Data Visualization Project</h1>
        <p>Esentially i just made this project to develop my React skills, which were (are) extremly elementary
           at the time of working on this project. I used JS, HTML, CSS & React. The overview page simply allows you too
           filter and customize the data a little bit. The create view can only handle one feild and one measure at a time. Overall,
           the code is very crude, and far from a place in which you could upload a file and have the program read in the data
            and visualize / manipulate it accordingly. None the less, i got to play around with React Router (which i ended up not needing).
            I also had the opportunity to use the Context API & Rechart JS, which was fun to learn about. I hope to be able to work on a similar project
            in a year or two. The goal would be that you could actually upload a file, customize the dashboards in a meaningful way, create charts
            that can handle multiple fields and measures (and do all sorts of other cool things you would see in a platform like Tableau or Power-bi).
            Lastly, the data set was from Kaggle. It can be found at the link below.
        </p>
        <a style={{paddingTop: 20, color: "black"}} href="https://www.kaggle.com/datasets/bravehart101/sample-supermarket-dataset">Data Set</a>
        <h3 style={{paddingTop: 40}}>
            May 8th, 2023
        </h3>
       </div>    
    )
}
