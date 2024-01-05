import './style/index.css';
import {header} from "./header.js";
import {mainContent} from "./main.js";
import {menu} from './menu.js';
import {contact} from './contact.js';
import {footer} from "./footer.js";

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

    homepage();
    function homepage(){
        content.appendChild(header);
        content.appendChild(mainContent)
        content.appendChild(footer);
    }

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
            e.target.style.color = "white";
            removeAllChildren(content);
            changeStyle(menu2);
            changeStyle(menu3);
            content.appendChild(header);
            content.appendChild(mainContent);
            content.appendChild(footer);
            return;
        }
        if(e.target.textContent == "Menu"){
            e.target.style.color = "white";
            removeAllChildren(content);
            changeStyle(menu1);
            changeStyle(menu3);
            content.appendChild(header);
            content.appendChild(menu);
            content.appendChild(footer);
            return;
        }
        else{
            e.target.style.color = "white";
            removeAllChildren(content);
            changeStyle(menu1);
            changeStyle(menu2);
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
    function changeStyle(menu){
        const theStyle = '#ffb80e';
        menu.firstElementChild.style.color = theStyle;
    }   
})();