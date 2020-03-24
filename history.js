"use strict";
export function historyGlobalSVGs() {
  popUpWindow();
  popUpLight();
  edisonSvg();
  demonSvg();
  firstlampSvg();

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

  function edisonSvg() {
    let figure = document.createElementNS("http://www.w3.org/2000/svg", "use");
    figure.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "svg/edison-ny.svg#edison"
    );

    figure.setAttributeNS(null, "x", "150px");
    figure.setAttributeNS(null, "y", "1400px");
    figure.setAttributeNS(null, "height", "500px");
    figure.setAttributeNS(null, "width", "500px");

    document.querySelector("#history-svg-bg").appendChild(figure);
  }

  function demonSvg() {
    let demon = document.createElementNS("http://www.w3.org/2000/svg", "use");
    demon.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "svg/uhyre-ny.svg#demon"
    );

    demon.setAttributeNS(null, "x", "1500px");
    demon.setAttributeNS(null, "y", "800px");
    demon.setAttributeNS(null, "height", "500px");
    demon.setAttributeNS(null, "width", "500px");

    document.querySelector("#history-svg-bg").appendChild(demon);
  }

  function firstlampSvg() {
    let lamp = document.createElementNS("http://www.w3.org/2000/svg", "use");
    lamp.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "svg/paere-ny.svg#firstlamp"
    );

    lamp.setAttributeNS(null, "x", "1500px");
    lamp.setAttributeNS(null, "y", "800px");
    lamp.setAttributeNS(null, "height", "500px");
    lamp.setAttributeNS(null, "width", "500px");

    document.querySelector("#history-svg-bg").appendChild(lamp);
  }
}
