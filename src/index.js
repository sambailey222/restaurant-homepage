import {renderHTML} from './renderHTML.js';
import {renderMenuTab} from './menu.js';
import {renderContactTab} from './contact.js';

renderHTML();


const contentDiv = document.getElementById("content"); 

const homeBtn = document.getElementById("home");
 homeBtn.addEventListener("click", () => homeTab());

const logoBtn = document.getElementById("logo");
logoBtn.addEventListener("click", () => homeTab());

 function homeTab() {
    contentDiv.innerHTML = "";
    renderHTML();
 }

 

 const menuBtn = document.getElementById("menu");
 menuBtn.addEventListener("click", () => menuTab());

 function menuTab() {
    contentDiv.innerHTML = "";
    renderMenuTab();
 }

 const contactBtn = document.getElementById("contact");
 contactBtn.addEventListener("click", () => contactTab());

 function contactTab() {
    contentDiv.innerHTML = "";
    renderContactTab();
 }