import React, { useEffect } from "react";
import { Logo } from "../Icons";
import { ButtonAnimation } from "../../Animations";

export const Navbar = () => {

  useEffect(() => {
    ButtonAnimation(".BookButton");
  }, [])

  return (
    <div className="HeaderContainer" >
        <a className="HeaderContainerLogo" href="#">
          <Logo />
        </a>
        <div className="HeaderContainerUrls">
            <a>Why Potion</a>
            <a>Pricing</a>
            <a>Integrations</a>
            <a>FAQs</a>
        </div>
        <div className="HeaderContainerRight">
          <a className="LogIn">
            <span>Log in</span>
          </a>
          <a className="BookButton">
              <span className="bg-h"></span>
              <span className="bg-h"></span>
              <span id="text">book a demo</span>
          </a>
        </div>
    </div>
  )
}
