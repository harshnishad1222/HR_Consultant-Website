import React, { useEffect } from "react";


import { Button } from "./styles/Button";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const About = () => {



  return (
  <Wrapper>
    <div className="container grid grid-two-column">
    <div className="section-hero-data">

      <h1 className="hero-heading">Meet our Team</h1>
      <p className="hero-para">
      
    "i am convinced that nothing we do is more important than hiring and developing people ."
      </p>
      <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
    </div>
    <div className="section-hero-image">
          <picture>
          <img src="https://github.com/harshnishad1222/HR_Consultant-Website/blob/main/public/images/about1.gif?raw=true" alt="hero image" className="hero-img " />
          </picture>
        </div>
    {/* for image  */}
    
  </div>
  </Wrapper>
  )

};

const Wrapper = styled.section`
.hero-img{
  width:50rem;
  margin-top:9rem;
  margin-left:9rem;
}



h1 {
    color: rgb(24 24 29);
    font-size: 7rem;
    font-weight: 900;
    margin-top:13rem;
}


p {
  color: rgb(24 24 29);
  opacity: .7;
  font-size: 2rem;
  line-height: 1.5;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-weight: 400;

}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default About;

