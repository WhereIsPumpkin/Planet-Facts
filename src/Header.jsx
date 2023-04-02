import React, { useState } from "react";import data from "./data.json";
import styles from "./header.module.scss"
import arrow from "./assets/icon-chevron.svg"
import { Link, Route, Routes } from "react-router-dom";



export default function Header() {

  const [showMenu, setShowMenu] = useState(false);
  
  const planetColors = {
    mercury: '#DEF4FC',
    venus: '#F7CC7F',
    earth: '#545BFE',
    mars: '#FF6A45',
    jupiter: '#ECAD7A',
    saturn: '#FCCB6B',
    uranus: '#65F0D5',
    neptune: '#497EFA'
  };

  return (
    <>

      <header>
        <h1>THE PLANETS</h1>

        <div className={styles.menuIcon} onClick={() => setShowMenu(!showMenu)} style={{ opacity: showMenu ? 0.2 : 1 }}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
        
      </header>

      {showMenu && (
        <ul className={styles.menuPop} >
        {data.map((planet) => (
          <li key={planet.name}>
            <Link to={`/planets/${planet.name.toLowerCase()}`}>
              <div className={styles.wrapperLi}>
                <div className={styles.circle} style={{ backgroundColor: planetColors[planet.name.toLowerCase()] }}></div>
                {planet.name}
              </div>
              <img src={arrow} alt="arrowChevron" />
            </Link>
          </li>
        ))}
      </ul>
      )}

    </>
  );

}
