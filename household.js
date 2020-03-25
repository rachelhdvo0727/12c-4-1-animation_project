import gsap from "gsap";

export function page3(svg, jsonData) {
  let allClickedLights = [];

  placeSvg3(svg);

  document.querySelector("#koleskabdor").classList.add("hide");

  function placeSvg3(svg) {
    document.querySelector("#page3_background").innerHTML = svg;

    for (let i = 0; i < 3; i++) {
      createLightbulbs();
      createPopups();
    }

    setPositions();
    clickLightBulbs();
  }

  // ANIMATIONER

  // vaskemaskinen
  let trumle = gsap.to("#trumle", { rotation: 360, duration: 2, repeat: -1, transformOrigin: "50% 50%", ease: "linear" });
  let vaske = gsap.to("#vaskemaskine", { y: 2, x: 2, duration: 0.3, repeat: -1 });
  trumle.pause();
  vaske.pause();

  // stovsuger
  let stovsugerAnimation = gsap.timeline({ repeat: 0, duration: 4 });
  stovsugerAnimation.to("#stovsuger", { x: 100, duration: 2 });
  stovsugerAnimation.to("#stovsuger", { x: 0, duration: 2 });
  stovsugerAnimation.pause();

  //koleskab

  let koleskabAnimation = gsap.timeline({ repeat: 5, duration: 1 });
  koleskabAnimation.to("#koleskabdor", { display: "block", duration: 0.5 });
  koleskabAnimation.to("#koleskabdor", { display: "none", duration: 0.5 });
  koleskabAnimation.pause();

  function createLightbulbs() {
    let lightbulb = document.createElementNS("http://www.w3.org/2000/svg", "use");
    lightbulb.setAttribute("href", "#globalLightBulb");
    lightbulb.setAttribute("height", "130px");
    lightbulb.setAttribute("width", "130px");
    document.querySelector("#page3_background").appendChild(lightbulb);
  }

  function createPopups() {
    let popup = document.createElementNS("http://www.w3.org/2000/svg", "use");
    popup.setAttribute("href", "#globalPopUp");
    popup.setAttribute("height", "5000px");
    popup.setAttribute("width", "5000px");
    document.querySelector("#page3_background").appendChild(popup);
  }

  function setPositions() {
    //pære 1
    document.querySelector("#page3_background > use:nth-child(2)").setAttribute("x", "6000px");
    document.querySelector("#page3_background > use:nth-child(2)").setAttribute("y", "500px");
    console.log("her");

    //popup 1
    document.querySelector("#page3_background > use:nth-child(3)").setAttribute("x", "4000px");
    document.querySelector("#page3_background > use:nth-child(3)").setAttribute("y", "1000px");
    document.querySelector("#page3_background > use:nth-child(3)").classList.add("hide");
    console.log("her nu");

    //pære 2
    document.querySelector("#page3_background > use:nth-child(4)").setAttribute("x", "4000px");
    document.querySelector("#page3_background > use:nth-child(4)").setAttribute("y", "5500px");
    console.log("her nu nu");

    //popup 2
    document.querySelector("#page3_background > use:nth-child(5)").setAttribute("x", "4000px");
    document.querySelector("#page3_background > use:nth-child(5)").setAttribute("y", "1000px");
    document.querySelector("#page3_background > use:nth-child(5)").classList.add("hide");
    console.log("her nu nu");

    //pære 3
    document.querySelector("#page3_background > use:nth-child(6)").setAttribute("x", "11800px");
    document.querySelector("#page3_background > use:nth-child(6)").setAttribute("y", "3500px");
    console.log("her nu nu");

    // popup3
    document.querySelector("#page3_background > use:nth-child(7)").setAttribute("x", "4000px");
    document.querySelector("#page3_background > use:nth-child(7)").setAttribute("y", "1000px");
    document.querySelector("#page3_background > use:nth-child(7)").classList.add("hide");
    console.log("her nu nu");
  }

  function clickLightBulbs() {
    document.querySelectorAll("use:nth-child(2), use:nth-child(4), use:nth-child(6)").forEach(light => {
      let scaling = gsap.timeline({ repeat: -1 });
      scaling.to(light, { scale: 1.03, duration: 1 });
      scaling.to(light, { scale: 1, duration: 1 });

      light.addEventListener("click", function() {
        light.classList.toggle("light");

        let light1 = document.querySelector("use:nth-child(2)");
        let light2 = document.querySelector("use:nth-child(4)");
        let light3 = document.querySelector("use:nth-child(6)");

        if (light == light1) {
          document.querySelector("#page3_background > use:nth-child(3)").classList.toggle("hide");
          document.querySelector("#globalPopUp > g > text").textContent = jsonData[2].popup1;
        }

        if (light == light2) {
          document.querySelector("#page3_background > use:nth-child(5)").classList.toggle("hide");
          document.querySelector("#globalPopUp > g > text").textContent = jsonData[2].popup2;

          if (allClickedLights.indexOf(light2) == -1) {
            allClickedLights.push(light2);
            trumle.play();
            vaske.play();
            stovsugerAnimation.play();
          } else {
            let index = allClickedLights.indexOf(light2);
            allClickedLights.splice(index, 1);
            trumle.pause();
            vaske.pause();
            stovsugerAnimation.pause();
          }
        }

        if (light == light3) {
          document.querySelector("#page3_background > use:nth-child(7)").classList.toggle("hide");
          document.querySelector("#globalPopUp > g > text").textContent = jsonData[2].popup3;

          if (allClickedLights.indexOf(light3) == -1) {
            allClickedLights.push(light3);
            koleskabAnimation.play();
          } else {
            let index = allClickedLights.indexOf(light3);
            allClickedLights.splice(index, 1);
            koleskabAnimation.pause();
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
