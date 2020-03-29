require("@babel/polyfill");
import { gsap } from "gsap";
import { frontpageHandler } from "./frontpage";
import { historyHandler } from "./history";
import { page3Handler } from "./household";
import { page4Handler } from "./archi";
import { sleepPatterns } from "./sleep_patterns";
document.addEventListener("DOMContentLoaded", start);

let globalJson;
const frontpage = document.querySelector("#frontpage").getBoundingClientRect();

function start() {
  console.log(frontpage.x);
  document.querySelector(".wrapper-horizontal").scrollTo(frontpage.x, 0);
  document.querySelector(".wrapper-vertical").scrollTo(0, frontpage.y);
  console.log("Hej");
  getJson();
  getArrows("0", "0", "useArrow1", "arrow1");
  getArrows("0", "0", "useArrow2", "arrow2");
  getArrows("0", "0", "useArrow3", "arrow3");
  getArrows("0", "0", "useArrow4", "arrow4");

  document
    .querySelector(".wrapper-vertical")
    .addEventListener("scroll", scrollingVertical);
  document
    .querySelector(".wrapper-horizontal")
    .addEventListener("scroll", scrollingHorizontal);
}

function clickedArrow() {
  const page1 = document.querySelector("#page1").getBoundingClientRect();
  const page2 = document.querySelector("#page2").getBoundingClientRect();
  const page3 = document.querySelector("#page3").getBoundingClientRect();
  const page4 = document.querySelector("#page4").getBoundingClientRect();
  if (this == document.querySelector("#arrow1")) {
    console.log("arrow1!");
    console.log(page4.y);
    console.log(page4.x);
    document.querySelector(".wrapper-vertical").scrollBy(page3.x, page3.y);
    document.querySelectorAll(".arrow").forEach(elm => {
      elm.removeEventListener("click", clickedArrow);
    });
  }

  if (this == document.querySelector("#arrow2")) {
    console.log("arrow1!");
    console.log(page2.y);
    console.log(page2.x);
    document.querySelector(".wrapper-horizontal").scrollBy(page2.x, page2.y);
  }

  if (this == document.querySelector("#arrow3")) {
    console.log("arrow1!");
    console.log(page1.y);
    console.log(page1.x);
    document.querySelector(".wrapper-vertical").scrollBy(page4.x, page4.y);
  }

  if (this == document.querySelector("#arrow4")) {
    console.log("arrow1!");
    console.log(page1.y);
    console.log(page1.x);
    document.querySelector(".wrapper-horizontal").scrollBy(page1.x, page1.y);
  }
}
function scrollingHorizontal() {
  document.querySelectorAll(".arrow").forEach(elm => {
    elm.removeEventListener("click", clickedArrow);
  });
  const frontpageHorizontal = document
    .querySelector("#frontpage")
    .getBoundingClientRect();
  const page1Horizontal = document
    .querySelector("#page1")
    .getBoundingClientRect();
  const page2Horizontal = document
    .querySelector("#page2")
    .getBoundingClientRect();

  if (inView(frontpageHorizontal)) {
    document.querySelectorAll(".arrow").forEach(elm => {
      elm.addEventListener("click", clickedArrow);
    });

    console.log("in view!");
    document.querySelectorAll(".arrow").forEach(elm => {
      elm.style.zIndex = "100";
    });
    document.querySelectorAll(".arrowline").forEach(elm => {
      elm.style.stroke = "#333a4d";
    });
  }
  if (inView(page1Horizontal)) {
    console.log("in view!");
    document.querySelector("#arrow2").addEventListener("click", arrow2Click);
    function arrow2Click() {
      console.log("frontpage scroll");
      document
        .querySelector(".wrapper-horizontal")
        .scrollBy(frontpageHorizontal.x, frontpageHorizontal.y);
      document
        .querySelector("#arrow2")
        .removeEventListener("click", arrow2Click);
    }
    document.querySelectorAll(".arrow").forEach(elm => {
      elm.style.zIndex = "-100";
    });
    document.querySelector("#arrow2").style.zIndex = "1000";
    document.querySelectorAll(".arrowline").forEach(elm => {
      elm.style.stroke = "#333a4d";
    });
  }

  if (inView(page2Horizontal)) {
    console.log("page 2in view!");
    document.querySelector("#arrow4").addEventListener("click", arrow4Click);
    function arrow4Click() {
      console.log("frontpage scroll");
      document
        .querySelector(".wrapper-horizontal")
        .scrollBy(frontpageHorizontal.x, frontpageHorizontal.y);
      document
        .querySelector("#arrow4")
        .removeEventListener("click", arrow4Click);
    }
    document.querySelectorAll(".arrow").forEach(elm => {
      elm.style.zIndex = "-100";
    });
    document.querySelector("#arrow4").style.zIndex = "8000";
    document.querySelectorAll(".arrowline").forEach(elm => {
      elm.style.stroke = "#e2d7c4";
    });
  }
}
function scrollingVertical() {
  document.querySelectorAll(".arrow").forEach(elm => {
    elm.removeEventListener("click", clickedArrow);
  });
  const frontpageVertical = document
    .querySelector("#frontpage")
    .getBoundingClientRect();
  const page3Vertical = document
    .querySelector("#page3")
    .getBoundingClientRect();
  const page4Vertical = document
    .querySelector("#page4")
    .getBoundingClientRect();

  if (inView(frontpageVertical)) {
    document.querySelectorAll(".arrow").forEach(elm => {
      elm.addEventListener("click", clickedArrow);
    });

    console.log("in view!");
    document.querySelector(".wrapper-horizontal").style.overflowX = "scroll";
    document.querySelectorAll(".arrow").forEach(elm => {
      elm.style.zIndex = "100";
    });
  }

  if (inView(page4Vertical)) {
    document.querySelector("#arrow1").addEventListener("click", arrow1Click);
    function arrow1Click() {
      console.log("frontpage scroll");
      document
        .querySelector(".wrapper-vertical")
        .scrollBy(frontpageVertical.x, frontpageVertical.y);
      document
        .querySelector("#arrow1")
        .removeEventListener("click", arrow1Click);
    }

    console.log("in view!");
    document.querySelector(".wrapper-horizontal").style.overflow = "hidden";
    document.querySelectorAll(".arrow").forEach(elm => {
      elm.style.zIndex = "-100";
    });
    document.querySelector("#arrow1").style.zIndex = "1000";
  }

  if (inView(page3Vertical)) {
    document.querySelector("#arrow3").addEventListener("click", arrow3Click);
    function arrow3Click() {
      console.log("frontpage scroll");
      document
        .querySelector(".wrapper-vertical")
        .scrollBy(frontpageVertical.x, frontpageVertical.y);
      document
        .querySelector("#arrow3")
        .removeEventListener("click", arrow3Click);
    }
    console.log("in view!");
    document.querySelector(".wrapper-horizontal").style.overflow = "hidden";
    document.querySelectorAll(".arrow").forEach(elm => {
      elm.style.zIndex = "-100";
    });
    document.querySelector("#arrow3").style.zIndex = "1000";
  }
}

function inView(rect) {
  // FROM https://gist.github.com/davidtheclark/5515733

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
  // FROM https://gist.github.com/davidtheclark/5515733
}

async function getJson() {
  let jsonData = await fetch("data.json");
  globalJson = await jsonData.json();

  getSvg("svg/lightbulb.svg", lightBulbSVG);
  getSvg("svg/dark-themed-lightbulb.svg", lightBulbDarkSVG);

  frontpageHandler(globalJson);

  getSvg("svg/sleep_patterns.svg", sleep);
  getSvg("svg/popup.svg", popupSVG);
  getSvg("svg/popup2.svg", popupSVG);
  getSvg("svg/frontpagearrow.svg", frontpageSVG);

  // historie
  getSvg("svg/history-bg.svg", historyBgSVG);
  getSvg("svg/edison.svg", edisonSVG);
  getSvg("svg/monster.svg", monsterSVG);
  getSvg("svg/firstlamp.svg", firstlampSVG);
  sendData();
  getSvg("svg/household.svg", page3Handler, globalJson);
  getSvg("svg/arrow.svg", arrow);
  getSvg("svg/archi.svg", page4Handler, globalJson);
}

function sleep(svg) {
  sleepPatterns(svg, globalJson);
}

export function sendData() {
  return globalJson;
}

async function getSvg(filename, callback, jsonData) {
  let response = await fetch(filename);
  let mySvgData = await response.text();
  callback(mySvgData, jsonData);
}

function lightBulbSVG(svg) {
  document.querySelector("#lightbulb").innerHTML = svg;
}

function lightBulbDarkSVG(svg) {
  document.querySelector("#lightbulbDark").innerHTML = svg;
}

function popupSVG(svg) {
  document.querySelector("#popup").innerHTML = svg;
}

function arrow(svg) {
  document.querySelector("#template-arrow").innerHTML = svg;
}

function historyBgSVG(svg) {
  document.querySelector("#page1 > #history-bg").innerHTML = svg;
  historyHandler();
}

function edisonSVG(svg) {
  document.querySelector("#edison-hide").innerHTML = svg;
}

function monsterSVG(svg) {
  document.querySelector("#demon-hide").innerHTML = svg;
}

function firstlampSVG(svg) {
  document.querySelector("#firstlight-hide").innerHTML = svg;
}

function frontpageSVG(svg) {
  document.querySelector("#frontpagearrow").innerHTML = svg;
}
function getArrows(x, y, id, container) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 755 456");
  svg.id = id;
  document.querySelector("#" + container).appendChild(svg);
  let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", "#arrow");
  use.setAttribute("x", x);
  use.setAttribute("y", y);
  use.id = id;
  document.querySelector("#" + id).appendChild(use);
  arrowAnimation();
}

function arrowAnimation() {
  console.log("animation fired");
  gsap.to("#arrow1", {
    duration: 1,
    y: "10px",
    ease: "circ.out",
    repeat: -1,
    yoyo: true
  });
  gsap.to("#arrow3", {
    duration: 1,
    y: "-10px",
    ease: "sine.out",
    repeat: -1,
    yoyo: true
  });
  gsap.to("#arrow2", {
    duration: 1,
    x: "10px",
    ease: "sine.out",
    repeat: -1,
    yoyo: true
  });
  gsap.to("#arrow4", {
    duration: 1,
    x: "-10px",
    ease: "sine.out",
    repeat: -1,
    yoyo: true
  });
}
