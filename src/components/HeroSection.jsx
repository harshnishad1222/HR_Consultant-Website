import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">Hey!!!</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            "NO COMPANY WANTS A NO-SHOW EMPLOYEE. C2GROW MAKES SURE THAT ONLY THE BEST WALK THROUGH THE DOOR."
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">Hire Me</NavLink>
          </Button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero" className="hero-img" />
          </picture>
        </div>

        <div className="aadi">
          <p>
            The Indian staffing landscape is changing. Businesses are grappling to find and hire the best talents. Employee expectations have undergone massive change in the past few years with the emergence of work from home and hybrid work culture. High labor costs are stinging multiple departments to fill the talent gap. And so much more threatens to stop your business from growing.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background: linear-gradient(to right, #fdfbfb, #ebedee);

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: fadeInUp 1s ease-out;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2rem;
    color: #6366f1;
    letter-spacing: 1px;
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 4rem;
    line-height: 1.2;
    margin: 1rem 0;
    color: #1e293b;
    transition: color 0.3s ease;

    &:hover {
      color: #4f46e5;
    }
  }

  .hero-para {
    margin: 1rem 0 2.5rem;
    max-width: 60rem;
    font-size: 1.8rem;
    line-height: 1.6;
    color: #334155;
  }

  .btn {
    max-width: 16rem;
    background-color: #4f46e5;
    color: white;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #4338ca;
      transform: scale(1.05);
    }

    a {
      color: white;
      font-weight: 500;
      text-decoration: none;
    }
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;

    .hero-img {
      max-width: 90%;
      border-radius: 2rem;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.03);
      }
    }
  }

  .aadi {
    margin-top: 4rem;
    font-size: 1.6rem;
    color: #475569;
    background: #f1f5f9;
    padding: 2rem;
    border-left: 4px solid #6366f1;
    border-radius: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 5rem;
      display: flex;
      flex-direction: column;
    }

    .hero-heading {
      font-size: 3.2rem;
    }

    .hero-para,
    .aadi {
      font-size: 1.4rem;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default HeroSection;
