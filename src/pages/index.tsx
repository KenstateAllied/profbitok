import React, { useState, useEffect } from "react";
//import { Highlight } from "../components/Highlight";
import { Nav } from "../components/Nav";
import {
  //AnimatedList,
  AnimatedParagraph,
  AnimatedImage,
} from "../components/Animated";
import { GetStaticProps, NextPage } from "next";
export const SCROLL_ANIMATION_DURATION = "700";

const Home: NextPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const scrollCallback = () => {
      setScrollY(window.scrollY);
    };

    scrollCallback();

    window.addEventListener("scroll", scrollCallback);
  });

  return (
    <>
      <div className="page-header">
        <Nav transparent={scrollY <= 300} />
        <h1 className="page-heading" id="home-page-header">
          Uasin Gishu - Home of Champions
        </h1>
      </div>

      <div id="home-page" className="page-content">
        <div className="content-wrapper">
          <div className="info-block">
            <h1 className="info-heading heading-center">
              Office of the Governor
            </h1>
            <div className="info-inner-container lots-of-text reversed-text-first">
              <AnimatedImage
                imagePath={"/images/2nd-governor.jpg"}
                position="left"
              />
              <AnimatedParagraph position="right">
              Supervises and coordinates all county departments and agencies.

Appoints County Executive Committee (CEC) members and Chief Officers, with approval from the County Assembly.

Chairs the County Executive Committee.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">County Assembly Uasin Gishu</h1>
            <div className="info-inner-container-reversed reversed-text-first">
              <AnimatedImage imagePath="/images/countyhq.jpg" position="right" />
              <AnimatedParagraph position="left">
                The County Assembly’s main functions are law-making, oversight, representation, budget approval, and accountability. It balances the Governor’s executive power by ensuring the county government serves the people effectively and transparently.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">County Executive</h1>
            <div className="info-inner-container reversed-text-first">
              <AnimatedImage
                imagePath="/images/countylogo.jpg"
                position="left"
              />
              <AnimatedParagraph position="right">
               Office of the Governor & Deputy Governor

Provides overall leadership, coordination, and intergovernmental relations.

Finance & Economic Planning

Budgeting, revenue collection, economic policy, procurement, and financial management.

Agriculture, Livestock Development & Fisheries

Crop production, animal husbandry, agribusiness, extension services, food security.

Health Services

County hospitals, clinics, public health, sanitation, preventive and curative services.

Education, Culture, Social Services, Youth & Sports

Early Childhood Education (ECDE), vocational training centers, culture, youth programs, sports development.

Lands, Housing, Physical Planning & Urban Development

Land management, housing, urban planning, Eldoret City status programs.

Water, Environment, Natural Resources & Climate Change

Water supply, sewerage, forestry, environmental conservation.

Roads, Transport & Public Works

County roads, bridges, transport regulation, infrastructure development.

Trade, Industrialization, Tourism & Cooperative Development

Markets, business licensing, SMEs, cooperative societies, investment promotion, tourism.

Public Service Management & Administration

Human resource management, county staff welfare, administration at sub-county and ward levels.

ICT & Innovation (if included by the Governor’s structure)

Digital services, innovation hubs, e-governance systems.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Sources of Revenue</h1>
            <div className="info-inner-container-reversed reversed-text-first">
              <AnimatedImage
                imagePath="/images/office.png"
                position="right"
              />
              <AnimatedParagraph position="left">
                Equitable Share (National Transfers)

Money sent from the National Government as required by the Constitution.

This is the largest source of revenue for the county.

2. Conditional Grants & Loans

Allocations from the national government or development partners for specific projects, e.g.:

Health equipment leasing,

Road maintenance,

Urban development (Eldoret municipality).

3. Own-Source Revenue (Local Collections)

Uasin Gishu County raises revenue locally through:

Property rates (on land and buildings).

Single business permits (licenses for businesses).

Market fees (traders in Eldoret town and rural markets).

Parking fees (vehicles in Eldoret CBD and other centers).

Cess/produce fees (charged on agricultural produce like maize, milk, potatoes when transported or traded).

Slaughterhouse and livestock fees (slaughter permits, animal sales at markets).

Rent from county houses and stalls.

Billboards and advertisement fees.

Plan approval & building permits.

Water charges (through county water companies where applicable).

4. Donor & Development Partner Support

Grants, donations, and partnerships with NGOs, World Bank, AfDB, etc.

For example, urban renewal, agriculture value-chain support, or climate programs.

5. Other Sources

Investments and income from county-owned assets (e.g., Eldoret’s real estate or enterprises).

Fines and penalties from county by-laws.
              </AnimatedParagraph>
            </div>
          </div>
          <div className="info-block">
            <h1 className="info-heading">Uasin Gishu Economic Activities</h1>
            <div className="info-inner-container reversed-text-first">
              <AnimatedImage
                imagePath="/images/maize.jpg"
                position="left"
              />
              <AnimatedParagraph position="right">
                Agriculture (Backbone of the Economy)

Crop farming:

Maize (largest producer in Kenya)

Wheat, barley, beans, potatoes, vegetables

Cash crops:

Sunflower, pyrethrum, canola

Horticulture:

Fruits and vegetables for local and export markets

2. Livestock Farming

Dairy farming (leading milk producer in Rift Valley).

Beef cattle, sheep, goats, and poultry.

Apiculture (beekeeping) and pig farming (smaller scale).

3. Agro-Processing & Manufacturing

Flour milling (maize & wheat).

Milk processing (dairy plants, chilling centers).

Breweries (barley farming supports beer production).

Animal feeds production.

Agro-based industries in Eldoret town (e.g., Rivatex for textiles).

4. Trade & Commerce

Eldoret town is a commercial hub of the North Rift.

Wholesale and retail trade in agricultural produce, household goods, and construction materials.

Growing real estate & construction sector due to urbanization.

5. Transport & Logistics

Eldoret is a major transport hub, serving northern Kenya, Uganda, South Sudan, and DRC.

Eldoret International Airport supports cargo and passenger flights.

Long-distance trucking and distribution industries thrive.

6. Education & Research

Hosts major institutions: Moi University, University of Eldoret, Eldoret Polytechnic, medical training colleges.

Research centers in agriculture and health.

Education contributes significantly to local economy (student population, rentals, services).

7. Sports & Athletics

Eldoret is called the “Home of Champions”, producing world-class athletes (e.g., Kipchoge Keino, Eliud Kipchoge).

Sports training, events, and athletics tourism boost the economy.

8. Tourism & Hospitality

Sports tourism (athletics training camps).

Scenic attractions: Kerio Valley viewpoint, Kipkaren River, Chepkiit Waterfalls.

Hotels, lodges, and cultural tourism around Eldoret and rural areas.

9. Financial & Professional Services

Eldoret hosts branches of major banks, SACCOs, and microfinance institutions.

Professional services (law, ICT, medicine, accounting) are expanding with urban growth.
              </AnimatedParagraph>
             
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

export default Home;
