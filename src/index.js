import './style/index.css';
import {header} from "./header.js";
import {footer} from "./footer.js";
import {mainContent} from "./main.js";
import {menu} from './menu.js';
import {contact} from './contact.js';

//Creating a DOM element
export default function domManipulation(){
    function myCreateElement(variableName, element){
        variableName = document.createElement(element);
        return variableName;
    }
    return {myCreateElement}
}

// Home page
(function(){
    const content = document.querySelector('#content');

    content.appendChild(header);
    content.appendChild(mainContent)
    content.appendChild(footer);
    content.appendChild(menu);
    content.appendChild(contact);
})();



// Toggler function
(function(){
    //Tabbed header
    const menu1 = document.querySelector('.home');
    const menu2 = document.querySelector('.menu');
    const menu3 = document.querySelector('.contact');

    //event handling
    menu1.addEventListener('click', toggleTabs);
    menu2.addEventListener('click', toggleTabs);
    menu3.addEventListener('click', toggleTabs);

    function toggleTabs(e){
        if(e.target.textContent == "Home"){
            menu.style.display = "none";
            contact.style.display = "none"
            mainContent.style.display = "flex";
            return;
        }
        if(e.target.textContent == "Menu"){
            mainContent.style.display = "none";
            contact.style.display = "none"
            menu.style.display = "flex";
            return;
        }
        else{
            mainContent.style.display = "none";
            menu.style.display = "none"
            contact.style.display = "flex";
            return;
        }
    }
})();