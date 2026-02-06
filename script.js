let ch = "0123456789abcdef";

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let d1= document.getElementById("d1");
let hex1 = "#";
let hex2 = "#";

function generateHex() {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += ch[Math.floor(Math.random() * 16)];
    }
    return hex;
}

function updateGradient() {
    document.body.style.background =`linear-gradient(to right, ${hex1}, ${hex2})`;
    d1.innerText = `background-image: linear-gradient(to right, ${hex1}, ${hex2});`
}

b1.addEventListener("click", () => {
    hex1 = generateHex();
    b1.innerText = hex1;
    b2.style.backgroundColor = hex1;
    updateGradient();
});

b2.addEventListener("click", () => {
    hex2 = generateHex();
    b2.innerText = hex2;
    b1.style.backgroundColor = hex2;
    updateGradient();
});


d1.addEventListener('click',()=>{
    let text  = d1.innerText;
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
})
