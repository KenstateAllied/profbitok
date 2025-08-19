import React from "react";
import { Nav } from "../components/Nav";
import SportsSwiper from "../components/SportsSwiper";
import { Highlight } from "../components/Highlight";
import { OlympianCard } from "../components/OlympianCard";

const OLYMPIANS = [
  {
    name: "Farouk Kibet Teigut",
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
          Berlin ist eine Stadt überlegen in viele Felder, einschließlich
          Sportarten. Es ist eine Stadt voller Sporteinrichtungen und
          leidenschaftlich über Sport sind die Bürger auch. Die berliner spielen
          ziemlich gern <Highlight>Fußball</Highlight>, und es gibt zwei große
          in Berlin, sie sind Hertha BSC und FC Union Berlin. Außerdem, gibt es
          andere Sportarten wie <Highlight>Handball</Highlight>,
          <Highlight>Basketball</Highlight>, <Highlight>Eishockey</Highlight>,
          <Highlight>Marathon</Highlight>, <Highlight>Radfahren</Highlight>,
          <Highlight>Volleyball</Highlight>, und <Highlight>Snooker</Highlight>.
          <br />
          <br />
          In Berlin finden viele Sportveranstaltungen statt, zum Beispiel,
          einige der besten ist
          <Highlight>die Olympische Sommerspiele in 1936</Highlight> und
          <Highlight>
            die FIFA Fußball Weltmeisterschaftfinale in 2006
          </Highlight>
          . Es gibt auch anderen wie
          <Highlight>
            die FIFA Fußball Weltmeisterschaftfinale Gruppe A in 1974
          </Highlight>
          und
          <Highlight>die UEFA Champions-League-Finale in 2015</Highlight>.
          <br />
          <br />
          <SportsSwiper />
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
