"use strict";
//TODO: show modal
//TODO: get text for modal
import { sendData } from "./script";

export function historyGlobalSVGs() {
  createModalsandLights();
  edisonSvg();
  demonSvg();
  firstlampSvg();

  function createModalsandLights() {
    for (let i = 0; i < 4; i++) {
      console.log("create Modals and Lights");
      popUpWindow();
      popUpLight();
    }
    placeModalsandLights();
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

  function popUpWindow() {
    let popup = document.createElementNS("http://www.w3.org/2000/svg", "use");
    popup.setAttribute("href", "#globalPopUp");

    popup.setAttribute("height", "500px");
    popup.setAttribute("width", "700px");
    //popup.classList.add("hide");

    document.querySelector("#history-svg-bg").appendChild(popup);
  }

  function placeModalsandLights() {
    console.log("placing modals and lights");
    //all lights
    //fire
    document
      .querySelector("#history-svg-bg>use:nth-child(5)")
      .setAttribute("x", "1910px");
    document
      .querySelector("#history-svg-bg > use:nth-child(5)")
      .setAttribute("y", "450px");
    //edison
    document
      .querySelector("#history-svg-bg > use:nth-child(7)")
      .setAttribute("x", "568px");
    document
      .querySelector("#history-svg-bg > use:nth-child(7)")
      .setAttribute("y", "1650px");

    //monster
    document
      .querySelector("#history-svg-bg > use:nth-child(9)")
      .setAttribute("x", "910px");
    document
      .querySelector("#history-svg-bg > use:nth-child(9)")
      .setAttribute("y", "1045px");

    //the first lamp
    document
      .querySelector("#history-svg-bg > use:nth-child(11)")
      .setAttribute("x", "2120px");
    document
      .querySelector("#history-svg-bg > use:nth-child(11)")
      .setAttribute("y", "1350px");

    //all modals
    document
      .querySelector("#history-svg-bg > use:nth-child(4)")
      .setAttribute("x", "1945px");
    document
      .querySelector("#history-svg-bg > use:nth-child(4)")
      .setAttribute("y", "100px");
    document
      .querySelector("#history-svg-bg > use:nth-child(6)")
      .setAttribute("x", "600px");
    document
      .querySelector("#history-svg-bg > use:nth-child(6)")
      .setAttribute("y", "1300px");
    document
      .querySelector("#history-svg-bg > use:nth-child(8)")
      .setAttribute("x", "950px");
    document
      .querySelector("#history-svg-bg > use:nth-child(8)")
      .setAttribute("y", "700px");

    //the first lamp
    document
      .querySelector("#history-svg-bg > use:nth-child(10)")
      .setAttribute("x", "2150px");
    document
      .querySelector("#history-svg-bg > use:nth-child(10)")
      .setAttribute("y", "1000px");
  }

  function clickLightBulb() {
    console.log("clickLightBulb");
    document
      .querySelectorAll(
        "use:nth-child(5), use:nth-child(7), use:nth-child(9), use:nth-child(11)"
      )
      .forEach(light => {
        console.log("events");
        light.addEventListener("click", function() {
          showModals();
          console.log("clicked");
          light.classList.toggle("clone");
        });
      });
  }

  function showModals() {
    document
      .querySelectorAll(
        "use:nth-child(5), use:nth-child(7), use:nth-child(9), use:nth-child(11)"
      )
      .forEach(elm => {
        console.log("toggle");
        elm.classList.toggle("hide");
      });
  }
  function showModalsText() {
    console.log("showModalsText");

    //save data fra script.js
    let data = sendData();
    console.log(data);

    //create a <text> in svg
    let textSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );

    textSvg.setAttribute("transform", "translate(88.6 111.65)");
    textSvg.setAttribute("text-anchor", "start");
    textSvg.classList.add("theText");

    document.querySelector("#globalPopUp > #Layer_2").appendChild(textSvg);

    //append text in svg
    data.forEach(text => {
      textSvg.innerHTML = `${text.popup1}`;
    });
    d3plus
      .textwrap()
      .container(d3.select(".theText"))
      .draw();
    d3plus
      .textwrap()
      .container(d3.select(".theText"))
      .resize(true)
      .draw();
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
}
