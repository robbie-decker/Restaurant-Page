import {importAll} from "./index.js";

const images = importAll(require.context('./imgs/food_and_drink', false, /\.(png|jpe?g|svg|webp)$/));
const menuHTML = `
<h1>Menu</h1>
<div class="yellow_border">
    <p class="loading_info"> Menu loading...</p>
</div>
    <div id="drinks">
        <h2>Drinks</h2>
        <h3>AfterLife</h3>
        <div class="food_item">
            <div class="border">
                <p><strong>Johnny SilverHand</strong></p>
                <img src="${images['johnny.webp']}" alt="Johnny Silverhand drink">
                <p class="food_description">- A tequila old fashioned with a splash of beer and a chili garnish. For the rockerboy who never gave up.</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>David Martinez</p>
                <img src="${images['david.webp']}" alt="David Martinez drink">
                <p class="food_description">- A shot of vodka on the rocks, topped with Nicola. Aim high and go out with a bang</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>NiCola</p>
                <img src="${images['nicola.webp']}" alt="NiCola picture">
                <p class="food_description">- America's favorite drink!</p>
            </div>
        </div>
    </div>
    <div id="food">
        <h2>Food</h2>
        <h3>Buck-a-Slice</h3>
        <div class="food_item">
            <div class="border">
                <p>Artichoke ‘N’ Avocado Pizza</p>
                <img src="${images['artichoke_pizza.webp']}" alt="Artichoke ‘N’ Avocado Pizza">
                <p class="food_description">- Topping it to the next level</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Tofu’d Tuna and Pineapple Pizza</p>
                <img src="${images['tofu_pizza.webp']}" alt="Tofu’d Tuna and Pineapple Pizza">
                <p class="food_description">- Vegans can’t get enough of it</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Locust Pepperoni Pizza</p>
                <img src="${images['locust_pizza.webp']}" alt="Locust Pepperoni Pizza">
                <p class="food_description">- It’ll swarm your taste buds!</p>
            </div>
        </div>
        <h3>Other</h3>
        <div class="food_item">
            <div class="border">
                <p>Eezybeef<p>
                <img src="${images['eezybeef.webp']}" alt="Eezybeef picture. Looks kinda gross">
                <p class="food_description">Synthetic meat - you’re in for a treat!</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Hawt Dawg<p>
                <img src="${images['hawt_dawg.webp']}" alt="Hawt Dawg picture">
                <p class="food_description">The thickest dogs and tightest buns in town!</p>
            </div>      
        </div>
        <div class="food_item">
            <div class="border">
                <p>RealFruit<p>
                <img src="${images['realfruit.webp']}" alt="RealFruit picture">
                <p class="food_description">It's not marketing. It's real.</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Rammmmen<p>
                <img src="${images['rammmmen.webp']}" alt="Rammmen Picture. Looks like rammen">
                <p class="food_description">Brand new recipe! 3X more MSG!</p>
            </div>
        </div>
        <div class="food_item">
            <div class="border">
                <p>Shwabshwab (Fried Ants) Ketchup<p>
                <img src="${images['fried_ants.webp']}" alt="Fried Ants picture">
                <p class="food_description">Your favorite food flavored with your second favorite food</p>
            </div>
        </div>
    </div>
`;

export default menuHTML;
