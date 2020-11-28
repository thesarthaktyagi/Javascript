'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log('I can drive');
*/

// const interface = 'Audio';

// const private = 543;

/*
function logger() {
    console.log('My name is Sarthak Tyagi');
}

// Calling / running / invoking the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// Lets pass the arguments to the function

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// We simply logging the result of the function here
console.log(fruitProcessor(4,5));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);
*/

/*
function calcAge1(birthYear) {
    return 2021 - birthYear;
}

const age1 = calcAge1(1999);
console.log(age1);


const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1999);

console.log(age1, age2)
*/

// Arrow functions

/*
const calcAge3 = birthYear => 2037 - birthYear;

const Age3 = calcAge3(1999);
console.log(Age3);
*/

/*
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2020 - birthYear;
    const retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} retires in ${retirementAge} years`
}

console.log(yearsUntilRetirement(1999, 'Sarthak'));
console.log(yearsUntilRetirement(1969, 'Vinod'));


function cutFuitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFuitPieces(apples);
    const orangePieces = cutFuitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const checkWinner = (avgDolphins, avgKoalas) => {
    if(avgDolphins > avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if(avgKoalas > avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team won');
    }
    }

const calcAverage = (dolphinsScore1, dolphinsScore2, dolphinsScore3, KoalasScore1, KoalasScore2, KoalasScore3) => {
    const avgDolphins = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
    const avgKoalas = (KoalasScore1 + KoalasScore2 + KoalasScore3) / 3;
    checkWinner(avgDolphins, avgKoalas);
    
}


calcAverage(44, 23, 71, 65, 54, 49);
calcAverage(85, 54, 41, 23, 34, 27);


// Array

const friends = ['Vikas', 'Shubham', 'Archit', 'Kanishk'];
console.log(friends);

const years = new Array(1991, 1992, 1993, 1994);
console.log(years);

console.log(friends[0]);

console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[3] = 'Nobody';
console.log(friends);


friends[3] = 'Kanishk';
console.log(friends);

const sarthak = ['Sarthak', 'Tyagi', 1999, 2021 - 1999];
console.log(sarthak[2]);



// Add Elements
const friends = ['Vikas', 'Shubham', 'Archit', 'Kanishk'];
const newLength = friends.push('Vipin');
console.log(friends);

console.log(newLength);

friends.unshift('Rishav');
friends.unshift('Shivam');
friends.unshift('Ashish');

console.log(friends);

// Remove elements

friends.pop(); // remove from the last
console.log(friends);

const popped = friends.pop();
console.log(popped);


friends.shift(); // remove from the first
console.log(friends);

console.log(friends.indexOf('Vikas'));

console.log(friends.includes('Vikas'));

function calcTip(bill) {
    if(bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

*/