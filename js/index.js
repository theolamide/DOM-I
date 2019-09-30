const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let imgCta = document.getElementById("cta-img");
imgCta.setAttribute('src', siteContent["cta"]["img-src"])
imgCta.alt = "Image of a code snippet"

let imgMiddle = document.getElementById("middle-img");
imgMiddle.setAttribute('src', siteContent["main-content"]["middle-img-src"])
imgMiddle.alt = "Image of code snippets across the screen"

let ctaH1 = document.querySelector("h1");
ctaH1.style.whiteSpace = 'pre';
ctaH1.textContent = 'DOM\n Is\n Awesome';


let ctaBtnTxt = document.querySelector("button");
ctaBtnTxt.textContent = 'Get Started'

let footerTxt = document.querySelector("footer");
footerTxt.textContent = 'Copyright Great Idea! 2018'

let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = 'Contact'

let contactP1 = document.querySelector(".contact p");
console.log(contactP1)
contactP1.style.width = "200px";
contactP1.style.whitespace = "pre";
contactP1.textContent = "123 Way 456 Street Somewhere, USA\n 1-(888)-888-8888\n sales@greatidea.io"

let navItem = document.getElementsByTagName('a');
navItem[0].textContent = "Services"
navItem[1].textContent = "Product"
navItem[2].textContent = "Vision"
navItem[3].textContent = "Features"
navItem[4].textContent = "About"
navItem[5].textContent = "Contact"

const topContentText = document.querySelectorAll('.top-content .text-content');
console.log(topContentText);
topContentText[0].firstElementChild.textContent = "Features"
topContentText[0].lastElementChild.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

topContentText[1].firstElementChild.textContent = "About"
topContentText[1].lastElementChild.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const btmContentText = document.querySelectorAll('.bottom-content .text-content');
console.log(btmContentText);
btmContentText[0].firstElementChild.textContent = "Services"
btmContentText[0].lastElementChild.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

btmContentText[1].firstElementChild.textContent = "Product"
btmContentText[1].lastElementChild.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

btmContentText[2].firstElementChild.textContent = "Vision"
btmContentText[2].lastElementChild.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."






