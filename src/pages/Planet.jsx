import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import styles from "./planet.module.scss";

export default function Planet() {
  const { name, menu } = useParams();

  const planetData = data.find(
    (planet) => planet.name.toLowerCase() === name.toLowerCase()
  );

  console.log(planetData.images.planet);
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
            <div className={styles.imgWrapper}>
            <img
              src={
                menu === "overview"
                  ? planetData.images.planet
                  : menu === "structure"
                  ? planetData.images.internal
                  : menu === "surface"
                  ? planetData.images.geology
                  : null
              }
              alt={`${planetData.name} planet`}
            />
            </div>

            <div className={styles.nameDescription}>
              <h1 className={styles.name}>{planetData.name}</h1>
              <p className={styles.description}>{content}</p>
              <span>
                Source:{" "}
                <a
                  href={
                    menu === "surface"
                      ? planetData["geology"]?.source
                      : planetData[menu]?.source
                  }
                >
                  Wikipedia{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                  >
                    <path
                      fill="#FFF"
                      d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                      opacity=".5"
                    />
                  </svg>
                </a>
              </span>
            </div>

            <div className={styles.basicInfo}>
              <div className={styles.Component}>
                <h2>ROTATION TIME</h2>
                <span>{planetData.rotation}</span>
              </div>

              <div className={styles.Component}>
                <h2>REVOLUTION TIME</h2>
                <span>{planetData.revolution}</span>
              </div>

              <div className={styles.Component}>
                <h2>RADIUS</h2>
                <span>{planetData.radius}</span>
              </div>

              <div className={styles.Component}>
                <h2>AVERAGE TEMP.</h2>
                <span>{planetData.temperature}</span>
              </div>

            </div>
          </div>
        ) : (
          <p>Planet not found</p>
        )}
      </div>
    </>
  );
}
