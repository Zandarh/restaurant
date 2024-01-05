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
            removeAllChildren(content);
            content.appendChild(header);
            content.appendChild(mainContent);
            content.appendChild(footer);
            return;
        }
        if(e.target.textContent == "Menu"){
            removeAllChildren(content);
            content.appendChild(header);
            content.appendChild(menu);
            content.appendChild(footer);
            return;
        }
        else{
            removeAllChildren(content);
            content.appendChild(header);
            content.appendChild(contact);
            content.appendChild(footer);
            return;
        }
    }

    function removeAllChildren(node){
        while(node.firstChild){
            node.removeChild(node.lastChild);
        }
    }
})();