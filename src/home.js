import yellowBorder from './imgs/yellow_border.svg';

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

export default homeHTML;