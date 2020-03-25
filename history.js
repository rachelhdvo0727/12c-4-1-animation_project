"use strict";
//TODO: show modal
//TODO: get text for modal
export function historyGlobalSVGs() {
  //popUpWindow();
  createlightbulbs();
  edisonSvg();
  demonSvg();
  firstlampSvg();

  // function popUpWindow() {
  //   let popup = document.createElementNS("http://www.w3.org/2000/svg", "use");
  //   popup.setAttribute("href", "#globalPopUp");

  //   popup.setAttribute("x", "1845px");
  //   popup.setAttribute("y", "100px");
  //   popup.setAttribute("height", "500px");
  //   popup.setAttribute("width", "700px");

  //   document.querySelector("#history-svg-bg").appendChild(popup);
  // }
  function createlightbulbs() {
    for (let i = 0; i < 4; i++) {
      console.log("createlightbulbs");
      popUpLight();
    }
    positioning();
    clickLightBulb();
  }

  function popUpLight() {
    let lightbulb = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );
    lightbulb.setAttribute("href", "#globalLightBulb");

    lightbulb.setAttribute("height", "130px");
    lightbulb.setAttribute("width", "130px");

    document.querySelector("#history-svg-bg").appendChild(lightbulb);
  }

  function positioning() {
    //ilds pære
    document
      .querySelector("#history-svg-bg > use:nth-child(4)")
      .setAttribute("x", "1800px");
    document
      .querySelector("#history-svg-bg > use:nth-child(4)")
      .setAttribute("y", "400px");

    //edisons pære
    document
      .querySelector("#history-svg-bg > use:nth-child(5)")
      .setAttribute("x", "480px");
    document
      .querySelector("#history-svg-bg > use:nth-child(5)")
      .setAttribute("y", "1400px");

    //uhyres pære
    document
      .querySelector("#history-svg-bg > use:nth-child(6)")
      .setAttribute("x", "850px");
    document
      .querySelector("#history-svg-bg > use:nth-child(6)")
      .setAttribute("y", "700px");

    //firstlamps pære
    document
      .querySelector("#history-svg-bg > use:nth-child(7)")
      .setAttribute("x", "2050px");
    document
      .querySelector("#history-svg-bg > use:nth-child(7)")
      .setAttribute("y", "1000px");
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

    demon.setAttributeNS(null, "x", "500px");
    demon.setAttributeNS(null, "y", "600px");
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

    lamp.setAttributeNS(null, "x", "1700px");
    lamp.setAttributeNS(null, "y", "1000px");
    lamp.setAttributeNS(null, "height", "500px");
    lamp.setAttributeNS(null, "width", "500px");

    document.querySelector("#history-svg-bg").appendChild(lamp);
  }

  function clickLightBulb() {
    console.log("clickLightBulb");

    document
      .querySelectorAll(
        "use:nth-child(4), use:nth-child(5), use:nth-child(6), use:nth-child(7)"
      )
      .forEach(light => {
        console.log("events");
        light.addEventListener("click", function() {
          console.log("clicked");
          light.classList.toggle("clone");
        });
      });
  }
}
