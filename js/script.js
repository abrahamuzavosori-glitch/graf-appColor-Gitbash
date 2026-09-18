// Modificación para la actividad 1.3
// Controles deslizantes
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");

// Campos numéricos
const rojoDecimal = document.getElementById("rojoDecimal");
const verdeDecimal = document.getElementById("verdeDecimal");
const azulDecimal = document.getElementById("azulDecimal");

// Selector de color
const colorPicker = document.getElementById("colorPicker");

// Valores mostrados
const valorRojo = document.getElementById("valorRojo");
const valorVerde = document.getElementById("valorVerde");
const valorAzul = document.getElementById("valorAzul");

// Resultado
const colorPreview = document.getElementById("colorPreview");
const codigoRGB = document.getElementById("codigoRGB");
const codigoHex = document.getElementById("codigoHex");


// ----------------------------------
// RGB A HEXADECIMAL
// ----------------------------------

function rgbAHex(r, g, b) {

    const rojoHex = Number(r).toString(16).padStart(2, "0");
    const verdeHex = Number(g).toString(16).padStart(2, "0");
    const azulHex = Number(b).toString(16).padStart(2, "0");

    return "#" + rojoHex + verdeHex + azulHex;
}


// ----------------------------------
// HEXADECIMAL A RGB
// ----------------------------------

function hexARGB(hex) {

    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    return {
        r: r,
        g: g,
        b: b
    };
}


// ----------------------------------
// ACTUALIZAR COLOR
// ----------------------------------

function actualizarColor(r, g, b) {

    // Actualizar sliders
    rojo.value = r;
    verde.value = g;
    azul.value = b;

    // Actualizar campos numéricos
    rojoDecimal.value = r;
    verdeDecimal.value = g;
    azulDecimal.value = b;

    // Mostrar valores
    valorRojo.textContent = r;
    valorVerde.textContent = g;
    valorAzul.textContent = b;

    // Crear RGB
    const colorRGB = `rgb(${r}, ${g}, ${b})`;

    // Crear HEX
    const colorHex = rgbAHex(r, g, b);

    // Cambiar cuadro de color
    colorPreview.style.backgroundColor = colorRGB;

    // Mostrar RGB
    codigoRGB.textContent = colorRGB;

    // Mostrar HEX
    codigoHex.textContent = colorHex;

    // Actualizar selector
    colorPicker.value = colorHex;
}


// ----------------------------------
// CAMBIAR DESDE SLIDERS
// ----------------------------------

function actualizarDesdeSlider() {

    const r = rojo.value;
    const g = verde.value;
    const b = azul.value;

    actualizarColor(r, g, b);
}


// ----------------------------------
// CAMBIAR ESCRIBIENDO RGB
// ----------------------------------

function actualizarDesdeDecimal() {

    let r = parseInt(rojoDecimal.value);
    let g = parseInt(verdeDecimal.value);
    let b = parseInt(azulDecimal.value);

    // Si está vacío
    if (isNaN(r)) r = 0;
    if (isNaN(g)) g = 0;
    if (isNaN(b)) b = 0;

    // Mantener valores entre 0 y 255
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    actualizarColor(r, g, b);
}


// ----------------------------------
// CAMBIAR DESDE COLOR PICKER
// ----------------------------------

function actualizarDesdeColorPicker() {

    const hex = colorPicker.value;

    const rgb = hexARGB(hex);

    actualizarColor(rgb.r, rgb.g, rgb.b);
}


// ----------------------------------
// EVENTOS
// ----------------------------------

// Sliders
rojo.addEventListener("input", actualizarDesdeSlider);
verde.addEventListener("input", actualizarDesdeSlider);
azul.addEventListener("input", actualizarDesdeSlider);

// Campos numéricos
rojoDecimal.addEventListener("input", actualizarDesdeDecimal);
verdeDecimal.addEventListener("input", actualizarDesdeDecimal);
azulDecimal.addEventListener("input", actualizarDesdeDecimal);

// Color picker
colorPicker.addEventListener("input", actualizarDesdeColorPicker);


// ----------------------------------
// COLOR INICIAL
// ----------------------------------

actualizarColor(128, 128, 128);