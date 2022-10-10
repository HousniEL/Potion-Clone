import React from 'react';
import { Drawing } from "../Icons";
import { Content } from "./Content/Content";

export const FirstSection = () => {
  return (
    <header className="FirstSection">
        <div className="FirstSectionMask"></div>
        <div className="FirstSectionLine">
            <Drawing />
        </div>
        <div className="FirstSectionContent">
          <Content />
        </div>
    </header>
  )
}
