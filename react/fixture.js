import React from "react";
import "./fixture.css";

const fixtures = [
  {
    match: "Match 1",
    team1: "India",
    team2: "Australia",
    date: "5 June 2026",
    venue: "Mumbai"
  },
  {
    match: "Match 2",
    team1: "England",
    team2: "Pakistan",
    date: "6 June 2026",
    venue: "Delhi"
  },
  {
    match: "Match 3",
    team1: "New Zealand",
    team2: "South Africa",
    date: "7 June 2026",
    venue: "Chennai"
  },
  {
    match: "Match 4",
    team1: "West Indies",
    team2: "Sri Lanka",
    date: "8 June 2026",
    venue: "Bangalore"
  }
];

function Fixture() {
  return (
    <div className="fixture-container">
      <h1 className="title">Men’s T20 World Cup Fixtures</h1>

      <div className="fixture-grid">
        {fixtures.map((game, index) => (
          <div className="fixture-card" key={index}>
            <h3>{game.match}</h3>
            <p className="teams">
              <span>{game.team1}</span> vs <span>{game.team2}</span>
            </p>
            <p className="details">📅 {game.date}</p>
            <p className="details">📍 {game.venue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fixture;