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

    let heroDiv, heroHeading, heroOverlay, para;

    heroDiv = domMani.myCreateElement(heroDiv, "div")
    heroDiv.className = "hero-div";

    heroOverlay = domMani.myCreateElement(heroOverlay, 'div');
    heroOverlay.className = "overlay";

    heroHeading = domMani.myCreateElement(heroHeading, "h2");
    heroHeading.className = "hero-heading";
    heroHeading.textContent = "Contact Us";

    para = domMani.myCreateElement(para, "p");
    para.textContent = "Drop us a line or give us heads up of you're interested in visiting us";

    
    heroDiv.appendChild(heroHeading);
    heroDiv.appendChild(para);
    contact.appendChild(heroOverlay);
    contact.appendChild(heroDiv);

    let formContainer, myForm, formheading, formpara, formdiv1, formdiv2, inp, btn;

    formContainer = domMani.myCreateElement(formContainer, 'div');
    formContainer.className = "form-container";

    myForm = domMani.myCreateElement(myForm, 'form');
    formheading = domMani.myCreateElement(formheading, 'h2');
    formheading.textContent = "Get in Touch";
    formheading.className = "form-heading";
    myForm.appendChild(formheading)

    formpara = domMani.myCreateElement(formpara, 'p');
    formpara.className = "form-para";
    formpara.textContent = "let us satisfy your craving";
    myForm.appendChild(formpara);

    formdiv1 = domMani.myCreateElement(formdiv1, 'div');
    formdiv1.className = "form-div1";

    // input elements
    inp = domMani.myCreateElement(inp, 'input');
    inp.type = "text";
    inp.placeholder = "Your name";
    formdiv1.appendChild(inp);

    inp = domMani.myCreateElement(inp, 'input');
    inp.type = "number";
    inp.placeholder = "Your Phone Number";
    formdiv1.appendChild(inp);

    inp = domMani.myCreateElement(inp, 'input');
    inp.type = "email";
    inp.placeholder = "Your Email";
    formdiv1.appendChild(inp);
    myForm.appendChild(formdiv1);


    formdiv2 = domMani.myCreateElement(formdiv2, 'div');
    formdiv2.className = "form-div2";

    inp = domMani.myCreateElement(inp, 'input');
    inp.type = "textarea";
    inp.placeholder = "Your Message";
    formdiv2.appendChild(inp);

    btn = domMani.myCreateElement(btn, 'button');
    btn.type = "submit";
    btn.textContent = "Submit";
    formdiv2.appendChild(btn);
    console.log(btn);

    myForm.appendChild(formdiv2);

    formContainer.appendChild(myForm);
    contact.appendChild(formContainer);

})();

export {contact}