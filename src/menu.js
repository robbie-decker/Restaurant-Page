import {importAll} from "./index.js";

const images = importAll(require.context('./imgs/food_and_drink', false, /\.(png|jpe?g|svg|webp)$/));

const menuHTML = `
    <div id="drinks">
        <h1>Menu</h1>
        <h2>Drinks</h2>
        <h3>AfterLife</h3>
        <div class="food_item">
            <p>Johnny SilverHand</p>
            <img src="${images['johnny.webp'].default}" alt="Johnny Silverhand drink">
            <p>- A tequila old fashioned with a splash of beer and a chili garnish. For the rockerboy who never gave up.</p>
        </div>
        <div class="food_item">
            <p>David Martinez</p>
            <img src="${images['david.webp'].default}" alt="David Martinez drink">
            <p>- A shot of vodka on the rocks, topped with Nicola. Aim high and go out with a bang</p>
        </div>
        <div class="food_item">
            <p>NiCola</p>
            <img src="${images['nicola.webp'].default}" alt="NiCola picture">
            <p>- America's favorite drink!</p>
        </div>
    </div>
    <div id="food">
        <h2>Food</h2>
        <h3>Buck-a-Slice</h3>
        <div class="food_item">
            <p>Artichoke ‘N’ Avocado Pizza</p>
            <img src="${images['artichoke_pizza.webp'].default}" alt="Artichoke ‘N’ Avocado Pizza">
            <p>- Topping it to the next level</p>
        </div>
        <div class="food_item">
            <p>Tofu’d Tuna and Pineapple Pizza</p>
            <img src="${images['tofu_pizza.webp'].default}" alt="Tofu’d Tuna and Pineapple Pizza">
            <p>- Vegans can’t get enough of it</p>
        </div>
        <div class="food_item">
            <p>Locust Pepperoni Pizza</p>
            <img src="${images['locust_pizza.webp'].default}" alt="Locust Pepperoni Pizza">
            <p>- It’ll swarm your taste buds!</p>
        </div>
        <h3>Other</h3>
        <div class="food_item">
            <p>Eezybeef<p>
                <img src="${images['eezybeef.webp'].default}" alt="Eezybeef picture. Looks kinda gross">
                <p>Synthetic meat - you’re in for a treat!</p>
        </div>
        <div class="food_item">
            <p>Hawt Dawg<p>
                <img src="${images['hawt_dawg.webp'].default}" alt="Hawt Dawg picture">
                <p>The thickest dogs and tightest buns in town!</p>
        </div>
        <div class="food_item">
            <p>RealFruit<p>
                <img src="${images['realfruit.webp'].default}" alt="RealFruit picture">
                <p>It's not marketing. It's real.</p>
        </div>
        <div class="food_item">
            <p>Rammmmen<p>
                <img src="${images['rammmmen.webp'].default}" alt="Rammmen Picture. Looks like rammen">
                <p>Brand new recipe! 3X more MSG!</p>
        </div>
        <div class="food_item">
            <p>Shwabshwab (Fried Ants) Ketchup<p>
                <img src="${images['fried_ants.webp'].default}" alt="Fried Ants picture">
                <p>Your favorite food flavored with your second favorite food</p>
        </div>
    </div>
`;

export default menuHTML;
