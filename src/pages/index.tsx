import React from "react";
import '../css/pages/index.css';
import Image from "next/image";

export default function index() {
  return (
    <>
      <section id="s-navbar">
        <nav className="d-flex jc-space-between ai-center h-100">
          <div className="left-side">
            <Image src={'/images/navbar-brand.png'} alt="navbar-brand" width={70} height={30}/>
          </div>
          <div className="right-side d-flex jc-start ai-center">
            <button>Masuk</button>
            <button>Daftar</button>
          </div>
        </nav>
      </section>
      <section id="s-jumbotron">
        <div className="left-side">
          <h1>Rental Mobil Murah untuk Setiap Kebutuhan</h1>
        </div>
        <div className="right-side"></div>
      </section>
      <section id="s-tutorial">
        <p>Tutorial</p>
      </section>
      <section id="s-search">
        <p>Search</p>
      </section>
      <section id="s-list">
        <p>S list</p>
      </section>
      <section id="s-footer">
        <footer>
          <p>Footer</p>
        </footer>
      </section>
    </>
  );
};
