import React from "react";
import "../../App.css";
import Footer from "../Footer";

export default function Poetry() {
  return (
    <>
      <div className="poetry">
        <h1 className="poetryH">Poezja</h1>
        <h2 className="poetry__text">tomiki poezji:</h2>
        <ul className="books">
          <li>„Zegar melodii‟</li>
          <li>„Światłem malowane. Wybór poezji‟</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
