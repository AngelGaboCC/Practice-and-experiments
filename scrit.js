const h1 = document.querySelector('h1');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.getElementById('Result');
const formu = document.querySelector('#formulario');


formu.addEventListener('submit', sumaDeInputs);

function sumaDeInputs() {
    event.preventDefault();
    const suma = input1.value + input2.value;
    pResult.innerText = 'Resultado:' + suma;
    
}


//Manipulacion HTRML con JS

// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafo = document.getElementsByClassName('Parrafito');
// const otroParrafo = document.getElementById('Parrafo');
// const input = document.querySelector('input');

// console.log({
//     h1,
//     p,
//     parrafo,
//     otroParrafo,
//     input,
// });

// h1.innerText = 'patito' ;
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'Rojo');
// h1.classList.add('rojo')
// h1.classList.remove('verde')

// input.value = '456';

// const img = document.createElement('img');
// img.setAttribute('src', 'https://media.vandal.net/i/960x720/8-2021/202182610185270_1.jpg');
// console.log(img);

// otroParrafo.innerHTML = ''
// otroParrafo.append(img);