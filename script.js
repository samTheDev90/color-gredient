
// alert('working');
const doneButton = document.querySelector('.done-button');
const input1 = document.querySelector('.js-input1');
const input2 = document.querySelector('.js-input2');

doneButton.addEventListener('click',()=>{

   let color1 = input1.value;
   let color2 = input2.value;

   document.body.style.backgroundImage=` linear-gradient(to right, ${color1},${color2})`;

});