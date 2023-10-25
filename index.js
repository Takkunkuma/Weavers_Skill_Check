let number = document.querySelector('#number');
let plusbutton = document.querySelector('#plus');
let minusbutton = document.querySelector('#minus');
let background = document.querySelector('#background');
let container = document.querySelector('.container');

// console.log(number);
// console.log(plusbutton);
// console.log(minusbutton);
// console.log(background);
// console.log(number.textContent);

plusbutton.addEventListener('click', () => {
    console.log('Plus Clicked!');
    let newNum = parseInt(number.textContent) + 1;
    number.textContent = newNum;
});

minusbutton.addEventListener('click', () => {
    console.log('Minus Clicked!');
    let newNum = parseInt(number.textContent) - 1;
    number.textContent = newNum;
});

background.addEventListener('click', () => {
    console.log('background clicked!');
    container.classList.toggle('dark');
    // if(!container.classList.contains('dark')){
    //     container.classList.add('dark'); 
    // } else {
    //     container.classList.remove('dark');
    // }
});