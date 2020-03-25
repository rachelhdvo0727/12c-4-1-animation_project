require("@babel/polyfill");
import { gsap } from "gsap";
import { page3 } from "./household";

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
  getSvg("svg/popup2.svg", popupSVG);
  // getSvg(svg0, placeSvg0);
  // historie  getSvg(svg1, placeSvg1);
  // døgnrytme getSvg(svg2, placeSvg2);
  getSvg("svg/household.svg", page3, globalJson);
  // arkitektur getSvg(svg4, placeSvg4);
}

async function getSvg(filename, callback, jsonData) {
  let response = await fetch(filename);
  let mySvgData = await response.text();
  callback(mySvgData, jsonData);
}

function lightBulbSVG(svg) {
  document.querySelector("#lightbulb").innerHTML = svg;
}

function popupSVG(svg) {
  document.querySelector("#popup").innerHTML = svg;
}
