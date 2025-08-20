import React, { FC } from "react";
import { Nav } from "../components/Nav";
import {
  AnimatedParagraph,
  AnimatedList,
  AnimatedImage,
} from "../components/Animated";
import { AttractionsMap, RestaurantMap } from "../components/Maps";
import { GetStaticProps, NextPage } from "next";

interface LinkProps {
  href: string;
  comma?: boolean;
}
const Link: FC<LinkProps> = ({ href, children, comma }) => {
  return (
    <a className="link-text" href={href}>
      &nbsp;{children}
      {comma ? "," : null}&nbsp;
    </a>
  );
};

const Travel: NextPage = () => {
  return (
    <>
      <div className="page-header" id="travel-page-header">
        <Nav transparent={false} />
        <h1 className="page-heading">Institutions & Infrastructure</h1>
      </div>
      <div id="travel-page" className="page-content">
        <div className="content-wrapper">
          <div className="info-block">
            <h1 className="info-heading">Gateway to Western & North Rift</h1>
            <div className="info-inner-container attractions-info-container">
              <AnimatedParagraph fullWidth={true} position="right">
                Eldoret City is more than just a gateway—it’s a vital hub for regional trade, a strategic export point for regional farmers, and a potential logistics powerhouse as growth continues
              </AnimatedParagraph>
              <AttractionsMap />
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Air travel</h1>
            <div className="info-inner-container-reversed reversed-text-first">
              <AnimatedImage imagePath="/images/airport.jpg" position="right" />
              <AnimatedParagraph position="left">
                Eldoret has daily scheduled flights, mostly connecting to Nairobi and coastal towns:

✈️ Domestic Airlines Serving Eldoret

Jambojet (low-cost subsidiary of Kenya Airways)

Routes: Nairobi (JKIA & Wilson), Mombasa, Kisumu (seasonal).

Skyward Express

Routes: Nairobi Wilson, Lodwar, Mombasa.

Fly540

Routes: Nairobi Wilson (occasional schedules).

Kenya Airways (KQ)

Routes: Sometimes operates via Jambojet codeshare to Eldoret.

Flight duration between Eldoret and Nairobi is about 45 to 55 minutes.
Eldoret also has an airstrip

🌍 International & Cargo Connections

While Eldoret International is primarily domestic for passengers, it is a major cargo hub.

Cargo airlines like Ethiopian Airlines, Emirates SkyCargo, and Astral Aviation connect Eldoret to Dubai, Sharjah, Addis Ababa, and other hubs.

This is especially important for flower, fruits, and vegetable exports.
                <Link href="https://www.kaa.go.ke/?v=25bc6654798e">
                  Kenya Airports Authority
                </Link>
                
                <Link href="https://www.google.com/travel/hotels/Berlin?g2lb=2502548%2C2503781%2C4258168%2C4270442%2C4306835%2C4317915%2C4371335%2C4401769%2C4419364%2C4482438%2C4486153%2C4509341%2C4536454%2C4545889%2C4564872%2C4570611%2C4270859%2C4284970%2C4291517&hl=en-ES&gl=es&ssta=1&ap=SAFoAQ&q=berlin%20hotels&rp=EKGPsurfv5e1rQEQ4Jynt_W738S8ARDLjIjJjLyH6C8Q2f3tmL_9t_IZOAFAAEgCogEPQmVybGluLCBHZXJtYW55&ictx=1&ved=0CAAQ5JsGahcKEwiYwOySm5DxAhUAAAAAHQAAAAAQAg&utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESCgoCCAMKAggDEAAaMwoVEhE6D0JlcmxpbiwgR2VybWFueRoAEhoSFAoHCOUPEAYYHBIHCOUPEAYYHRgBMgIQACoLCgcoAToDRVVSGgA">
                  link
                </Link>
                
              </AnimatedParagraph>
            </div>
          </div>
          <section className="content-section food-content">
            <h1 className="info-heading">Travel & Hospitality</h1>
            <AnimatedParagraph position="right">
              Eldoret has really grown into a hospitality hub in western Kenya thanks to its position as a commercial center, farming capital, and athletics hotspot
              <b>
                <br />
                
              </b>
            </AnimatedParagraph>
            <div className="info-block">
              <div className="info-inner-container reversed-text-first">
                <AnimatedImage
                  imagePath={"/images/eka1.jpg"}
                  position="left"
                />
                <AnimatedList position="left" fullWidth={false}>
                  Eldoret offers a wide range of hotels, from budget stays to 4-star business hotels:

High-end hotels Boma Inn Eldoret, Eka Hotel, Sixty Four Resort, Noble Hotel, Poa Place Resort.

Mid-range & boutique hotels Sirikwa Hotel, Wagon Hotel, Goshen Inn, Comfy Hotel.

Budget & guesthouses Many smaller lodges and Airbnb options, popular with students, backpackers, and athletes.

Athletics camps & training centers Eldoret hosts specialized facilities for runners, attracting international athletes.
                </AnimatedList>
              </div>
            </div>

            <AnimatedParagraph fullWidth={true}>
              Karibu Uasin Gishu
            </AnimatedParagraph>
          </section>
          <RestaurantMap />
          <div className="info-block">
            <h1 className="info-heading heading-center">HealthCare</h1>
            <div className="horizontal-line"></div>
            <div className="info-inner-container-reversed reversed-text-first">
              <AnimatedParagraph
                additionalClassName="large-width"
                position="right"
              >
                Serves a catchment of over 25 million people across Kenya and neighboring countries like Uganda, South Sudan, Northern Tanzania, and DR Congo 
                Functions as a level-six hospital, offering both inpatient and outpatient services as well as specialized care
                Offers a wide range of advanced medical services including:

Cochlear, kidney, and corneal transplants

Open-heart, spinal, neurosurgery, and orthopedic trauma surgeries

Cardiology, oncology, ICU, alcohol/drug rehabilitation

Postpartum IUD services and 24-hour trauma surgery 
mtrh.go.ke
.

Home to multiple centers of excellence:

Chandaria Cancer & Chronic Diseases Centre

Riley Mother & Baby Hospital (with East Africa’s first neonatal ICU)

AMPATH (ACC, HIV treatment)

A modern ICU, mental health unit, and haemodialysis unit
                <Link href="https://portal.mtrh.go.ke/" comma>
                  Moi Teaching & Referal Hospital
                </Link>
                
              </AnimatedParagraph>
              <AnimatedImage
                position="left"
                imagePath="/images/mtrh.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Travel;
