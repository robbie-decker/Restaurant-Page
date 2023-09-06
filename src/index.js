import './style.css';

const content = document.getElementById("content");

const p = document.createElement('p');

p.textContent = "This is cool";
// p.classList.add("text");
content.appendChild(p);
