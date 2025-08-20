import React from "react";
import { Nav } from "../components/Nav";
import SportsSwiper from "../components/SportsSwiper";
import { Highlight } from "../components/Highlight";
import { OlympianCard } from "../components/OlympianCard";

const OLYMPIANS = [
  {
    name: "Farouk Teigut",
    img: "/images/farouk.jpeg",
    description: "Office of the President",
  },
  {
    name: "Oscar Sudi",
    img: "/images/sudi.jpeg",
    description: "MP Kapseret",
  },

  {
    name: "Gladys Boss",
    img: "/images/shollei.jpeg",
    description: "Women Rep",
  },
  {
    name: "Phylis Bartoo",
    img: "/images/bartoo.jpeg",
    description: "MP Moiben",
  },
  {
    name: "Janet Sitienei",
    img: "/images/sitienei.jpeg",
    description: "MP Turbo",
  },
  {
    name: "David Kiplagat",
    img: "/images/kiplagat.jpeg",
    description: "MP Soy",
  },
  {
    name: "Jullius Ruto",
    img: "/images/ruto.jpeg",
    description: "MP Kesses",
  },
  {
    name: "Samuel Chepkonga",
    img: "/images/chepkonga.jpeg",
    description: "MP Ainabkoi",
  },
];

export default function Sports() {
  let right = false;
  let cards = [];
  for (let i = 0; i < OLYMPIANS.length; i++) {
    cards.push(
      <OlympianCard
        description={OLYMPIANS[i].description}
        name={OLYMPIANS[i].name}
        position={right ? "right" : "left"}
        key={OLYMPIANS[i].name}
        imagePath={OLYMPIANS[i].img}
        noOffset={i === 0}
      />
    );
    right = !right;
  }

  return (
    <>
      <div className="page-header" id="sports-page-header">
        <Nav transparent={false} />
        <h1 className="page-heading">Home of Champions</h1>
      </div>
      <div id="sports-page" className="page-content">
        <h1 style={{ margin: "35px" }} className="info-heading">
          Markets and Leadership
        </h1>
        <div className="ps-relative dp-block margined-div">
          Future farming strengths <br/>
      Mechanized farming due to large tracts of land.

      Value addition through maize milling, milk processing, and wheat flour.

      Contract farming with big processors (e.g., Kenya Breweries for barley).

      Youth embracing agribusiness ventures like poultry, greenhouse farming, and agritech solutions.
        </div>
        <h1 style={{ margin: "35px" }} className="info-heading">
          Uasin Gishu Current Leaders
        </h1>
        <section className="olympians-section">
          <div className="olympians-container">{cards.slice(0, 4)}</div>
          <div className="olympians-container">{cards.slice(4)}</div>
        </section>
      </div>
    </>
  );
}
