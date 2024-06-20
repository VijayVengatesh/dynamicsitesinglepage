import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import "../css/Admin.css";
import { Welcome } from "../components/Welcome";
import { Destination } from "../components/Destination";
import { LatestNews } from "../components/LatestNews";
import { Clients } from "../components/Clients";
import { Discount } from "../components/Discount";
import { Footer } from "../components/Footer";

export const Admin = () => {
  const[admin,setAdmin]=useState(true)
  return (
    <>
      {/* header */}
      <div
        className="container-fluid"
        style={{
          height: "500px",
          backgroundColor: "#dddbdb",
          position: "relative",
        }}
      >
        <Navbar />
        <div
          className="text-light text-center "
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1 className="p-1" style={{ letterSpacing: "5px" }}>
            Fuson Travel
          </h1>
          <p className="p-2 fw-bold" style={{ fontSize: "14px" }}>
            lets discover The World Together
          </p>
          <button
            className="ps-3 pe-3 rounded-pill pt-1 pb-1"
            style={{ backgroundColor: "orange", border: "none" }}
          >
            <span className="text-light" style={{ fontSize: "14px" }}>
              Plan Your Trip
            </span>
          </button>
          {admin&&<button>upload background image</button>}
        </div>
      </div>
      {/* end header */}

      {/* Welcome section */}
      <section>
        <div className="container-fluid">
          <Welcome />
        </div>
      </section>
      {/* Welcomr section end */}

      {/* destination section */}
      <section>
        <Destination/>
      </section>
      {/* destination section */}

      {/* latest news section */}
      <section >
      <LatestNews/>
      </section>
      {/* latest news section  end */}

      {/* Client section Start */}
      <section>
        <Clients/>
      </section>
      {/* Client section Start end */}

      {/* Discount section Start */}
      <section>
      <Discount/>
      </section>
      {/* Discount section Start end*/}

      {/* footer Section Start */}
          <section>
            <Footer/>
          </section>
      {/* footer section end */}
    </>
  );
};
