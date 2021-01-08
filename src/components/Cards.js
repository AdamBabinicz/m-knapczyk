import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img1 from "../images/11.jpg";
import img2 from "../images/5.jpg";
import img3 from "../images/7.jpg";
import img4 from "../images/16.jpg";
import img5 from "../images/6.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Spotkania z czytelnikami</h1>
      <div className="card__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Monika Knapczyk zaprezentowała swój tomik poezji zatytułowany „Zegar Melodii”, w którym znalazły się utwory z całego okresu twórczości."
              label="W Miejskiej Bibliotece Publicznej w dniu 25 kwietnia 2019 r."
              path="/"
            />
            <CardItem
              src={img2}
              text="15 marca 2019 r. o godz. 17.00 w Osiedlowym Domu Kultury „Amik” odbyło się spotkanie autorskie Moniki Knapczyk, poetki, pisarki i blogerki pochodzącej z Radomia, a obecnie mieszkającej w Puławach."
              label="Wieczór autorski z Moniką Knapczyk"
              path="/"
            />
            <CardItem
              src={img3}
              text="Rozmowę z Moniką Knapczyk w ramach współpracy przeprowadziła instruktor Anna Filipiak-Matras. W rolę lektorki wcieliła się uczestniczka zajęć recytatorskich z Koła Konferansjerów i Recytatorów - Anna Górska."
              label="Wieczór autorski z Moniką Knapczyk"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img4}
              text="W dniu 25 października 2018 r. odbyło się w Poniatowej k. Opola Lubelskiego w Miejsko-Gminnej Bibliotece Publicznej przy ul. Fabrycznej 1, kolejne spotkanie autorskie z udziałem Moniki Knapczyk, promujące obie wydane do tej pory książki."
              label="Spotkanie autorskie w Poniatowej"
              path="/"
            />
            <CardItem
              src={img5}
              text="20 marca 2018 r. o godz. 12.00 w Powiatowej Bibliotece Publicznej w Puławach odbyło się spotkanie Powiatowego Klubu Książki. Autorka, Monika Knapczyk zprezentowała wiersze ze swojego debiutanckiego tomiku pt. „Zegar melodii”."
              label="Powiatowy Klub Książki na Dzień Kobiet"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
