import './style.css';
import menuHTML from './menu';
import contactHTML from './contact';
import homeHTML from './home';

const content = document.getElementById("content");

const currentContent = document.createElement('div');

currentContent.innerHTML = homeHTML;

content.appendChild(currentContent);

const nav = document.getElementById("nav_menu");
for(let link of nav.children){
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


