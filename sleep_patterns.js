require("@babel/polyfill");
import { gsap } from "gsap";
export function sleepPatterns(svg, globalJson) {
  placeSleepPattern();
  // document.querySelectorAll(".lightbulbs #globalLightBulb > path.cls-2").forEach(elm => {
  //   elm.style.fill = "red";
  // });

  // document.querySelectorAll(".popup-cls-1").forEach(elm => {
  //   elm.style.fill = "red";
  // });

  // document.querySelectorAll(".popup-cls-2").forEach(elm => {
  //   elm.innerHTML = globalJson[2].popup1;
  //   elm.style.width = "5vw";
  //   elm.style.height = "10vw";
  // });
  clickLightBulb();
  // document.querySelector("#lightbulb2").addEventListener("click", () => {
  //   clickLightBulb("#lightbulb1");
  // });
  // document.querySelector("#lightbulb3").addEventListener("click", () => {
  //   clickLightBulb("#lightbulb2");
  // });

  // document.querySelectorAll("use").forEach(elm => {
  //   elm.addEventListener("click", clickLightBulb);
  // });
  function placeSleepPattern() {
    document.querySelector(".sleep_bg").innerHTML = svg;
    // const dest = document.querySelector(".lightbulb");

    getLightBulb(
      "-500px",
      "300px",
      "lightbulb1",
      "lightbulb",
      "#dark-theme-light"
    );
    getLightBulb("-50px", "0", "lightbulb2", "lightbulb", "#dark-theme-light");
    // getLightBulb("100px", "200px", "popup1", "popupClass", "#pop-up");
  }

  // function createLightbulb() {}

  function getLightBulb(x, y, id, classes, href) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 1500 2500");
    svg.id = id;
    svg.classList.add(classes);
    document.querySelector(".lightbulbs").appendChild(svg);
    let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", href);
    use.setAttribute("x", x);
    use.setAttribute("y", y);
    use.id = id;
    document.querySelector("#" + id).appendChild(use);
    // let compStyle = window.getComputedStyle(document.querySelector(".lightbulb"));
    // compStyle.fill = "red";
  }

  function clickLightBulb() {
    console.log("clickLightBulb");
    document.querySelectorAll(".lightbulb").forEach(light => {
      console.log("events");

      light.addEventListener("click", function() {
        console.log("clicked");
        light.classList.toggle("clone");
        showPopUp(light);

        if (light === light1) {
          animationLight(light);
        }
        if (light === light2) {
          animationFactory(light);
        }

        light.removeEventListener("click", clickLightBulb);
      });

      let light1 = document.querySelector("#lightbulb1");
      let light2 = document.querySelector("#lightbulb2");
    });
  }

  function animationFactory(light) {
    console.log("animation");
    if (light.classList.contains("clone")) {
      gsap.to(".clouds", { duration: 4, x: 1200, y: -300, stagger: 0.1 });

      // gsap.to("#sleepPattern > g:nth-child(3) > rect", 5, { fill: "rgb(255, 0, 255)" });
      // document.querySelector("#sleepPattern > path:nth-child(8)").style.fill = "yellow";
    } else {
      gsap.to(".clouds", { duration: 4, x: 0, y: 0 });
    }
  }

  function animationLight(light) {
    console.log("animation");
    if (light.classList.contains("clone")) {
      gsap.to("#sleepPattern > g:nth-child(3) > rect", 5, { fill: "#719DA2" });
      gsap.to("#sleepPattern > path:nth-child(8)", 2, { fill: "yellow" });
    } else {
      gsap.to("#sleepPattern > g:nth-child(3) > rect", 5, { fill: "#333a4d" });
      gsap.to("#sleepPattern > path:nth-child(8)", 2, { fill: "none" });
    }
  }

  function showPopUp(light) {
    console.log(light);
    console.log(light.id);
    let num = light.id[[light.id.length - 1]];
    console.log(num);
    let contains = document
      .querySelector("#sleep-popup" + num)
      .classList.contains("pop-up-show");
    let popupnum = "popup" + num;
    document
      .querySelector("#sleep-popup" + num)
      .classList.toggle("pop-up-show");
    if (contains == false) {
      document.querySelector("#sleep-popup" + num).innerHTML =
        globalJson[2].text[num - 1].popup;
    } else if (contains == true) {
      document.querySelector("#sleep-popup" + num).innerHTML = "";
    }
  }
  // console.log("click");
  // const select = document.querySelector(id + " #globalLightBulb > path.cls-2");
  // let compStyles = window.getComputedStyle(select);
  // // console.log(compStyles);
  // console.log(compStyles.fill);
  // let hex2rgb = prepareHex2rgb("#f0cd00");

  // let rgb = `rgb(${hex2rgb.r}, ${hex2rgb.g}, ${hex2rgb.b})`;
  // console.log(rgb);
  // if (compStyles.fill === rgb) {
  //   select.style.fill = "red";
  //   console.log("virk");
  // } else {
  //   select.style.fill = "#f0cd00";
  //   console.log("hej");
  // }

  // document.querySelector("#infobox_template .popup-2").textContent = "";

  // document.querySelector("#Layer_2 > text.popup-2").width = "200px";

  // document.querySelector(id).removeEventListener("click", clickLightBulb);

  // console.log(e.target);
}

// function createlightbulbs() {
//   for (let i = 0; i < 2; i++) {
//     popUpLight();
//   }
//   positioning();
// }

// function createLightBulb(id, x, y) {
//   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   svg.setAttribute("viewBox", "0 0 1000 1500");
//   svg.id = id;
//   svg.classList.add("lightbulbs");
//   document.querySelector(".lightbulb").appendChild(svg);
//   let lightbulb = document.createElementNS("http://www.w3.org/2000/svg", "use");
//   lightbulb.setAttribute("href", "#globalLightBulb");
//   lightbulb.classList.add(id);
//   // lightbulb.setAttribute("x", x);
//   // lightbulb.setAttribute("y", y);

//   // lightbulb.setAttribute("height", "130px");
//   // lightbulb.setAttribute("width", "130px");

//   document.querySelector("#" + id).appendChild(lightbulb);
// }

// function positioning() {
//   document.querySelector(".lightbulb > use:nth-child(1)").setAttribute("x", "50vw");
//   document.querySelector(".lightbulb > use:nth-child(1)").setAttribute("y", "400px");
//   document.querySelector(".lightbulb > use:nth-child(2)").setAttribute("x", "1800px");
//   document.querySelector(".lightbulb > use:nth-child(3)").setAttribute("y", "400px");
//   document.querySelector(".lightbulb > use:nth-child(3)").setAttribute("y", "400px");
// }

// function rgb2Hex(rgb) {
//   //FROM https://css-tricks.com/converting-color-spaces-in-javascript/
//   let r = rgb.r.toString(16);
//   let g = rgb.g.toString(16);
//   let b = rgb.b.toString(16);
//   if (r.length == 1) {
//     r = "01";
//   }
//   if (g.length == 1) {
//     g = "01";
//   }
//   if (b.length == 1) {
//     b = "01";
//   }
//   return "#" + r + g + b;
// }

function prepareHex2rgb(hex) {
  const red = hex.substring(1, 3);
  const green = hex.substring(3, 5);
  const blue = hex.substring(5, 7);
  const hexRGB = { r: red, g: green, b: blue };
  return hex2RGB(hexRGB);
  // convertToRGB(hex, red, green, blue);
}
function hex2RGB(hexRGB) {
  const red = Number.parseInt(hexRGB.r, 16);
  const green = Number.parseInt(hexRGB.g, 16);
  const blue = Number.parseInt(hexRGB.b, 16);
  const rgb = { r: red, g: green, b: blue };
  return rgb;
}
