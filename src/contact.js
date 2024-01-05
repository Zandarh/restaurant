import domManipulation from "./index.js";
import './style/contact.css';
import './style/maincontent.css';
const domMani = domManipulation();
let contact;

(function(){
    // The main content
    contact = domMani.myCreateElement(contact, 'div');
    const class1 = "main-content";
    const class2 = "contact";
    contact.className = `${class1} ${class2}`;

    let heroDiv, heroHeading, heroOverlay;

    heroDiv = domMani.myCreateElement(heroDiv, "div")
    heroDiv.className = "hero-div";

    heroOverlay = domMani.myCreateElement(heroOverlay, 'div');
    heroOverlay.className = "overlay";

    heroHeading = domMani.myCreateElement(heroHeading, "h2");
    heroHeading.className = "hero-heading";
    heroHeading.textContent = "Who Says You Cannot Satisfy Those Cravings?"

    heroDiv.appendChild(heroHeading);
    contact.appendChild(heroOverlay);
    contact.appendChild(heroDiv);
})();

export {contact}