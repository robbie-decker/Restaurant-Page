import {importAll} from "./index.js";

const images = importAll(require.context('./imgs/people', false, /\.(png|jpe?g|svg|webp)$/));

const contactHTML = `
    <h1>Contact Us</h1>
    <div class="yellow_border">
        <p class="loading_info">Contact page loading...</p>
    </div>
    <div class="top_seperator"></div>
    <div id="contact_gallery">
        <div class="contact_container">
            <img src="${images['Johnny_Silverhand.webp']}" alt="Johnny Silverhand picture">
            <div class="overlay">
                <h4>Johnny SilverHand</h4>
                <p>- Blurb about Johnny</p>
            </div>
        </div>
        <div class="contact_container">
            <img src="${images['Judy_Alvarez.webp']}" alt="Judy Alvarez Picture">
            <div class="overlay">
                <h4>Judy Alverez</h4>
                <p>- Blurb about Judy</p>
            </div>
        </div>
        <div class="contact_container">
            <img src="${images['Rogue.webp']}" alt="Rogue Amendiares Picture">
            <div class="overlay">
                <h4>Rogue Amendiares</h4>
                <p>- Blurb about Rogue</p>
            </div>
        </div>
        <div class="contact_container">
            <img src="${images['ClaireRussell.webp']}" alt="Claire Russell Picture">
            <div class="overlay">
                <h4>Claire Russell</h4>
                <p>- Blurb about Claire</p>
            </div>
        </div>
    </div>
    <div class="bottom_seperator"></div>
`;


export default contactHTML;