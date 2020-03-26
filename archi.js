import { gsap } from "gsap";

export function page4(svg, jsonData) {
  placeSvg4(svg);

  let clicked = false;

  function placeSvg4() {
    document.querySelector("#page4_background").innerHTML = svg;

    useLightbulb();
    usePopup();
    clickLightbulb();

    document.querySelector("#popUp").classList.add("hide");
  }

  function useLightbulb() {
    let lightbulb = document.createElementNS("http://www.w3.org/2000/svg", "use");
    lightbulb.setAttribute("href", "#globalLightBulb");
    lightbulb.setAttribute("height", "130px");
    lightbulb.setAttribute("width", "130px");
    lightbulb.setAttribute("x", "3000px");
    lightbulb.setAttribute("y", "2000px");
    lightbulb.setAttribute("id", "lightBulb");
    document.querySelector("#page4_background").appendChild(lightbulb);
  }

  function usePopup() {
    let popup = document.createElementNS("http://www.w3.org/2000/svg", "use");
    popup.setAttribute("href", "#globalPopUp");
    popup.setAttribute("height", "5000px");
    popup.setAttribute("width", "5000px");
    popup.setAttribute("x", "1000px");
    popup.setAttribute("y", "2500px");
    popup.setAttribute("id", "popUp");
    document.querySelector("#page4_background").appendChild(popup);
    console.log("er du der?");
  }

  //animation
  let elevatorAnimation = gsap.timeline({ duration: 8, repeat: -1, delay: -8, paused: true });
  elevatorAnimation.to("#elevator", { y: -1200, duration: 4 });
  elevatorAnimation.to("#elevator #light", { fill: "yellow", duration: 0.2 });
  elevatorAnimation.to("#elevator", { y: 0, duration: 3 });
  elevatorAnimation.to("#elevator #light", { fill: "none", duration: 0.8, ease: "easeIn" });

  function clickLightbulb() {
    let lightbulb = document.querySelector("#lightBulb");
    let popup = document.querySelector("#popUp");

    lightbulb.addEventListener("click", function() {
      console.log("clicked");

      console.log(clicked);

      if (clicked == false) {
        clicked = true;
        elevatorAnimation.play();
        lightbulb.classList.add("light");
        popup.classList.remove("hide");
        document.querySelector("#globalPopUp > g > text").textContent = jsonData[2].popup1;
      } else {
        clicked = false;
        elevatorAnimation.pause();
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
