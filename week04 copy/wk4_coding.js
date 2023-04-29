//* 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];


//a. subtract the value of the first element in the array from the value in the last element of the array

console.log(ages[ages.length - 1] - ages[0]); // subtracting 3 from 93 should output 90

//b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(30); //adding age of 30
console.log(ages[ages.length - 1] - ages[0]); //subtracting 3 from 30 = output of 27

//c. Use a loop to iterate through the array and calculate the average age. 

 let sum = 0; // since array has already been declared up top we don't have to declare here.

for ( let i = 0; i < ages.length; i++) {
        sum += ages[i] 
    }

    let average = sum / ages.length;

    console.log(average);  // the average should output 28.88888888889 (3 + 9 + 23 + 64 + 2 + 8 + 28 + 93 + 30) / 9


//*2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ["Sam" , "Tommy", "Tim", "Sally" , "Buck", "Bob"];

//a. Use a loop to iterate through the array and calculate the average number of letters per name. 

let totalLetters = 0;
for( i = 0; i < names.length; i++) {
    totalLetters += names[i].length      // this is going through each name in the array and adding the letter sum to the totalLetters  which we declared as 0
};                                       // this is done by using the .length property

let averageLetters = totalLetters / names.length;
console.log(averageLetters); // output should be 3.83  23 letters/ 6 names

//b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

let allNames = names[0]; // this is starting with the first name in the array [0]

for (let i = 1; i < names.length; i++) {         // let i = 1 - this is choosing the second name in the array
  allNames = allNames.concat(" ", names[i]);
}

console.log(allNames);


//3.How do you access the last element of any array?

console.log(names.length - 1); // we use the .length property - 1

//4.How do you access the first element of any array?

console.log(names[0]);  // we use the array name, which is "name" in this example, and add the 0 in brackets to pull the first element.

//5.Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

for (let i = 0; i < names.length; i++) {  // the loop is going through each name in the names array
  nameLengths.push(names[i].length);      // it is then "pushing" the number into the open array nameLengths
}

console.log(nameLengths);

//6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let nameSum = 0;

for ( let i = 0; i < nameLengths.length; i++) {   // we are running a loop through the name lengths array
    nameSum += (nameLengths[i]);                   // everytime it iterates it is adding the nameLengths to the nameSum

};

console.log(nameSum); // output should be 23


//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).



//8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName) {    //creatinga function named fullName that holds two variables
    return firstName + '' + lastName;       // telling the function to return the first and last name with a space in between
} ;

console.log(fullName("Cynthia" , "Holland"));  // providing a name to return in place of the variables

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbersArr = [50, 25, 50]

function sumOfNumbers(numbersArr) {
    let sum = 0;
    for ( let i = 0; i < numbersArr.length; i++) {
        sum += numbersArr[i]
    }
return sum > 100;                                   // this is telling us to return any sum over 100

}

console.log(sumOfNumbers(numbersArr)); // the output should be true bc the sum is 125
 
//10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.


function averageFinder(numbersArr) {
    let sum = 0; 
    for(let i = 0; i < numbersArr.length; i++) {
        sum += numbersArr[i]; 
    } return sum / numbersArr.length;

    
}

console.log(averageFinder(numbersArr));


//11.  Write a function that takes two arrays of numbers and returns true if the average of the elements 
//in the first array is greater than the average of the elements in the second array.
let arr2 = [25, 75, 50]
let arr1 = [5, 10, 15]

function compareAverage(arr1, arr2) {
    let sum = 0;
    for(let i = 0; i < arr1.length; i++) {
        sum += arr1[i]; 
    } let avg1 = sum / arr1.length;
    let sum2 = 0;
    for ( let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i];
    } let avg2 = sum2 / arr2.length;
    return avg1 > avg2;
} 

console.log(compareAverage(arr1, arr2));

//12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


let isHotOutside = true
let moneyInPocket = 25


function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
};

console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13.  Create a function of your own that solves a problem. 
let stake = 25
let odds = -1100


function calculateProfit(odds, stake) {
    if (odds > 0) {
      return stake * (odds / 100);
    } else {
      return stake / (odds / -100);
    }
  }

console.log(calculateProfit(odds, stake));

  //In comments, write what the function does and why you created it.
// this function calculates your winnings based on the odds and what you have wagered.
// I had to write two different returns depending on whether the odds were negative or whether they were positive.
//I wrote this because in my current job I work with sports wagering so I am constantly calculating odds.