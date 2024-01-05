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

    let menuHeading;
    //Menu
    menuHeading = domMani.myCreateElement(menuHeading, 'h2');
    menuHeading.className = "main-headings";
    menuHeading.textContent = "Our Menu";
    menu.appendChild(menuHeading);
    
    // services
    let aboutWrapper, div1, div2, div3, img;

    
    aboutWrapper = domMani.myCreateElement(aboutWrapper, "div");
    aboutWrapper.className = "about-wrapper"

    div1 = domMani.myCreateElement(div1, "div");
    div1.className = "service-div";
  
    aboutWrapper.appendChild(div1);

    div2 = domMani.myCreateElement(div2, "div");
    div2.className = "service-div2";
    aboutWrapper.appendChild(div2);

    div3 = domMani.myCreateElement(div3, "div");
   div3.className = "service-div3";
   aboutWrapper.appendChild(div3);
   menu.appendChild(aboutWrapper);

})();

export {menu}