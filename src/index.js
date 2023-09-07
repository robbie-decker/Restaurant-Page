import './style.css';
import yellowBorder from './yellow_border.svg';

const content = document.getElementById("content");

const currentContent = document.createElement('div');


const homeHTML = `
    <div class="top_seperator"></div>
    <div class="bottom_seperator"></div>
    <div class="cut_container"></div>
    <div class="cut_container" style="width: 42px;"></div>
    <div class="black_container"></div>
    <div class="gallery_container">
        <span class= "gallery_item_arrow"></span>
        <div class="myImg"></div>
    </div>
    <img class=yellow_border src=${yellowBorder} alt="Border Image">
`;

const menuHTML = `
    <p>Here is the menu. Yum! </p>
`;
const contactHTML = `
    <p>Here are some people</p>
`;


currentContent.innerHTML = homeHTML;

content.appendChild(currentContent);

const header = document.getElementById("nav_menu");
for(let link of header.children){
    link.addEventListener('click', () => {
        // Want to stop from running if the user reclicks the same button
        console.log("this is happening");
        content.removeChild(currentContent);
        switch (link.id){
            case "home":
                currentContent.innerHTML = homeHTML;
                break;
            case "menu":
                currentContent.innerHTML = menuHTML;
                break;
            case "contact":
                currentContent.innerHTML = contactHTML;
                break;
        }
        content.appendChild(currentContent);     
    });
}


