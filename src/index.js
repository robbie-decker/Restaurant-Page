import './style.css';
import menuHTML from './menu';
import contactHTML from './contact';
import homeHTML from './home';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
export { importAll };

const content = document.getElementById("content");

const currentContent = document.createElement('div');

currentContent.innerHTML = homeHTML;
currentContent.classList.add("home");

content.appendChild(currentContent);

const nav = document.getElementById("nav_menu");
for(let link of nav.children){
    link.addEventListener('click', () => {
        // Want to stop from running if the user reclicks the same button
        console.log("this is happening");
        content.removeChild(currentContent);
        currentContent.classList.remove("home");
        // currentContent.classList.remove("menu");
        switch (link.id){
            case "home":
                currentContent.innerHTML = homeHTML;
                currentContent.classList.add("home");
                break;
            case "menu":
                currentContent.innerHTML = menuHTML;
                // currentContent.classList.add("menu");
                break;
            case "contact":
                currentContent.innerHTML = contactHTML;
                break;
        }
        content.appendChild(currentContent);     
    });
}


