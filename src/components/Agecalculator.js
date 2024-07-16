import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Agecalculaor.css";

function Agecalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const handleInputChange = (e) => {
    setDob(e.target.value);
  };
  const calculateAge = () => {
    const birthday = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthday.getFullYear();
    let months = today.getMonth() - birthday.getMonth();
    let days = today.getDate() - birthday.getDate();

    if (days < 0) {
      months -= 1;
      days += 31;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    setAge({ years, months, days });
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="div-heading">
            <h3 className="animated-text">Calculate Your Age</h3>
            <div className="sub-head">
              <input
                type="date"
                className=" button-like-input"
                onChange={handleInputChange}
                value={dob}
              />

              <button
                className="button-like-input ms-1 ms-md-4"
                onClick={calculateAge}
              >
                Calculate
              </button>
            </div>
            <div className="button-group">
              <Button className="result-btn">
                <span className="fw-bold">{age.years}</span>
                <br />
                <span className="fw-medium"> Years </span>
              </Button>
              <Button className="result-btn">
                <span className="fw-bold"> {age.months} </span>
                <br />
                <span className="fw-medium"> Months </span>
              </Button>
              <Button className="result-btn">
                <span  className="fw-bold"> {age.days} </span>
                <br />
                <span className="fw-medium"> Days </span>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Agecalculator;
