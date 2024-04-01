import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";

const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://media.licdn.com/dms/image/D5622AQEHT_WgQ94PTA/feedshare-shrink_800/0/1710226466544?e=1714608000&v=beta&t=hBNlWrOGSj8di69TxVQNmkznlhPGrENb5XucaviZ_dI"
              alt="Founder"
            />
            <Typography variant="h5" component="h2">Mannat Abrol</Typography>
            <Typography variant="subtitle1">Software Intern</Typography>
            <span>
              Explore the e-commerce website with me .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
