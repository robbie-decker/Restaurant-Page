import {importAll} from "./index.js";

const images = importAll(require.context('./imgs/people', false, /\.(png|jpe?g|svg|webp)$/));

const contactHTML = `
    <h1>Contact Us</h1>
    <div class="top_seperator"></div>
    <div id="contact_gallery">
        <div class="contact_container">
            <p>Johnny SilverHand</p>
            <img src="${images['Johnny_Silverhand.webp'].default}" alt="Johnny Silverhand picture">
        </div>
        <div class="contact_container">
            <p>Judy Alverez</p>
            <img src="${images['Judy_Alvarez.webp'].default}" alt="Judy Alvarez Picture">
        </div>
        <div class="contact_container">
            <p>Rogue Amendiares</p>
            <img src="${images['Rogue.webp'].default}" alt="Rogue Amendiares Picture">
        </div>
        <div class="contact_container">
            <p>Claire Russell</p>
            <img src="${images['ClaireRussell.webp'].default}" alt="Claire Russell Picture">
        </div>
    </div>
    <div class="bottom_seperator"></div>
`;


export default contactHTML;