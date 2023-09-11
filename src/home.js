import location from './imgs/location.png';
import seperator from './imgs/seperator.svg'


const homeHTML = `
    <h1>Cyberpunk's</h1> 
    <div class="yellow_border">
        <p class="loading_info">Home page loading...</p>
    </div>
        <div id="intro">
            <p>Hi choomba! Let me jack you into the deets on this joint. The ambiance at Cyberpunks is straight out of the Afterlife. You walk in, and it's like stepping into a slice of Night City itself. The nosh is to die for as well with the menu consisting of Night City's local cuisine. This is the kind of place where you'll create memories you'll want to wipe, just so you can experience it all over again. Cyberpunks has the Night City flavors you have been craving. Stay frosty, choomba!</p>
            <p class="author">- Night city local</p>
        </div>
        <div class="seperator">
            <span class="seperator-left"></span>
            <span class="seperator-right"></span>
        </div>
        <div class="hours">
            <h2>Hours</h2>
            <p>Sunday: 10am - 10pm</p>
            <p>Monday: 12pm - 8pm</p>
            <p>Tuesday: 12pm - 8pm</p>
            <p>Wednesday: 12pm - 8pm</p>
            <p>Thursday: 12pm - 8pm</p>
            <p>Friday: 10am - 2am</p>
            <p>Saturday: 10am - 2am</p>
        </div>
        <img class="dirty_seperator" src="${seperator}" alt="Seperator">
        <div id="location_container">
            <h2>Location</h2>
            <p>52 Kuroshio Avenue, JapanTown, Northern California</p>
            <img id="map" src="${location}" alt="Map showing the location of Cyberpunks">
        </div>
    
    
    <!-- <div class="top_seperator"></div>
    <div class="bottom_seperator"></div>
    <div class="cut_container"></div>
    <div class="cut_container" style="width: 42px;"></div>
    <div class="black_container"></div>
    <div class="gallery_container">
        <span class= "gallery_item_arrow"></span>
        <div class="myImg"></div>
    </div>-->
`;

export default homeHTML;