export function frontpage() {
  mainLightBulb();
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

  document.querySelectorAll(".arrow").forEach(elm => {
    elm.style.backgroundImage = "url('svg/arrow.svg')";
  });
  // getSvg("svg/arrow.svg", createArrows);
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
