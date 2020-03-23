require("@babel/polyfill");
// import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", start);

let globalJson;

function start() {
  console.log("Hej");
  getJson();
}

async function getJson() {
  let jsonData = await fetch("data.json");
  globalJson = await jsonData.json();
  getSvg("svg/lightbulb.svg", lightBulbSVG);
  getSvg("svg/popup.svg", popupSVG);
  // getSvg(svg1, placeSvg1);
  // getSvg(svg2, placeSvg2);
  // getSvg(svg3, placeSvg3);
  // getSvg(svg4, placeSvg4);
}

async function getSvg(filename, callback) {
  let response = await fetch(filename);
  let mySvgData = await response.text();
  callback(mySvgData);
}

function lightBulbSVG(svg) {
  document.querySelector("#lightbulb").innerHTML = svg;
}

function popupSVG(svg) {
  document.querySelector("#popup").innerHTML = svg;
}
