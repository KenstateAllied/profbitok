import React, { useState, useEffect } from "react";
import { Nav } from "../components/Nav";
import { ProgressBar } from "react-bootstrap";
import { GetStaticProps, NextPage } from "next";

const TOTAL = 1596283;
const PROGRESSBAR_VARIANT = "success";

const PARTY_DATA = [
  {
    name: "Maize",
    votes: 352369,
  },
  {
    name: "Wheat",
    votes: 288002,
  },
  {
    name: "Dairy",
    votes: 255740,
  },
  {
    name: "Dorper & Dairy Goats",
    votes: 248243,
  },
  {
    name: "Potatoes & Vegetables",
    votes: 231325,
  },
  {
    name: "Coffee",
    votes: 109431,
  },
  {
    name: "Poultry",
    votes: 31908,
  },
  {
    name: "Barley",
    votes: 30565,
  },
  {
    name: "Beef Cattle",
    votes: 30565,
  },
  {
    name: "Horticulture",
    votes: 18135,
  },
];

const Parties: NextPage = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const callback = () => {
      setWindowWidth(window.innerWidth);
    };
    callback();
    window.addEventListener("resize", callback);

    return () => {
      window.removeEventListener("resize", callback);
    };
  });

  const isSmallScreen = () => {
    return windowWidth < 500;
  };

  return (
    <>
      <div className="page-header" id="parties-page-header">
        <Nav transparent={false} />
        <h1 className="page-heading">Kenya's Breadbasket</h1>
      </div>
      <div id="sports-page" className="page-content">
        <div className="content-wrapper">
          <h1>Main Economic Activities</h1>
          <table className="political-leaderboard">
            <tbody>
              {PARTY_DATA.map((each) => {
                let now = Math.round((each.votes / TOTAL) * 10000) / 100;

                return (
                  <tr key={each.name}>
                    <td className="political-leaderboard-cell name-cell">
                      {each.name}
                    </td>
                    {!isSmallScreen() ? (
                      <>
                        <td className="political-leaderboard-cell progress-cell">
                          <ProgressBar
                            animated
                            variant={PROGRESSBAR_VARIANT}
                            className="political-progress-bar"
                            now={now * 4.1}
                          />
                        </td>
                        <td className="political-leaderboard-cell label-cell">
                          {now}%
                        </td>
                      </>
                    ) : (
                      <td>
                        <ProgressBar
                          animated
                          variant={PROGRESSBAR_VARIANT}
                          className="political-progress-bar"
                          now={now * 4.1}
                        />
                        <div style={{ textAlign: "right" }}>{now}%</div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Parties;
