import {importAll} from "./index.js";

const images = importAll(require.context('./imgs/food_and_drink', false, /\.(png|jpe?g|svg|webp)$/));

const menuHTML = `
    <h1>Menu</h1>
    <h2>Drinks</h2>
    <div>
        <h3>AfterLife</h3>
        <p>Johnny SilverHand</p>
        <p>David Martinez</p>
        <p>NiCola</p>
    </div>

    <h2>Food</h2>
    <h3>Buck-a-Slice</h3>
    <p>Artichoke ‘N’ Avocado Pizza<br>
        - Topping it to the next level</p>
    <p>Tofu’d Tuna and Pineapple Pizza<br>
        - Vegans can’t get enough of it</p>
    <p>Locust Pepperoni Pizza<br>
        <img src="${images['locust_pizza.webp'].default}" alt="Locust Pepperoni Pizza"><br>
        - It’ll swarm your taste buds!</p>
    <h3>Other</h3>
    <p>Eezybeef<br>
        <img src="${images['eezybeef.webp'].default}" alt="Eezybeef picture. Looks kinda gross"><br>
        Synthetic meat - you’re in for a treat!</p>
    <p>Hawt Dawg<br>
        The thickest dogs and tightest buns in town!</p>
    <p>Rammmmen<br>
        Brand new recipe! 3X more MSG!</p>
    <p>Shwabshwab (Fried Ants) Ketchup<br>
        Your favorite food flavored with your second favorite food</p>
`;

export default menuHTML;
