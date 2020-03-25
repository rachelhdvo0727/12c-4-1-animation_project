import gsap from "gsap";

export function page3(svg, jsonData) {
  placeSvg3(svg);

  document.querySelector("#koleskabdor").classList.add("hide");

  function placeSvg3(svg) {
    document.querySelector("#page3_background").innerHTML = svg;

    for (let i = 0; i < 3; i++) {
      createLightbulbs();
    }

    setPositions();
    clickLightBulbs();
  }

  function createLightbulbs() {
    let lightbulb = document.createElementNS("http://www.w3.org/2000/svg", "use");
    lightbulb.setAttribute("href", "#globalLightBulb");
    lightbulb.setAttribute("height", "130px");
    lightbulb.setAttribute("width", "130px");
    document.querySelector("#page3_background").appendChild(lightbulb);
  }

  function setPositions() {
    //pære 1
    document.querySelector("#page3_background > use:nth-child(2)").setAttribute("x", "1000px");
    document.querySelector("#page3_background > use:nth-child(2)").setAttribute("y", "500px");
    console.log("her");

    //pære 2
    document.querySelector("#page3_background > use:nth-child(3)").setAttribute("x", "3000px");
    document.querySelector("#page3_background > use:nth-child(3)").setAttribute("y", "500px");
    console.log("her nu");

    //pære 3
    document.querySelector("#page3_background > use:nth-child(4)").setAttribute("x", "5000px");
    document.querySelector("#page3_background > use:nth-child(4)").setAttribute("y", "500px");
    console.log("her nu nu");
  }

  function clickLightBulbs() {
    document.querySelectorAll("use:nth-child(2), use:nth-child(3), use:nth-child(4)").forEach(light => {
      light.addEventListener("click", function() {
        light.classList.toggle("light");
        console.log(light);
        let nummer1 = document.querySelector("use:nth-child(2)");
        console.log(nummer1);

        if (light == nummer1) {
          gsap.to("#trumle", { rotation: 360, duration: 2, repeat: 10, transformOrigin: "50% 50%" });
        }
      });
    });
  }

  function showPopUp1() {
    document.querySelector("#page3_popup1").classList.toggle("hide");
    console.log(jsonData);
    console.log(jsonData[2]);
    console.log(jsonData[2].popup1);

    // animationer
    document.querySelector("#trumle").classList.remove("hide");
    gsap.to("#trumle", { rotation: 360, duration: 2, repeat: 10, transformOrigin: "50% 50%" });
    gsap.to("#vaskemaskine", { y: 2, x: 2, duration: 0.3, repeat: 30 });
    gsap.to("#stovsuger", { x: 100, duration: 2 });

    // forsøg på at sætte tekst i modal
    // document.querySelector("#globalPopup").textContent = jsonData[2].popup1;
    let t = document.createElementNS("http://www.w3.org/2000/svg", "text");
    t.textContent = jsonData[2].popup1;
    t.setAttribute("class", "text");
    console.log(t);
    let global = document.querySelector("#globalPopup");
    console.log(global);
    document.querySelector("#globalPopup").appendChild(t);
  }

  function showPopUp2() {
    document.querySelector("#page3_popup2").classList.toggle("hide");
  }

  function showPopUp3() {
    document.querySelector("#page3_popup3").classList.toggle("hide");
  }
}
