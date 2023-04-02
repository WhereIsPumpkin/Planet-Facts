import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import styles from "./planet.module.scss";

export default function Planet() {
  const { name, menu } = useParams();

  const planetData = data.find(
    (planet) => planet.name.toLowerCase() === name.toLowerCase()
  );

  let content;
  switch (menu) {
    case "overview":
      content = planetData?.overview?.content;
      break;
    case "structure":
      content = planetData?.structure?.content;
      break;
    case "surface":
      content = planetData?.geology?.content;
      break;
    default:
      content = null;
  }

  

  return (
    <>
      <nav className={styles.sideMenu}>
        <Link
          to={`/planets/${name}/overview`}
          className={`${styles.menuElement} ${
            menu === "overview" ? styles.selected : null
          }`}
        >
          OVERVIEW
        </Link>
        <Link
          to={`/planets/${name}/structure`}
          className={`${styles.menuElement} ${
            menu === "structure" ? styles.selected : null
          }`}
        >
          STRUCTURE
        </Link>
        <Link
          to={`/planets/${name}/surface`}
          className={`${styles.menuElement} ${
            menu === "surface" ? styles.selected : null
          }`}
        >
          SURFACE
        </Link>
      </nav>

      <div className={styles.mainPage}>
        {planetData ? (
          <div className={styles.infoSection}>
            <img src={menu === "surface" ? planetData.images.geology : planetData.images[menu]} alt={`${planetData.name} planet`} />

            <div className={styles.nameDescription}>
              <h1 className={styles.name}>{planetData.name}</h1>
              <p className={styles.description}>{content}</p>
              <span>Source: <a href={menu === "surface" ? planetData['geology']?.source : planetData[menu]?.source}>Wikipedia</a></span>  
            </div>
          </div>
        ) : (
          <p>Planet not found</p>
        )}
      </div>
    </>
  );
}
