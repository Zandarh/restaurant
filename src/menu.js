import domManipulation from "./index.js";
import './style/maincontent.css';
import './style/menu.css';
const domMani = domManipulation();
let menu;

(function(){
    // The main content
    menu = domMani.myCreateElement(menu, 'div');
    const class1 = "main-content";
    const class2 = "menu";
    menu.className = `${class1} ${class2}`;

    let heroDiv, heroHeading, heroOverlay;

    heroDiv = domMani.myCreateElement(heroDiv, "div")
    heroDiv.className = "hero-div";

    heroOverlay = domMani.myCreateElement(heroOverlay, 'div');
    heroOverlay.className = "overlay";

    heroHeading = domMani.myCreateElement(heroHeading, "h2");
    heroHeading.className = "hero-heading";
    heroHeading.textContent = "Cravings are Best Shared With Pals"

    heroDiv.appendChild(heroHeading);
    menu.appendChild(heroOverlay);
    menu.appendChild(heroDiv);
})();

export {menu}