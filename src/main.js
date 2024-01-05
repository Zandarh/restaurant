import domManipulation from "./index.js";
import './style/maincontent.css';

let mainContent;
(function(){
    const domMani = domManipulation();
    // The main content
    mainContent = domMani.myCreateElement(mainContent, 'div');
    mainContent.className = "main-content";

    let heroDiv, heroHeading, heroOverlay;

    heroDiv = domMani.myCreateElement(heroDiv, "div")
    heroDiv.className = "hero-div";

    heroOverlay = domMani.myCreateElement(heroOverlay, 'div');
    heroOverlay.className = "overlay";

    heroHeading = domMani.myCreateElement(heroHeading, "h2");
    heroHeading.className = "hero-heading";
    heroHeading.textContent = "Good days Start With a Cake."

    heroDiv.appendChild(heroHeading);
    mainContent.appendChild(heroOverlay);
    mainContent.appendChild(heroDiv);

})();
export {mainContent}