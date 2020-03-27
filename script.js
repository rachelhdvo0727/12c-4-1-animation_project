require("@babel/polyfill");
import { gsap } from "gsap";
import { frontpage } from "./frontpage";
import { historyGlobalSVGs } from "./history";
import { page3 } from "./household";
import { page4 } from "./archi";
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
  // getSvg("svg/info_popup.svg", popupSVG);
  frontpage();
  // historie  getSvg(svg1, placeSvg1);
  getSvg("svg/sleep_patterns.svg", sleep);
  getSvg("svg/popup.svg", popupSVG);
  getSvg("svg/popup2.svg", popupSVG);
  // getSvg(svg0, placeSvg0);

  // historie
  getSvg("svg/history-bg.svg", historyBgSVG);
  getSvg("svg/edison-ny.svg", edisonSVG);
  getSvg("svg/uhyre-ny-2.svg", monsterSVG);
  getSvg("svg/paere-ny-2.svg", firstlampSVG);
  sendData();
  getSvg("svg/household.svg", page3, globalJson);
  getSvg("svg/arrow.svg", arrow);
  getSvg("svg/archi.svg", page4, globalJson);
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
  // document.querySelector("#lightbulb1").innerHTML = svg;
  // document.querySelector("#lightbulb2").innerHTML = svg;
}

function lightBulbDarkSVG(svg) {
  document.querySelector("#lightbulbDark").innerHTML = svg;
}

function popupSVG(svg) {
  document.querySelector("#popup").innerHTML = svg;
  // document.querySelector("#template_infobox").innerHTML = svg;
}

function arrow(svg) {
  document.querySelector("#template-arrow").innerHTML = svg;
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
