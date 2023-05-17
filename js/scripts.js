'use strict';

// const text = 'abcdef1234';

// console.log(text.length); //.length converts the string into a table only for the console log for it to work, each character for one index
// console.log(text[2]); //javascript can convert strings into tables if you use it
// console.log(text.indexOf('f')); //you can also search by indexes

const generateToken = (length = 8) => {
    const string = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()';
    const tabRandom = [];

    for (let i = 0; i < length; i++) {
        const char = (Math.random() * (string.length - 1)).toFixed(0); //toFixed(0) zaokrągla do liczby całkowitej 0 oznacza liczby calkowite
        //string.length - 1, -1 mamy dlatego że lenght wyjdzie 20, a indexy mamy od 0 do 19, dlatego musimy odjąć 1 aby liczyło od 0 i do 19
        tabRandom.push(string[char]);
    }

    return tabRandom.join(''); //join will remove the , , , separators, just plain text
}

const button = document.querySelector('button');
const input = document.querySelector('input');
const css = document.querySelector('#css');

button.addEventListener('click', () => {
    if(input.value <= 512 && input.value > 0) {
        document.querySelector('div').innerText = generateToken(input.value); //will generate token with 20 characters, if we don't type any custom lenght it will default to the 8 lenght we declared earlier
    } else if(input.value == 12321) {
        css.href = './css/darkstyle.css';
        document.querySelector('div').innerText = 'Enabled Dark Mode';
    } else {
        alert("Cant generate tokens with negative, zero or higher length than 512 characters")
    }
});






