require("@babel/polyfill");
import { gsap } from "gsap";
import { frontpage } from "./frontpage";

import { sleepPatterns } from "./sleep_patterns";
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
  getSvg("svg/dark-themed-lightbulb.svg", lightBulbDarkSVG);
  getSvg("svg/info_popup.svg", popupSVG);
  frontpage();
  // historie  getSvg(svg1, placeSvg1);
  getSvg("svg/sleep_patterns.svg", sleep);
  // husholdning getSvg(svg3, placeSvg3);
  // arkitektur getSvg(svg4, placeSvg4);
}

function sleep(svg) {
  sleepPatterns(svg, globalJson);
}
async function getSvg(filename, callback) {
  let response = await fetch(filename);
  let mySvgData = await response.text();
  callback(mySvgData);
}

function lightBulbSVG(svg) {
  document.querySelector("#lightbulb").innerHTML = svg;
  // document.querySelector("#lightbulb1").innerHTML = svg;
  // document.querySelector("#lightbulb2").innerHTML = svg;
}

function lightBulbDarkSVG(svg) {
  document.querySelector("#lightbulbDark").innerHTML = svg;
}

function popupSVG(svg) {
  document.querySelector("#popup").innerHTML = svg;
  document.querySelector("#template_infobox").innerHTML = svg;
}
