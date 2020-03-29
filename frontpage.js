import gsap from "gsap";

export function frontpageHandler(json) {
  mainLightBulb();
  clickLightBulb();

  function mainLightBulb() {
    // create a single balloon, using the #yellow_balloon
    let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#globalLightBulb");

    // give it a random x and y
    use.setAttribute("x", "100px");
    use.setAttribute("y", "100px");

    document.querySelector("#mainlightBulb").appendChild(use);
    displayText();
  }

  function clickLightBulb() {
    let theBigBulb = document.querySelector("#mainlightBulb");

    theBigBulb.addEventListener("click", function() {
      console.log("clicked");
      theBigBulb.classList.toggle("clone");
      gsap.to(theBigBulb, {
        filter: "drop-shadow(10px 10px 100px #f2d94a)",
        opacity: 1,
        duration: 0.5
      });

      light.removeEventListener("click", clickLightBulb);
    });
  }

  async function getSvg(filename, callback) {
    let response = await fetch(filename);
    let mySvgData = await response.text();
    callback(mySvgData);
  }

  function displayText() {
    document.querySelector("#frontpage h1").textContent = json[0].title;
    document.querySelector("#frontpage #frontpage-popup").textContent =
      json[0].popuptext;
    document.querySelector("#frontpage #page1-title").textContent =
      json[0].page1;
    document.querySelector("#frontpage #page2-title").textContent =
      json[0].page2;
    document.querySelector("#frontpage #page3-title").textContent =
      json[0].page3;
    document.querySelector("#frontpage #page4-title").textContent =
      json[0].page4;
  }
}
