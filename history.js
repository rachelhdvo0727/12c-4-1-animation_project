"use strict";
import { sendData } from "./script";
import { gsap } from "gsap";

export function historyHandler() {
  //save data fra script.js
  let data = sendData();
  let selected = [];

  createModalsandLights();
  edisonSvg();
  demonSvg();
  firstlampSvg();

  //ANIMATIONS TO ALL LIGHT BULBS

  const allTheLights = [
    selected[0].firesLightbulb,
    selected[1].edisonsLightbulb,
    selected[2].monstersLightbulb,
    selected[3].firstlampsLightbulb
  ];

  let scaling = gsap.timeline({ repeat: -1 });
  scaling.to(allTheLights, { scale: 1.03, duration: 1 });
  scaling.to(allTheLights, { scale: 1, duration: 1 });

  let firelightOn = gsap.to(allTheLights[0], {
    filter: "drop-shadow(5px 5px 20px #f2d94a)",
    opacity: 1,
    duration: 0.5,
    paused: true
  });
  let edisonlightOn = gsap.to(allTheLights[1], {
    filter: "drop-shadow(5px 5px 20px #f2d94a)",
    opacity: 1,
    duration: 0.5,
    paused: true
  });
  let monsterlightOn = gsap.to(allTheLights[2], {
    filter: "drop-shadow(5px 5px 20px #f2d94a)",
    opacity: 1,
    duration: 0.5,
    paused: true
  });
  let firstlamplightOn = gsap.to(allTheLights[3], {
    filter: "drop-shadow(5px 5px 20px #f2d94a)",
    opacity: 1,
    duration: 0.5,
    paused: true
  });

  firelightOn.pause();
  edisonlightOn.pause();
  monsterlightOn.pause();
  firstlamplightOn.pause();

  //ANIMATIONS TO MAIN ELEMENTS
  const lamp = document.querySelector("#history-svg-bg > use:nth-child(14)");
  let lampAnimation = gsap.to(lamp, {
    filter: "drop-shadow(15px 15px 50px #f2d94a)",
    duration: 2,
    yoyo: true,
    paused: true
  });

  const edison = document.querySelector("#history-svg-bg > use:nth-child(12)");
  let edisonAnimation = gsap.to(edison, {
    transform: "translateX(50px)",
    duration: 1.5,
    ease: "elastic",
    paused: true
  });

  const monster = document.querySelector("#history-svg-bg > use:nth-child(13)");
  let monsterAnimation = gsap.to(
    monster,
    {
      stagger: {
        from: "random",
        ease: "power3.inOut"
      },
      y: 50,
      yoyo: true,
      repeat: -1,
      paused: true
    },
    "+=1"
  );
  lampAnimation.pause();
  monsterAnimation.pause();
  edisonAnimation.pause();

  function clickLightBulb() {
    console.log("clickLightBulb");
    createTexttags();
    document
      .querySelectorAll(
        "use:nth-child(5), use:nth-child(7), use:nth-child(9), use:nth-child(11)"
      )
      .forEach(light => {
        light.addEventListener("click", function() {
          console.log("clicked");
          light.classList.toggle("clone");

          if (light.classList.contains("clone")) {
            scaling.pause();
            if (light === selected[0].firesLightbulb) {
              selected[0].firesPopup.classList.remove("hide");
              document.querySelector(
                "#globalPopUp > #Layer_2 > .theText"
              ).innerHTML = data[1].popup1;
              wrapSVGsText();
              firelightOn.play();
            } else {
              selected[0].firesPopup.classList.add("hide");
              firelightOn.pause();
            }

            if (light === selected[1].edisonsLightbulb) {
              selected[1].edisonsPopup.classList.remove("hide");
              document.querySelector(
                "#globalPopUp > #Layer_2 > .theText"
              ).innerHTML = data[1].popup3;
              wrapSVGsText();
              edisonlightOn.play();
              edisonAnimation.play();
            } else {
              selected[1].edisonsPopup.classList.add("hide");
              edisonlightOn.pause();
              edisonAnimation.pause();
            }

            if (light === selected[2].monstersLightbulb) {
              selected[2].monstersPopup.classList.remove("hide");
              document.querySelector(
                "#globalPopUp > #Layer_2 > .theText"
              ).innerHTML = data[1].popup2;
              wrapSVGsText();
              monsterlightOn.play();
              monsterAnimation.play();
            } else {
              selected[2].monstersPopup.classList.add("hide");
              monsterlightOn.pause();
              monsterAnimation.pause();
            }

            if (light === selected[3].firstlampsLightbulb) {
              selected[3].firstlampsPopup.classList.remove("hide");
              document.querySelector(
                "#globalPopUp > #Layer_2 > .theText"
              ).innerHTML = data[1].popup4;
              wrapSVGsText();
              firstlamplightOn.play();
              lampAnimation.play();
            } else {
              selected[3].firstlampsPopup.classList.add("hide");
              firstlamplightOn.pause();
              lampAnimation.pause();
            }
          } else {
            selected[0].firesPopup.classList.add("hide");
            selected[1].edisonsPopup.classList.add("hide");
            selected[2].monstersPopup.classList.add("hide");
            selected[3].firstlampsPopup.classList.add("hide");
            lampAnimation.pause();
            monsterAnimation.pause();
            edisonAnimation.pause();

            scaling.play();
            firstlamplightOn.pause();
            monsterlightOn.pause();
            edisonAnimation.pause();
            firelightOn.pause();
          }

          light.removeEventListener("click", clickLightBulb);
        });
      });
  }
  function createModalsandLights() {
    for (let i = 0; i < 4; i++) {
      console.log("create Modals and Lights");
      popUpSVGs();
      lightbulbSVGs();
    }
    placeModalsandLights();
    clickLightBulb();
  }
  function lightbulbSVGs() {
    let lightbulb = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "use"
    );
    lightbulb.setAttribute("href", "#globalLightBulb");

    lightbulb.setAttribute("height", "150px");
    lightbulb.setAttribute("width", "150px");

    document.querySelector("#history-svg-bg").appendChild(lightbulb);
  }

  function popUpSVGs() {
    let popup = document.createElementNS("http://www.w3.org/2000/svg", "use");
    popup.setAttribute("href", "#globalPopUp");

    popup.setAttribute("height", "0");
    popup.setAttribute("width", "0");
    popup.classList.add("hide");

    document.querySelector("#history-svg-bg").appendChild(popup);
  }

  function createTexttags() {
    console.log("showModalsText");
    let textSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    textSvg.setAttribute("x", "100px");
    textSvg.setAttribute("y", "50px");
    textSvg.classList.add("theText");

    document.querySelector("#globalPopUp > #Layer_2").appendChild(textSvg);
  }

  function placeModalsandLights() {
    console.log("placing modals and lights");
    selected = [
      {
        firesPopup: document.querySelector(
          "#history-svg-bg > use:nth-child(4)"
        ),
        firesLightbulb: document.querySelector(
          "#history-svg-bg> use:nth-child(5)"
        )
      },
      {
        edisonsPopup: document.querySelector(
          "#history-svg-bg > use:nth-child(6)"
        ),
        edisonsLightbulb: document.querySelector(
          "#history-svg-bg > use:nth-child(7)"
        )
      },
      {
        monstersPopup: document.querySelector(
          "#history-svg-bg > use:nth-child(8)"
        ),
        monstersLightbulb: document.querySelector(
          "#history-svg-bg > use:nth-child(9)"
        )
      },
      {
        firstlampsPopup: document.querySelector(
          "#history-svg-bg > use:nth-child(10)"
        ),
        firstlampsLightbulb: document.querySelector(
          "#history-svg-bg>use:nth-child(11)"
        )
      }
    ];

    //fire
    selected[0].firesLightbulb.setAttribute("x", "1900px");
    selected[0].firesLightbulb.setAttribute("y", "160px");
    selected[0].firesPopup.setAttribute("x", "1945px");
    selected[0].firesPopup.setAttribute("y", "20px");
    selected[0].firesPopup.setAttribute("height", "750px");
    selected[0].firesPopup.setAttribute("width", "750px");

    //edison
    selected[1].edisonsLightbulb.setAttribute("x", "600px");
    selected[1].edisonsLightbulb.setAttribute("y", "1810px");
    selected[1].edisonsPopup.setAttribute("x", "670px");
    selected[1].edisonsPopup.setAttribute("y", "1380px");
    selected[1].edisonsPopup.setAttribute("height", "700px");
    selected[1].edisonsPopup.setAttribute("width", "750px");

    //monster
    selected[2].monstersLightbulb.setAttribute("x", "800px");
    selected[2].monstersLightbulb.setAttribute("y", "900px");
    selected[2].monstersPopup.setAttribute("x", "800px");
    selected[2].monstersPopup.setAttribute("y", "380px");
    selected[2].monstersPopup.setAttribute("height", "700px");
    selected[2].monstersPopup.setAttribute("width", "950px");

    //the first lamp
    selected[3].firstlampsLightbulb.setAttribute("x", "1900px");
    selected[3].firstlampsLightbulb.setAttribute("y", "1490px");
    selected[3].firstlampsPopup.setAttribute("x", "1250px");
    selected[3].firstlampsPopup.setAttribute("y", "1000px");
    selected[3].firstlampsPopup.setAttribute("height", "800px");
    selected[3].firstlampsPopup.setAttribute("width", "750px");
  }
  function wrapSVGsText() {
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
    figure.setAttribute("href", "#edison");
    figure.setAttribute("x", "150px");
    figure.setAttribute("y", "1400px");
    figure.setAttribute("height", "600px");
    figure.setAttribute("width", "600px");
    document.querySelector("#history-svg-bg").appendChild(figure);
  }

  function demonSvg() {
    let demon = document.createElementNS("http://www.w3.org/2000/svg", "use");
    demon.setAttribute("href", "#monster");

    demon.setAttribute("x", "300px");
    demon.setAttribute("y", "500px");
    demon.setAttribute("height", "600px");
    demon.setAttribute("width", "600px");

    document.querySelector("#history-svg-bg").appendChild(demon);
  }

  function firstlampSvg() {
    let lamp = document.createElementNS("http://www.w3.org/2000/svg", "use");

    lamp.setAttribute("href", "#firstlamp");
    lamp.setAttribute("x", "2000px");
    lamp.setAttribute("y", "1000px");
    lamp.setAttribute("height", "700px");
    lamp.setAttribute("width", "700px");

    document.querySelector("#history-svg-bg").appendChild(lamp);
  }
}
