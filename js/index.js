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

// Create selectors to point to elements
const container = document.getElementsByClassName("container");
const nav = document.querySelectorAll('header nav a');
const cta = document.getElementsByClassName("cta");
const ctaText = document.querySelector('.cta-text')
const ctaImg = document.getElementById("cta-img");
const middleImg = document.getElementById("middle-img");
const mainContent = document.getElementsByClassName("main-content");
const topContent = document.getElementsByClassName("top-content");
const bottomContent = document.getElementsByClassName("bottom-content");
const textContenth4 = document.querySelectorAll(".text-content h4");
const textContentp = document.querySelectorAll(".text-content p");

const contact = document.querySelector(".contact");

// Use IDs to update image src paths
ctaImg.setAttribute('src', siteContent['cta']['img-src']);
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Update HTML with JSON data

// nav
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

// cta
ctaText.children[0].textContent = siteContent['cta']['h1'];
ctaText.children[1].textContent = siteContent['cta']['button'];

// text content
textContenth4[0].textContent = siteContent['main-content']['features-h4'];
textContentp[0].textContent = siteContent['main-content']['features-content'];

textContenth4[1].textContent = siteContent['main-content']['about-h4'];
textContentp[1].textContent = siteContent['main-content']['about-content'];

textContenth4[2].textContent = siteContent['main-content']['services-h4'];
textContentp[2].textContent = siteContent['main-content']['services-content'];

textContenth4[3].textContent = siteContent['main-content']['product-h4'];
textContentp[3].textContent = siteContent['main-content']['product-content'];

textContenth4[4].textContent = siteContent['main-content']['vision-h4'];
textContentp[4].textContent = siteContent['main-content']['vision-content'];

// contact
contact.children[0].textContent = siteContent['contact']['contact-h4'];
contact.children[1].textContent = siteContent['contact']['address'];
contact.children[2].textContent = siteContent['contact']['phone'];
contact.children[3].textContent = siteContent['contact']['email'];
