import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          {["Home", "About", "Services", "Contact"].map((label, index) => (
            <li key={index}>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to={label === "Home" ? "/" : `/${label.toLowerCase()}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 3rem;

    li {
      list-style: none;

      .navbar-link {
        display: inline-block;
        position: relative;
        font-size: 1.6rem;
        text-transform: uppercase;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text || "#333"};
        font-weight: 600;
        padding: 0.5rem 0;
        transition: all 0.3s ease;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0%;
          height: 2px;
          background: ${({ theme }) => theme.colors.helper || "#0077ff"};
          transition: width 0.3s ease;
        }

        &:hover,
        &.active {
          color: ${({ theme }) => theme.colors.helper || "#0077ff"};
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
  }

  .mobile-navbar-btn {
    display: none;
    background: none;
    border: none;

    .mobile-nav-icon {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.colors.text || "#333"};
      cursor: pointer;
    }

    .close-outline {
      display: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: block;
      position: absolute;
      top: 2rem;
      right: 2rem;
      z-index: 1000;

      .mobile-nav-icon {
        transition: transform 0.3s ease;
      }
    }

    .navbar-list {
      flex-direction: column;
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background-color: #fdfdfd;
      transform: translateX(100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease-in-out;
      align-items: center;
      justify-content: center;
      text-align: center;
      z-index: 999;

      li {
        margin: 2rem 0;

        .navbar-link {
          font-size: 2.4rem;
        }
      }
    }

    .active .navbar-list {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }

    .active .mobile-navbar-btn .mobile-nav-icon {
      display: none;
    }

    .active .mobile-navbar-btn .close-outline {
      display: inline-block;
    }
  }
`;

export default Navbar;
