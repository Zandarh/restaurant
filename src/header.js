import './style/header.css';
import domManipulation from "./index.js";
import myLogo from './img/logo.png';

let header;
(function(){
    const domMani = domManipulation();

    let logo, heading, tab, home, menu, contact;

    // The header
    header = domMani.myCreateElement(header, 'div');
    header.className =  "header";

    // Div in header
    logo = domMani.myCreateElement(logo, 'div');
    logo.className = "logo-div";

    heading = new Image();
    heading.src = myLogo;
    heading.className = "headingLogo";

    logo.appendChild(heading);
    header.appendChild(logo);

    tab = domMani.myCreateElement(tab, 'div');
    tab.className = "tab";

    home = domMani.myCreateElement(home, 'div');
    home.className = "home";
    
    let homeText;
    homeText = domMani.myCreateElement(homeText, "h3");
    homeText.textContent = "Home";
    home.appendChild(homeText);
    tab.appendChild(home);

    menu = domMani.myCreateElement(menu, 'div');
    menu.className = "menu";

    let menuText;
    menuText = domMani.myCreateElement(menuText, "h3");
    menuText.textContent = "Menu";
    menu.appendChild(menuText);
    tab.appendChild(menu);

    contact = domMani.myCreateElement(contact, 'div');
    contact.className = "contact";
    
    let contactText;
    contactText = domMani.myCreateElement(contactText, "h3");
    contactText.textContent = "Contact";
    contact.appendChild(contactText);
    tab.appendChild(contact);

    header.appendChild(tab);
})();

export {header};