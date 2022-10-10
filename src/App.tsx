import React, { useEffect } from 'react';
import { HomePage } from "../Components/HomePage";

import "./App.less";

function App() {

  useEffect(() => {
    window.onmousemove = function(event: any){
        const { clientX, clientY } = event;
        const mouseTrakcer: any = document.getElementById("MouseTracker");
        if (getComputedStyle(event.target).cursor === "pointer") {
          mouseTrakcer.classList.add("small");
        } else {
          mouseTrakcer.classList.remove("small");
        }
        mouseTrakcer.style.transform = `translate(${clientX - 6}px, ${clientY - 8}px)`;
    }
  }, []);

  return (
    <>
      <div id="MouseTracker"></div>
      <div className="app">
        <HomePage />
      </div>
    </>
  );
}

export default App;
