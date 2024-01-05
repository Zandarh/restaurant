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
    heroHeading.textContent = "Who Says You Cannot Satisfy Those Cravings?"

    heroDiv.appendChild(heroHeading);
    mainContent.appendChild(heroOverlay);
    mainContent.appendChild(heroDiv);

    let aboutDiv, aboutText, paraText, aboutHeading, serviceHeading;

    //About us
    aboutDiv = domMani.myCreateElement(aboutDiv, "div");
    aboutDiv.className = "about";

    aboutHeading = domMani.myCreateElement(aboutHeading, 'h2');
    aboutHeading.className = "main-headings";
    aboutHeading.textContent = "About Us";
    mainContent.appendChild(aboutHeading);

    //about us text
    aboutText = domMani.myCreateElement(aboutText, "p");
    paraText = `Welcome to Dessert Place, where each treat is a symphony of flavor. 
     Our creations turn every occasion into a sweet celebration. 
     Experience joy in every bite—indulge in the delight of Dessert Place!`
     
    aboutText.textContent = paraText;
    aboutDiv.appendChild(aboutText);
    mainContent.appendChild(aboutDiv);

    //services
    serviceHeading = domMani.myCreateElement(serviceHeading, 'h2');
    serviceHeading.className = "main-headings";
    serviceHeading.textContent = "Just a Few";
    mainContent.appendChild(serviceHeading);

    // services
    let div1, div2, div3, img;

    div1 = domMani.myCreateElement(div1, "div");
    div1.className = "service-div";
  
    mainContent.appendChild(div1);

    div2 = domMani.myCreateElement(div2, "div");
    div2.className = "service-div2";
    mainContent.appendChild(div2);

    div3 = domMani.myCreateElement(div3, "div");
   div3.className = "service-div3";
   mainContent.appendChild(div3);
    

    


})();
export {mainContent}