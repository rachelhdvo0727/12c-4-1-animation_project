"use strict";
export function historyGlobalSVGs() {
  popUpWindow();
  popUpLight();
  edison();

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

  function edison() {
    let figure = document.createElementNS("http://www.w3.org/2000/svg", "use");
    figure.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','svg/edison-ny.svg#edison');

    // figure.setAttribute("xlink:href", "#edison");

    figure.setAttribute("x", "1800px");
    figure.setAttribute("y", "1000px");
    figure.setAttribute("height", "500px");
    figure.setAttribute("width", "7");

    document.querySelector("#history-svg-bg").appendChild(figure);
  }
}
