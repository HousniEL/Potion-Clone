import React from "react";
import { Navbar } from "../Navbar";
import { FirstSection } from "../FirstSection";

export const HomePage = () => {
  return (
    <>
        <Navbar />
        <div className="layout" role={"main"} >
          <div className="scroll-content">
            <FirstSection />
          </div>
        </div>
    </>
  )
}
