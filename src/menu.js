import {importAll} from "./index.js";

const images = importAll(require.context('./imgs/food_and_drink', false, /\.(png|jpe?g|svg|webp)$/));

const menuHTML = `
    <div>
        <h1>Menu</h1>
        <h2>Drinks</h2>
        <div>
            <h3>AfterLife</h3>
            <div>
                <p>Johnny SilverHand<br>
                    <img src="${images['johnny.webp'].default}" alt="Johnny Silverhand drink"><br>
                    - A tequila old fashioned with a splash of beer and a chili garnish. For the rockerboy who never gave up.</p>
            </div>
            <div>
                <p>David Martinez<br>
                <img src="${images['david.webp'].default}" alt="David Martinez drink"><br>
                - A shot of vodka on the rocks, topped with Nicola. Aim high and go out with a bang</p>
            </div>
            <div>
                <p>NiCola<br>
                <img src="${images['nicola.webp'].default}" alt="NiCola picture"><br>
                - America's favorite drink!</p>
            </div>
        </div>
    </div>
    <div>
        <h2>Food</h2>
        <h3>Buck-a-Slice</h3>
        <div>
            <p>Artichoke ‘N’ Avocado Pizza<br>
                <img src="${images['artichoke_pizza.webp'].default}" alt="Artichoke ‘N’ Avocado Pizza"><br>
                - Topping it to the next level</p>
        </div>
        <div>
            <p>Tofu’d Tuna and Pineapple Pizza<br>
                <img src="${images['tofu_pizza.webp'].default}" alt="Tofu’d Tuna and Pineapple Pizza"><br>
                - Vegans can’t get enough of it</p>
        </div>
        <div>
            <p>Locust Pepperoni Pizza<br>
                <img src="${images['locust_pizza.webp'].default}" alt="Locust Pepperoni Pizza"><br>
                - It’ll swarm your taste buds!</p>
        </div>
        <h3>Other</h3>
        <div>
            <p>Eezybeef<br>
                <img src="${images['eezybeef.webp'].default}" alt="Eezybeef picture. Looks kinda gross"><br>
                Synthetic meat - you’re in for a treat!</p>
        </div>
        <div>
            <p>Hawt Dawg<br>
                <img src="${images['hawt_dawg.webp'].default}" alt="Hawt Dawg picture"><br>
                The thickest dogs and tightest buns in town!</p>
        </div>
        <div>
            <p>RealFruit<br>
                <img src="${images['hawt_dawg.webp'].default}" alt="RealFruit picture"><br>
                It's not marketing. It's real.</p>
        </div>
        <div>
            <p>Rammmmen<br>
                <img src="${images['rammmmen.webp'].default}" alt="Rammmen Picture. Looks like rammen"><br>
                Brand new recipe! 3X more MSG!</p>
        </div>
        <div>
            <p>Shwabshwab (Fried Ants) Ketchup<br>
                <img src="${images['fried_ants.webp'].default}" alt="Fried Ants picture"><br>
                Your favorite food flavored with your second favorite food</p>
        </div>
    </div>
`;

export default menuHTML;
