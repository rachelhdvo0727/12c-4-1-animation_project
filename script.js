require("@babel/polyfill");
import { gsap } from "gsap";
import { historyGlobalSVGs } from "./history";

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
  // getSvg(svg0, placeSvg0);

  // historie
  getSvg("svg/history-bg.svg", historyBgSVG);
  getSvg("svg/edison-ny.svg", edisonSVG);
  getSvg("svg/uhyre-ny.svg", monsterSVG);
  getSvg("svg/paere-ny.svg", firstlampSVG);

  // døgnrytme getSvg(svg2, placeSvg2);
  // husholdning getSvg(svg3, placeSvg3);
  // arkitektur getSvg(svg4, placeSvg4);
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

function historyBgSVG(svg) {
  document.querySelector("#page1 > #history-bg").innerHTML = svg;
  historyGlobalSVGs();
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
