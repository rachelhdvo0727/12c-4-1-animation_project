"use strict";
import { sendData } from "./script";
import { gsap } from "gsap";

export function historyGlobalSVGs() {
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
  let blinking;
  blinking = gsap.to(allTheLights, {
    opacity: 0.3,
    duration: 2,
    repeat: -1,
    yoyoEase: true,
    paused: true
  });
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
  blinking.play();

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

    lightbulb.setAttribute("height", "130px");
    lightbulb.setAttribute("width", "130px");
    lightbulb.style.fill = "none";

    document.querySelector("#history-svg-bg").appendChild(lightbulb);
  }

  function popUpSVGs() {
    let popup = document.createElementNS("http://www.w3.org/2000/svg", "use");
    popup.setAttribute("href", "#globalPopUp");

    popup.setAttribute("height", "500px");
    popup.setAttribute("width", "700px");
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
    textSvg.setAttribute("y", "70px");
    textSvg.setAttribute("transform", "translate(88.6 111.65)");
    textSvg.setAttribute("font-size", "24px");
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
          "#history-svg-bg>use:nth-child(5)"
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
    selected[0].firesLightbulb.setAttribute("x", "1910px");
    selected[0].firesLightbulb.setAttribute("y", "450px");
    selected[0].firesPopup.setAttribute("x", "1945px");
    selected[0].firesPopup.setAttribute("y", "100px");

    //edison
    selected[1].edisonsLightbulb.setAttribute("x", "568px");
    selected[1].edisonsLightbulb.setAttribute("y", "1650px");
    selected[1].edisonsPopup.setAttribute("x", "600px");
    selected[1].edisonsPopup.setAttribute("y", "1300px");

    //monster
    selected[2].monstersLightbulb.setAttribute("x", "910px");
    selected[2].monstersLightbulb.setAttribute("y", "1045px");
    selected[2].monstersPopup.setAttribute("x", "950px");
    selected[2].monstersPopup.setAttribute("y", "700px");

    //the first lamp
    selected[3].firstlampsLightbulb.setAttribute("x", "1900px");
    selected[3].firstlampsLightbulb.setAttribute("y", "1350px");
    selected[3].firstlampsPopup.setAttribute("x", "1940px");
    selected[3].firstlampsPopup.setAttribute("y", "1000px");
  }

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
          blinking.pause();

          if (light === selected[0].firesLightbulb) {
            selected[0].firesPopup.classList.toggle("hide");
            document.querySelector(
              "#globalPopUp > #Layer_2 > .theText"
            ).innerHTML = data[1].popup1;
            wrapSVGsText();
            firelightOn.play();
          }
          if (light === selected[1].edisonsLightbulb) {
            selected[1].edisonsPopup.classList.toggle("hide");
            document.querySelector(
              "#globalPopUp > #Layer_2 > .theText"
            ).innerHTML = data[1].popup3;
            wrapSVGsText();
            edisonlightOn.play();
            // animateEdison();
          }
          if (light === selected[2].monstersLightbulb) {
            selected[2].monstersPopup.classList.toggle("hide");
            document.querySelector(
              "#globalPopUp > #Layer_2 > .theText"
            ).innerHTML = data[1].popup2;
            wrapSVGsText();
            monsterlightOn.play();
            //   animateMonster();
          }
          if (light === selected[3].firstlampsLightbulb) {
            selected[3].firstlampsPopup.classList.toggle("hide");
            document.querySelector(
              "#globalPopUp > #Layer_2 > .theText"
            ).innerHTML = data[1].popup4;
            wrapSVGsText();
            firstlamplightOn.play();
            //  animateFirstLamp();
          }
        });
      });
  }

  // function animateFirstLamp() {
  //   const lamp = document.querySelector("#history-svg-bg > use:nth-child(14)");
  //   gsap.to(lamp, {
  //     filter: "drop-shadow(15px 15px 50px #f2d94a)",
  //     duration: 2,
  //     yoyo: true
  //   });
  // }

  // function animateEdison() {
  //   const edison = document.querySelector(
  //     "#history-svg-bg > use:nth-child(12)"
  //   );
  //   gsap.to(edison, {
  //     transform: "translateX(50px)",
  //     duration: 1.5,
  //     ease: "elastic"
  //   });
  // }

  // function animateMonster() {
  //   const monster = document.querySelector(
  //     "#history-svg-bg > use:nth-child(13)"
  //   );
  //   gsap.to(
  //     monster,
  //     {
  //       stagger: {
  //         from: "random",
  //         ease: "power3.inOut"
  //       },
  //       y: 50,
  //       yoyo: true,
  //       repeat: -1
  //     },
  //     "+=1"
  //   );
  // }
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
    console.log(figure);
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

    lamp.setAttributeNS(null, "x", "1500px");
    lamp.setAttributeNS(null, "y", "1000px");
    lamp.setAttributeNS(null, "height", "500px");
    lamp.setAttributeNS(null, "width", "500px");

    document.querySelector("#history-svg-bg").appendChild(lamp);
  }
}
