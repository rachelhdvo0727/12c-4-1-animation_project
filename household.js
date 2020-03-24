export function page3(svg, jsonData) {
  placeSvg3(svg);

  document.querySelector("#koleskabdor").classList.add("hide");
  document.querySelector("#page3_popup1").classList.add("hide");
  document.querySelector("#page3_popup2").classList.add("hide");
  document.querySelector("#page3_popup3").classList.add("hide");

  document.querySelector("#page3_lightbulb1").addEventListener("click", showPopUp1);
  document.querySelector("#page3_lightbulb2").addEventListener("click", showPopUp2);
  document.querySelector("#page3_lightbulb3").addEventListener("click", showPopUp3);

  function placeSvg3(svg) {
    document.querySelector("#page3_background").innerHTML = svg;
    useLightBulb();
    usePopUp();
  }

  function useLightBulb() {
    let lightBulbOne = document.createElementNS("http://www.w3.org/2000/svg", "use");
    lightBulbOne.setAttribute("href", "#globalLightBulb");
    document.querySelector("#page3_lightbulb1").appendChild(lightBulbOne);

    let lightBulbTwo = document.createElementNS("http://www.w3.org/2000/svg", "use");
    lightBulbTwo.setAttribute("href", "#globalLightBulb");
    document.querySelector("#page3_lightbulb2").appendChild(lightBulbTwo);

    let lightBulbThree = document.createElementNS("http://www.w3.org/2000/svg", "use");
    lightBulbThree.setAttribute("href", "#globalLightBulb");
    document.querySelector("#page3_lightbulb3").appendChild(lightBulbThree);
  }

  function usePopUp() {
    let popUpOne = document.createElementNS("http://www.w3.org/2000/svg", "use");
    popUpOne.setAttribute("href", "#globalPopup");
    document.querySelector("#page3_popup1").appendChild(popUpOne);

    let popUpTwo = document.createElementNS("http://www.w3.org/2000/svg", "use");
    popUpTwo.setAttribute("href", "#globalPopup");
    document.querySelector("#page3_popup2").appendChild(popUpTwo);

    let popUpThree = document.createElementNS("http://www.w3.org/2000/svg", "use");
    popUpThree.setAttribute("href", "#globalPopup");
    document.querySelector("#page3_popup3").appendChild(popUpThree);
  }

  function showPopUp1() {
    document.querySelector("#page3_popup1").classList.toggle("hide");
    console.log(jsonData);
    console.log(jsonData[2]);
    console.log(jsonData[2].popup1);

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
