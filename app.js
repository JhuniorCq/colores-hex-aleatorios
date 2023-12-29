
const botonColor = document.getElementById('cambiar-color'); //Traigo al <button id="cambiar-color">

const color = document.getElementById('color'); //Traigo al <p id="color">

const contenedor = document.getElementsByClassName('contenedor'); // Traigo al <div id="contenedor">

const hexadecimales = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const generarColor = () => {
    let colorGenerado = '';
    let hexadecimalesTamanio = hexadecimales.length; //16
    let rangoMaximo = hexadecimalesTamanio - 1; //15

    for(let i=0; i<6; i++) {
        let digito = Math.floor(Math.random()*(rangoMaximo-0+1)+0);
        colorGenerado += hexadecimales[digito];
    }

    return "#"+colorGenerado;
}

const cambiarColor = () => {
    const colorGenerado = color.innerText = generarColor();
    contenedor[0].style.backgroundColor = colorGenerado;
}

botonColor.addEventListener('click', cambiarColor);