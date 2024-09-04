const minutosElemento = document.querySelector('.minutos');
const segundosElemento = document.querySelector('.segundo');
const horaElemento = document.querySelector('.horas');


function horaReal() {
    const now = new Date();
    horaElemento.textContent = now.getHours().toString().padStart(2, '0');
    segundosElemento.textContent = now.getSeconds().toString().padStart(2, '0');
    minutosElemento.textContent = now.getMinutes().toString().padStart(2, '0');
}
setInterval(horaReal, 1000);