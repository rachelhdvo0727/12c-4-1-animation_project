import gsap from "gsap";

export function page3Handler(svg, jsonData) {
  let allClickedLights = [];

  placeSvg3(svg);

  document.querySelector("#koleskabdor").classList.add("hide");
  document.querySelector("#lysfralampe").classList.add("hide");
  document.querySelectorAll(".hh_popup").forEach(popup => {
    popup.classList.add("hide");
  });

  document.querySelector("#hh_popup1").textContent = jsonData[3].popup1;
  document.querySelector("#hh_popup2").textContent = jsonData[3].popup2;
  document.querySelector("#hh_popup3").textContent = jsonData[3].popup3;

  function placeSvg3(svg) {
    document.querySelector("#page3_background").innerHTML = svg;

    createLightbulbs("hh_lightbulb", "hh_container1", "hh_lightbulb1", "#globalLightBulb");
    createLightbulbs("hh_lightbulb", "hh_container2", "hh_lightbulb2", "#globalLightBulb");
    createLightbulbs("hh_lightbulb", "hh_container3", "hh_lightbulb3", "#globalLightBulb");

    clickLightBulbs();
  }

  function createLightbulbs(classes, id, id2, href) {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 1500 1000");
    svg.id = id;
    svg.classList.add(classes);
    document.querySelector("#household_lightbulbs").appendChild(svg);

    let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", href);
    use.id = id2;
    document.querySelector("#" + id).appendChild(use);
  }

  // ANIMATIONER

  // vaskemaskinen

  let trumle = gsap.to("#trumle", {
    rotation: 360,
    duration: 2,
    repeat: -1,
    transformOrigin: "50% 50%",
    ease: "linear",
    paused: true
  });
  let vaske = gsap.to("#vaskemaskine", {
    y: 2,
    x: 2,
    duration: 0.3,
    repeat: -1,
    paused: true
  });

  // stovsuger
  let stovsugerAnimation = gsap.timeline({ repeat: -1, duration: 2, delay: -2, paused: true });
  stovsugerAnimation.to("#stovsuger", { duration: 1, x: 100 });
  stovsugerAnimation.to("#stovsuger", { duration: 1, x: 0 });

  //koleskab

  let koleskabAnimation = gsap.timeline({ repeat: -1, duration: 1, delay: -1, paused: true });
  koleskabAnimation.to("#koleskabdor", { display: "block", duration: 0.5 });
  koleskabAnimation.to("#koleskabdor", { display: "none", duration: 0.5 });

  function clickLightBulbs() {
    document.querySelectorAll(".hh_lightbulb").forEach(light => {
      let scaling = gsap.timeline({ repeat: -1 });
      scaling.to(light, { scale: 1.03, duration: 1 });
      scaling.to(light, { scale: 1, duration: 1 });

      light.addEventListener("click", function() {
        light.classList.toggle("light");

        let light1 = document.querySelector("#hh_container1");
        let light2 = document.querySelector("#hh_container2");
        let light3 = document.querySelector("#hh_container3");

        if (light == light1) {
          if (allClickedLights.indexOf(light1) == -1) {
            allClickedLights.push(light1);
            console.log(light1);

            document.querySelector("#hh_popup1").classList.remove("hide");
            document.querySelector("#lysfralampe").classList.remove("hide");
          } else {
            let index = allClickedLights.indexOf(light1);
            allClickedLights.splice(index, 1);

            document.querySelector("#hh_popup1").classList.add("hide");
            document.querySelector("#lysfralampe").classList.add("hide");
          }
        }

        if (light == light2) {
          if (allClickedLights.indexOf(light2) == -1) {
            allClickedLights.push(light2);

            trumle.play();
            vaske.play();
            stovsugerAnimation.play();

            document.querySelector("#hh_popup2").classList.remove("hide");
          } else {
            let index = allClickedLights.indexOf(light2);
            allClickedLights.splice(index, 1);

            trumle.pause();
            vaske.pause();
            stovsugerAnimation.pause();

            document.querySelector("#hh_popup2").classList.add("hide");
          }
        }

        if (light == light3) {
          if (allClickedLights.indexOf(light3) == -1) {
            allClickedLights.push(light3);

            koleskabAnimation.play();
            document.querySelector("#hh_popup3").classList.remove("hide");
          } else {
            let index = allClickedLights.indexOf(light3);
            allClickedLights.splice(index, 1);
            koleskabAnimation.pause();

            document.querySelector("#hh_popup3").classList.add("hide");
          }
        }

        console.log(allClickedLights);

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
    });
  }
}
