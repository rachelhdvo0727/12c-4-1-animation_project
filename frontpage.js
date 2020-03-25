import gsap from "gsap";

export function frontpage() {
  mainLightBulb();
  clickLightBulb();
  getArrows("0", "0", "useArrow1", "arrow1");
  getArrows("0", "0", "useArrow2", "arrow2");
  getArrows("0", "0", "useArrow3", "arrow3");
  getArrows("0", "0", "useArrow4", "arrow4");
  function mainLightBulb() {
    // create a single balloon, using the #yellow_balloon
    let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#globalLightBulb");

    // give it a random x and y
    use.setAttribute("x", "100px");
    use.setAttribute("y", "100px");
    // maybe also add a bit of animation ...
    //   use.classList.add("rise");
    // before adding it to the #balloons
    document.querySelector("#mainlightBulb").appendChild(use);
  }

  // document.querySelectorAll(".arrow").forEach(elm => {
  //   elm.style.backgroundImage = "url('svg/arrow.svg')";
  // });
  // getSvg("svg/arrow.svg", createArrows);

  function clickLightBulb() {
    document.querySelector("#mainlightBulb").addEventListener("click", function() {
      console.log("clicked");
      document.querySelector("#mainlightBulb").classList.toggle("clone");
      // showPopUp(light);

      // if (light === light1) {
      //   animationLight(light);
      // }
      // if (light === light2) {
      //   animationFactory(light);
      // }

      light.removeEventListener("click", clickLightBulb);
    });
    //     let light1 = document.querySelector("#lightbulb1");
    //     let light2 = document.querySelector("#lightbulb2");
    //   });
    // }
  }

  function getArrows(x, y, id, container) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 755 456");
    svg.id = id;
    document.querySelector("#" + container).appendChild(svg);
    let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#arrow");
    use.setAttribute("x", x);
    use.setAttribute("y", y);
    use.id = id;
    document.querySelector("#" + id).appendChild(use);
    arrowAnimation();
    // let compStyle = window.getComputedStyle(document.querySelector(".lightbulb"));
    // compStyle.fill = "red";
  }

  function arrowAnimation() {
    console.log("animation fired");
    gsap.to("#arrow1", { duration: 1, y: "10px", ease: "circ.out", repeat: -1, yoyo: true });
    gsap.to("#arrow3", { duration: 1, y: "-10px", ease: "sine.out", repeat: -1, yoyo: true });
    gsap.to("#arrow2", { duration: 1, x: "10px", ease: "sine.out", repeat: -1, yoyo: true });
    gsap.to("#arrow4", { duration: 1, x: "-10px", ease: "sine.out", repeat: -1, yoyo: true });
  }

  async function getSvg(filename, callback) {
    let response = await fetch(filename);
    let mySvgData = await response.text();
    callback(mySvgData);
  }

  // function createArrows(svg) {
  //   for (let i = 0; i < 4; i++) {
  //     createArrow(svg, i);
  //   }
  // }

  // function createArrows(svg) {
  //   // let rect = document.querySelector("#frontpage").getBoundingClientRect();
  //   // let useArrow = document.createElementNS("http://www.w3.org/2000/svg", "use");
  //   // document.querySelector("#arrows").innerHTML = svg;
  //   // useArrow.setAttribute("href", "#arrow");
  //   // console.log(rect.width);
  //   // // give it a random x and y

  //   // useArrow.setAttribute("width", "100%");
  //   // useArrow.setAttribute("height", "100%");
  //   // useArrow.id = "arrow" + i;
  //   // useArrow.classList.add("arrow");
  //   // if (i == 0) {
  //   //   //  console.log(document.querySelector("#arrow0").offsetWidth);
  //   //   // useArrow.setAttribute("x", -rect.width / 2);
  //   //   // useArrow.setAttribute("y", window.innerHeight / 2);
  //   // }
  //   // document.querySelector("#arrowsContainer").appendChild(useArrow);
  //   // for (let i = 0; i < 4; i++) {
  //   let arrow = (document.querySelector("#arrows").innerHTML = svg);
  //   //   arrow.id = "arrow" + i;
  //   // }
  // }
}
