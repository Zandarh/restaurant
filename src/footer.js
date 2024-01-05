import './style/footer.css';
import domManipulation from "./index.js";

//The footer
let footer;
(function(){
    const domMani = domManipulation();

    footer = domMani.myCreateElement(footer, 'div');
    footer.className =  "footer";

    let footerText, footerLink, link;

    footerText = domMani.myCreateElement(footerText, "p");
    const text = `Copyright ${new Date().getFullYear()} .`;
    footerText.textContent = text;
    footer.appendChild(footerText);

    // anchor tag
    footerLink = domMani.myCreateElement(footerLink, "a");
    footerLink.href = "https://github.com/Zandarh.com/restaurant"
    link = domMani.myCreateElement(link, "p")
    link.textContent = " Zandarh";

    footerLink.appendChild(link);
    footer.appendChild(footerLink);
})();

export {footer}