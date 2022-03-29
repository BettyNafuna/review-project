// Start your code ***HERE*** =========

// create an array with all possible character types: Uppercase, Lowercase, numbers, and symbols stored in a variable
const chars = ['b', 'n', 'k', 1, 8, 0, 'l', 'W', 'd', 4, 'g', 'D', 6, 7, 9, 's', 'M', 'R', 'T'];
//const password = '';
// create a global variable called "pwLength" with a number between 10 and 18
const pwLength = 16;
// Using the above array and password length variable, create a random password using a for loop inside of a function called "addNewPassword" either saved as an arrow function variable or a traditional function
function addNewPassword () {
    let password = 12;
    for (let i = 0; i < pwLength; i++) {
const randomNumber = Math.floor(Math.random() * chars.length);
password += chars[randomNumber];
    };

    return password;   
};
// ========= ⬇ DO NOT TOUCH THIS CODE ⬇ ======

let genBtn = document.getElementById("btnGen");
let buttonHandler = () => {
    document.getElementById("password").value = addNewPassword();
};
// Event listener for generate PW button
genBtn.addEventListener("click", buttonHandler);

// ========= ⬆ DO NOT TOUCH THIS CODE ⬆ ======
