import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <Wrapper className="section">
      <h2 className="common-heading"> Latest job openings - check them out!</h2>

      <div className="ag-format-container">
        <div className="ag-courses_box">
          {[
            "Temporary/Contractual Staffing",
            "Permanent Staffing",
            "On-boarding",
            "Documentation",
            "Payroll Management",
            "Legal & Statutory Compliance Audit",
            "Grievance Management",
          ].map((title, index) => (
            <div className="ag-courses_item" key={index}>
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg" />
                <div className="ag-courses-item_title">{title}</div>
                {index < 5 && (
                  <div className="ag-courses-item_date-box">
                    Start: <span className="ag-courses-item_date">04.11.2022</span>
                  </div>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 6rem 0;
  background: linear-gradient(to right, #f0f4f8, #e0ecf4);

  h2 {
    text-align: center;
    color: #2a2a2a;
    font-size: 2.8rem;
    margin-bottom: 3rem;
    font-weight: 700;
  }

  .ag-format-container {
    width: 90%;
    max-width: 1140px;
    margin: 0 auto;
  }

  .ag-courses_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .ag-courses_item {
    flex: 1 1 calc(33% - 2rem);
    max-width: calc(33% - 2rem);
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #e0e0e0;
  }

  .ag-courses-item_link {
    display: block;
    padding: 2.5rem 2rem;
    position: relative;
    color: #2a2a2a;
    text-decoration: none;
    transition: all 0.3s ease;
    z-index: 2;

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
    }

    &:hover .ag-courses-item_bg {
      transform: scale(12);
      opacity: 0.1;
    }
  }

  .ag-courses-item_title {
    font-size: 1.6rem;
    font-weight: 600;
    z-index: 2;
    position: relative;
    min-height: 80px;
    display: flex;
    align-items: center;
  }

  .ag-courses-item_date-box {
    margin-top: 1rem;
    font-size: 1rem;
    color: #555;
    z-index: 2;
    position: relative;
  }

  .ag-courses-item_date {
    color: #3f51b5;
    font-weight: bold;
  }

  .ag-courses-item_bg {
    height: 120px;
    width: 120px;
    background-color: #f9b234;
    border-radius: 50%;
    position: absolute;
    top: -60px;
    right: -60px;
    z-index: 1;
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0.2;
  }

  .ag-courses_item:nth-child(2n) .ag-courses-item_bg {
    background-color: #3ecd5e;
  }
  .ag-courses_item:nth-child(3n) .ag-courses-item_bg {
    background-color: #ff7043;
  }
  .ag-courses_item:nth-child(4n) .ag-courses-item_bg {
    background-color: #7e57c2;
  }
  .ag-courses_item:nth-child(5n) .ag-courses-item_bg {
    background-color: #ec407a;
  }
  .ag-courses_item:nth-child(6n) .ag-courses-item_bg {
    background-color: #42a5f5;
  }

  @media (max-width: 1024px) {
    .ag-courses_item {
      flex: 1 1 calc(50% - 2rem);
      max-width: calc(50% - 2rem);
    }
  }

  @media (max-width: 640px) {
    .ag-courses_item {
      flex: 1 1 100%;
      max-width: 100%;
    }

    .ag-courses-item_title {
      font-size: 1.4rem;
    }

    .ag-courses-item_link {
      padding: 2rem 1.5rem;
    }
  }
`;

export default Services;
