import React from "react";
import "../../App.css";
import Footer from "../Footer";

export default function Services() {
  return (
    <>
      <div className="services">
        <h1 className="servicesH">Proza</h1>
        <h2 className="services__text">książki:</h2>
        <ul className="books">
          <li>„Wyspa Zagubionych Snów‟</li>
          <li>„Zimne słońca nie gasną‟</li>
          <li>„Laary ze Szmaragdowego Wybrzeża‟</li>
          <li>„Imperium blasku‟</li>
          <li>„Deszcz gwiazd‟</li>
          <li>„Kiram utracony‟</li>
          <li>„Cicha inwazja‟</li>
          <li>„Luvania płonie‟</li>
          <li>„Zamki na piasku‟</li>
          <li>„Córka słońca‟</li>
          <li>„Vaira‟</li>
          <li>„Wieża Zapomnienia‟</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
