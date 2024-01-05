import './style/index.css';
import {header} from "./header.js";
import {footer} from "./footer.js";
import {mainContent} from "./main.js";

export default function domManipulation(){
    function myCreateElement(variableName, element){
        variableName = document.createElement(element);
        return variableName;
    }
    return {myCreateElement}
}

(function(){
    const content = document.querySelector('#content');

    content.appendChild(header);
    content.appendChild(mainContent)
    content.appendChild(footer);
})();




