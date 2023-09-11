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
var r = document.querySelector(':root');


currentContent.innerHTML = homeHTML;
currentContent.classList.add("home");

content.appendChild(currentContent);

const nav = document.getElementById("nav_menu");
for(let link of nav.children){
    link.addEventListener('click', () => {
        // Want to stop from running if the user reclicks the same button
        for(let option of nav.children){
            option.classList.remove("active");
        }
        console.log("this is happening");
        content.removeChild(currentContent);
        currentContent.classList.remove("home");
        currentContent.classList.remove("contact");
        currentContent.classList.remove("menu");
        switch (link.id){
            case "home":
                currentContent.innerHTML = homeHTML;
                currentContent.classList.add("home");
                link.classList.add("active");
                r.style.setProperty('--current_color', 'var(--neonYellow)');
                console.log(r);
                break;
            case "menu":
                currentContent.innerHTML = menuHTML;
                currentContent.classList.add("menu");
                link.classList.add("active");
                r.style.setProperty('--current_color', 'var(--cyberRed)');
                console.log(r);
                break;
            case "contact":
                currentContent.innerHTML = contactHTML;
                currentContent.classList.add("contact");
                link.classList.add("active");
                r.style.setProperty('--current_color', 'var(--lightBlue)');
                break;
        }
        content.appendChild(currentContent);     
    });
}


