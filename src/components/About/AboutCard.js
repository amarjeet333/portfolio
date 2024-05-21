import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aastha Mishra </span>
            from <span className="purple"> Jamshedpur, India.</span>
            <br />
            I am currently employed as a Graduate Engineer Trainee at Vodafone Idea.
            <br />
            I have completed Bachelor of Technology (B-TECH) in Computer Science & Engineering from Institute Of Engineering & Management.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The purpose of life is to contribute in some way to making things better.!"{" "}
          </p>
          <footer className="blockquote-footer">Robert F. Kennedy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
