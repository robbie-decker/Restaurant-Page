import yellowBorder from './imgs/yellow_border.svg';
import location from './imgs/location.png';


const homeHTML = `
    <h1>Cyberpunk's</h1>
    <p>Hi choomba! Let me jack you into the deets on this joint. The ambiance at Cyberpunks is straight out of the Afterlife. You walk in, and it's like stepping into a slice of Night City itself. The nosh is to die for as well with the menu consisting of Night City's local cuisine. This is the kind of place where you'll create memories you'll want to wipe, just so you can experience it all over again. Cyberpunks has the Night City flavors you have been craving. Stay frosty, choomba!  
    <br>- Night city local</p>
    <h2>Hours</h2>
    <p>Blah blah</p>
    <div id="location_container">
        <h2>Location</h2>
        <p>52 Kuroshio Avenue, JapanTown, Northern California</p>
        <img src="${location}" alt="Map showing the location of Cyberpunks">
    </div>
    
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

export default homeHTML;