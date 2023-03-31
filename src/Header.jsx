import React, { useState } from "react";import data from "./data.json";
import styles from "./header.module.scss"
import arrow from "./assets/icon-chevron.svg"
import { Link, Route, Routes } from "react-router-dom";

const planetColors = {
  mercury: '#419EBB',
  venus: '#EDA249',
  earth: '#6D2ED5',
  mars: '#D14C32',
  jupiter: '#D83A34',
  saturn: '#D83A34',
  uranus: '#1EC1A2',
  neptune: '#2D68F0'
};

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header>
        <h1>THE PLANETS</h1>

        <div className={styles.menuIcon} onClick={() => setShowMenu(!showMenu)} >
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
