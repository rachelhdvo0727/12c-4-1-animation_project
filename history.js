"use strict";
export function historyGlobalSVGs() {
  popUpWindow();
  popUpLight();
  demonSVG();

  function popUpWindow() {
    let popup = document.createElementNS("http://www.w3.org/2000/svg", "use");
    popup.setAttribute("href", "#globalPopUp");

    popup.setAttribute("x", "1845px");
    popup.setAttribute("y", "100px");
    popup.setAttribute("height", "500px");
    popup.setAttribute("width", "700px");

    document.querySelector("#history-svg-bg").appendChild(popup);
  }
  function popUpLight() {
    let lightbulb = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );
    lightbulb.setAttribute("href", "#globalLightBulb");

    lightbulb.setAttribute("x", "1800px");
    lightbulb.setAttribute("y", "400px");
    lightbulb.setAttribute("height", "130px");
    lightbulb.setAttribute("width", "130px");

    document.querySelector("#history-svg-bg").appendChild(lightbulb);
  }
  function demonSVG() {
    let demon = document.createElementNS("http://www.w3.org/2000/svg", "use");
    demon.setAttribute("href", "#demon-svg");

    demon.setAttribute("x", "1800px");
    demon.setAttribute("y", "700px");
    demon.setAttribute("height", "130px");
    demon.setAttribute("width", "130px");

    document.querySelector("#history-svg-bg").appendChild(demon);
  }
}
