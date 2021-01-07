import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div className="products">
        <h1 className="productsH">Inspiracje</h1>
        <h2 className="products__text">
          Działalność literacka i wydawnicza, sprzedaż książek i e-booków
        </h2>
        <Link
          className="wyd"
          to="//wyd-inspiracje.blogspot.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          wyd-inspiracje.blogspot.com
        </Link>
      </div>
      <Footer />
    </>
  );
}
