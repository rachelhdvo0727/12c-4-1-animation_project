import { gsap } from "gsap";

export function page4Handler(svg, jsonData) {
  placeSvg4(svg);

  let clicked = false;

  function placeSvg4() {
    document.querySelector("#page4_background").innerHTML = svg;

    useLightbulb();
    // usePopup();
    clickLightbulb();

    document.querySelector("#archi-popup").classList.add("hide");
  }

  function useLightbulb() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 350 200");
    svg.id = "lightbulb_svg_container";
    svg.classList.add("lightbulb-archi");
    document.querySelector("#archi-lightbulb").appendChild(svg);

    let lightbulb = document.createElementNS("http://www.w3.org/2000/svg", "use");
    lightbulb.setAttribute("href", "#globalLightBulb");
    lightbulb.setAttribute("id", "archi_lightbulb");
    document.querySelector("#lightbulb_svg_container").appendChild(lightbulb);
  }

  // function usePopup() {
  //   let popup = document.createElementNS("http://www.w3.org/2000/svg", "use");
  //   popup.setAttribute("href", "#globalPopUp");
  //   popup.setAttribute("id", "popUp");
  //   document.querySelector("#popup_svg_container").appendChild(popup);
  //   console.log("er du der?");
  // }

  //animation
  let elevatorAnimation = gsap.timeline({ duration: 8, delay: -8, repeat: -1, paused: true, yoyo: true });
  elevatorAnimation.to("#elevator", { y: -1200, duration: 4 });
  elevatorAnimation.to("#elevator #light", { fill: "yellow", duration: 0.2 });
  elevatorAnimation.to("#elevator", { y: 0, duration: 3 });
  elevatorAnimation.to("#elevator #light", { fill: "none", duration: 0.8, ease: "easeIn" });

  let skyscaperAnimation = gsap.to(".archi-cls-2", { fill: "yellow", stagger: 0.2, duration: 5, paused: true });

  let lightBulbAnimation = gsap.to("#archi_lightbulb", {
    filter: "drop-shadow(10px 10px 100px #f2d94a)",
    opacity: 1,
    duration: 2,
    repeat: -1,
    paused: true
  });

  function clickLightbulb() {
    let lightbulb = document.querySelector("#archi_lightbulb");
    let popup = document.querySelector("#archi-popup");

    lightbulb.addEventListener("click", function() {
      console.log("clicked");

      console.log(clicked);

      if (clicked == false) {
        clicked = true;
        elevatorAnimation.play();
        skyscaperAnimation.play();
        lightBulbAnimation.play();
        lightbulb.classList.add("light");
        popup.classList.remove("hide");
        document.querySelector("#archi-popup").textContent = jsonData[4].popup1;
      } else {
        clicked = false;
        elevatorAnimation.pause();
        skyscaperAnimation.pause();
        lightbulb.classList.remove("light");
        popup.classList.add("hide");
      }

      d3plus
        .textwrap()
        .container(d3.select("#globalPopUp > g > text"))
        .draw();

      d3plus
        .textwrap()
        .container(d3.select("#globalPopUp > g > text"))
        .resize(true)
        .draw();
    });
  }
}
