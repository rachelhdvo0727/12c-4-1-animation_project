"use strict";
export function historyGlobalSVGs() {
  popUpLight();
demonSVG();

  function popUpLight() {
    let use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#globalLightBulb");

    use.setAttribute("x", "1750px");
    use.setAttribute("y", "300px");
    use.setAttribute("height", "130px");
    use.setAttribute("width", "130px");

    document.querySelector("#history-svg-bg").appendChild(use);
  }
}
