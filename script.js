let refreshbtn = document.querySelector(".btn");
let container = document.querySelector(".container");
let maxPaletteBoxes = 16;
let generatePalette = () => {
    container.innerHTML = "";  //clearing the container
    for(let i=0; i<maxPaletteBoxes; i++){
        // generating a random hex color code
        let randomHex = Math.floor(Math.random()*0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6,"0")}`;
        // padStart will append 0 after # to ensure that the randomHex string is always 6 characters long.

        // creating a new "li" element and inserting it to the container
        let color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`;
        container.appendChild(color);
    }
}
generatePalette();
refreshbtn.addEventListener("click", generatePalette);