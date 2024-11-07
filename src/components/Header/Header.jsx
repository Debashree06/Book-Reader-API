import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book of choice.
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            "Every page a world untold, Whispers of stories, young and old. Ink
            and paper, hearts align, A journey vast, beyond the spine. Turn the
            page, let dreams take flight, In every word, a world of light."
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
