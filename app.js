let start =document.getElementById('output');
let initialInput = document.getElementById('lbsInput');
let grams = document.getElementById('gramsOutput');
let kilograms = document.getElementById('kgOutput');
let ounces = document.getElementById('ozOutput');

start.style.visibility = 'hidden';
initialInput.addEventListener('input', function(e){
    start.style.visibility = 'visible';
    let pounds = e.target.value;
   grams.innerHTML = pounds/0.0022046;
   kilograms.innerHTML = pounds/2.2046;
   ounces.innerHTML = pounds*16;
})