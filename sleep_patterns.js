require("@babel/polyfill");
import { gsap } from "gsap";
export function sleepPatterns(svg, globalJson) {
  placeSleepPattern();

  clickLightBulb();

  let scaling = gsap.timeline({ repeat: -1 });
  scaling.to(".lightbulb", { scale: 1.03, duration: 1 });
  scaling.to(".lightbulb", { scale: 1, duration: 1 });

  function placeSleepPattern() {
    document.querySelector(".sleep_bg").innerHTML = svg;
    getLightBulb("-50px", "0", "lightbulb1", "lightbulb", "#dark-theme-light");

    getLightBulb(
      "-500px",
      "300px",
      "lightbulb2",
      "lightbulb",
      "#dark-theme-light"
    );
  }
  let light1 = document.querySelector("#lightbulb1");
  let light2 = document.querySelector("#lightbulb2");

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
          animationFactory(light);
          gsap.to(light1, {
            filter: "drop-shadow(5px 5px 20px #f2d94a)",
            opacity: 1,
            duration: 0.5
          });
        }
        if (light === light2) {
          animationLight(light);
          gsap.to(light2, {
            filter: "drop-shadow(5px 5px 20px #f2d94a)",
            opacity: 1,
            duration: 0.5
          });
        }
        light.removeEventListener("click", clickLightBulb);
      });
    });
  }

  function animationFactory(light) {
    console.log("animation");
    if (light.classList.contains("clone")) {
      gsap.to(".clouds", { duration: 4, x: 1200, y: -300, stagger: 0.1 });
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
}

function prepareHex2rgb(hex) {
  const red = hex.substring(1, 3);
  const green = hex.substring(3, 5);
  const blue = hex.substring(5, 7);
  const hexRGB = { r: red, g: green, b: blue };
  return hex2RGB(hexRGB);
}
function hex2RGB(hexRGB) {
  const red = Number.parseInt(hexRGB.r, 16);
  const green = Number.parseInt(hexRGB.g, 16);
  const blue = Number.parseInt(hexRGB.b, 16);
  const rgb = { r: red, g: green, b: blue };
  return rgb;
}
