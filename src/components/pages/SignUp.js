import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="sign-up">
        <h1 className="sign-upH">BLOG</h1>
        <Link
          className="wyd"
          to="//mojeinspiracje2017.blogspot.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          mojeinspiracje2017.blogspot.com
        </Link>
      </div>
      <Footer />
    </>
  );
}
