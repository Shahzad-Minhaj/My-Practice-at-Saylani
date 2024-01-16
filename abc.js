
//=====================================================( LECTURE NOTES )==============================================
// let a = 2;
// let b = 5;
// let result = a-b;
// console.log(result);
//--------------------------------------------------------------------------------------------------------------------
// let a = prompt("enter a num");
// let b = prompt("enter 2nd num");
// // let result = a % b;
// // // alert(result);
// // console.log(result);
// alert(a*b);
//-----------------------------------------------------( ROUGH PRACTICS )----------------------------------------------
// function splitPopulation(totalPopulation) {
//     // Ensure the total population is even for a fair split
//     if (totalPopulation % 2 !== 0) {
//       console.log("Total population must be even for a fair split.");
//       return;
//     }

//     // Calculate population in each half
//     const populationInEachHalf = totalPopulation / 2;

//     // Output the result
//     console.log(`If the country splits in half, each half would contain ${populationInEachHalf} people.`);
//   }

//   // Example usage with a total population of 100
//   splitPopulation(100);
// Example usage with a total population of 100

// -------------------------------------------------------------------------------------------------------------
// var a = "your name is?";
// var b ="name";
// var c=prompt(a,b);

//=================================================================================================================
//VERBAL ASSIGNMENT: ask user to check even & odd numbers
//=================================================================================================================

// var a = prompt("Enter any number to check if it's odd or even");
// // console.log(a%2);
// if(a%2 === 0) {
//     alert("The number is even");

// }
// else{
//     alert("The number is odd");
// }

//=================================================================================================================
// ASSIGNMENT NO. 1 :
//=================================================================================================================

// population= prompt("Your country population");

// var population= population/2;
// console.log("half population of your country is", population)
// var pop = ++population;
// console.log("the population is added by 1 and result is ", population);
// var finlandPopulation = 30000;
// if(finlandPopulation > population){
//     console.log("Finland population is greater than your country's population ");

// }
// else{
//     console.log("your country population is greater than Finland's population")
// }
// var description = " Portugal is in Europe, and its 11 million people speak portuguese"
// console.log(description)


//================================( calculator )===================================================================


// var a = Number(prompt("enter a digit"));
// var b = Number(prompt ("enter a second digit"));
// var c = prompt("enter the operation 1. add 2. multiple 3. sub 4. divide");
// if(c == 1)
// {
//     var result= a+b; 
//     console.log(result);
// }
// if(c == 2){
//     let result= a*b;
//     console.log(result);
// }
// if( c == 3)
// {
//     let result= a-b;
//     console.log(result);
// }
// if (c == 4)
// {
//     let result= a/b;
//     console.log(result);
// }

// var a = Number(prompt( "enter a num"));
// var b = Number(prompt("enter another num"));
// var r=a+b;
// console.log(r);

//----------------------------------( CLASS LECTURE TUESDAY 21/11)----------------------------------------------------

/* 
- operator precedence
- 

// let a = 2 + 2 * 4;
let a = (2+2)*4 //result will be 16 due to the operator precedence rule from left to right
let b = 2*4/2  //multiple will be performed first and then divide
console.log(a)
*/
/* increment or decrement 
you can make tasbeeh from this concept - do it yourself

*/
// let a=5
// a=a+1
// console.log(a)

// let a =2
// let b=3
// let res= a++ - b++ + a-- + b++;
// 2-3+3+4
// console.log(res)

// a=7 b=4
// let a = 5;
// let b= 4;
// let z= a++ + b-- - a++ + b++ - a++;
// // 5 + 4 - 6 + 3 - 7
// // 9-6+3-7
// // 3+3-7
// // 6-7
// //-1
// console.log(z);

// let a= 5; //6//7//8
// let b = 4; //3//4
// let y = ++a + --b - ++a + ++b - ++a;
//   //  6 + 3 - 7 + 4 - 8
//   //  9-7+4-8
//   //  2+4-8
//   //  6-8
//   //  -2 
//   console.log(y);

/* -------------------------------------------(practice)-----------------------------------------------------------
 let a = Number(prompt("enter a number"));
 if(a>=10 && a<=20)

{
  alert("1");

}
else{
  alert("0");
} */

//============================================================================================================================
//Lecture  27/11
//=======================================================================================================================

//Concatenating text strings- adding two strings

// let a = "whatsup"
// // // // alert(a + "shahzad")
// alert(`thanks ${a}`);
// let message = "thaks, ";
// let banger = "!"'
// alert( message + a + banger);
//alert(`${message} ${a} ${banger}`);

// alert("2 plus 2 equals " +2 +2);
//string when add with a number will result in a string
//  string + number + number
//  string + number
//  string
// alert("2"-"1")

//--------------------------------------( If Statement )------------------------------------------------------------
// let age = Number(prompt("enter your age."));
// if (age >18){
//   alert(" you must create your CNIC");
// }
// else{
//   alert("You are not eligible for CNIC");
// }
//---------------------------( Assignment )-------------------------------------------------------------
// create a program to ask the user if the temperature outside the room is greater than 20 then user can go outside
//otherwise  user can staye at home if the temperature is 0 outside.
//------------------------------------------------------------------------------------------------------

//===========================( LECTURE  28/11 )===================================================================
// DOM overview
let incWalaX = (document.querySelector(".heading").textcontent = "this is a page");
console.log(incWalaX);

let value = 0

function increment() {
  document.querySelector(".value").textContent = ++value;
  if (value % 2 == 0) {
    document.querySelector(".value").style.color = "red";
  }
  else {
    document.querySelector(".value").style.color = "green";
  }

}
function decrement() {
  document.querySelector(".value").textContent = --value;
  if (value % 2 == 0) {
    document.querySelector(".value").style.color = "red";
  }
  else {
    document.querySelector(".value").style.color = "green";
  }
}
let x = (document.querySelector(".value").textContent = "error");
console.log(x);


// comparator == only check true and false in the condition whereas === sign check the condition as well as data type ed
//7=="7"  the result will be true but the data types are diferent one is integar and other is string
//7==="7" the result will be false as the data types are not equal. 
//================(Assignment # 1 BMI calculator 2. guess the number )====================

// let marks=Number(prompt("Enter your marks"));
// if(marks >= 60)
// {
// alert("congratulations! you are passed and you got grade A");
// }
// else if(marks <40)
// {
//   alert("Alas! you are failed, better luck next time");
// }
// else{
//   alert("you are passed and got grade b");
// }

// -----------------------------(BMI Calculator)--------------------

//   let w = Number(prompt("enter your weight"));
//   let h = Number(prompt("enter your height"));
//   result = w/(h*h);
//   console.log(result);


// if(result <17 ){
//   alert( "mild thiness")
// }
// else if( result > 17 & result <= 18.5)
// {
//   alert("moderate thiness")
// }
// else if( result > 18.5 & result <= 25){
//  alert("Normal")

// }
// else if( result > 25 & result <= 30){
//   alert("Overweight")
// }
// else if(result> 30){
//   alert("Obese")

// }


//-------------------------------------------------------------------------------
// let age = Number(prompt("Enter your age"));
// let isLicense = false;
// if(age> 18 && !isLicense){
//   alert("have a nice drive");
// }
// else{
//   alert("you cannot drive")
// }
//---------------------------------------------------------------------------------
// let s= prompt("enter your current stop");
// let d= prompt("enter your destination");
// // let chamkani = 0
// let sc= 881;
// let cf =1850 
// // let fasalColony = 3230
// // let hajiCamp= 3880
// // basefare = 20

// // totaldist = d - s;
// // console.log(totaldist)


// function calculateFare(currentLocation, destination) {
//   // Distances between cities (for simplicity, in miles)
//   const distances = {
//     "cham": 0,
//     "sar": ,
//     "chu": 150,
//     "Mardan": 30,
//     "Nowshera": 20,
//     "Karachi": 1000,
//   };

//   // Assuming a simple fixed fare for demonstration purposes
//   const baseFare = 20; // Base fare amount
//   const distanceFactor = 5; // Fare per unit distance (for example, in miles or kilometers)

//   // Check if the provided locations are in the distances object
//   if (!(currentLocation in distances) || !(destination in distances)) {
//     alert("Invalid locations. Please provide valid locations.");
//     return;
//   }

//   // Calculate the fare based on the distance between the locations
//   const distance = Math.abs(distances[destination] - distances[currentLocation]);
//   const fare = baseFare + distance * distanceFactor;

//   // Display the result to the user
//   alert(`Bus ticket fare from ${currentLocation} to ${destination} is $${fare.toFixed(2)}.`);
// }

// // Prompt the user for current location and destination
// const currentLocation = prompt("Enter your current location (e.g., Peshawar, Lahore, Islamabad, Mardan, Nowshera, Karachi):");
// const destination = prompt("Enter your destination (e.g., Peshawar, Lahore, Islamabad, Mardan, Nowshera, Karachi):");

// // Check if the user provided valid inputs
// if (currentLocation && destination) {
//   // Call the calculateFare function with the provided inputs
//   calculateFare(currentLocation, destination);
// } else {
//   alert("Please provide valid inputs for both current location and destination.");
// }


// ================================================(array)=============================

// var cities = ["karachi", "Peshawar", "Islamabad"];
// console.log(cities)
// this will print all the values of cities
// console.log(cities[0])
// array is as same as python's list which is nothing but works on the bases of index.
// let num=[1,2,4, "cat", [1,5,"car", 6]];
// how to print car in the array
// console.log(num[4][2])

// num = [1,2,3,4,5]
// num[0]+=2 
// console.log(num)

// let mat = [[1,2],[3,2]]
// let mat2=[[2,3],[5,6]]

// // let result=[ [mat[0][0]+mat2[0][0], mat[0][1] +mat2[0][1]], 
// // [mat[1][0] +mat2[1][0], mat[1][1] +mat2[1][1]] ]
// for(let row=0; row<2; row++){
//   for(let col=0; col<mat[row]; col++){
//     console.log(mat[row][col] +mat2[row][col])

//   }

// }
// Creating a 2x3 matrix (2-dimensional array)
// var matrix = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];
// var matrix2 =[
//   [2,3,4],
//   [5,6,7]
// ]
// var em =[]
// for (var i = 0; i < matrix.length; i++) {
//   for (var j = 0; j < matrix[i].length; j++) {
//       var res= em.push(matrix[i][j]+matrix2[i][j]);
//       console.log(res)
//   }
// }

// toDolist=[]
// for(let tasks=0; tasks<10; tasks++){
// let task = prompt("Enter your task (max 10 tasks to be added) or press 'q' to quit")
// if(task == "q"){break}
// else{
// let b = toDolist.push(task)
// console.log(toDolist)
// }
// }
// how to create a 
//=======================(LECTURE 19/12 LOOPS)=================
//============================(for loop)=======================
// for(let i= 99; i>=0; i--){
//   console.log("number", i)
// }
// let i=0;
//for(; condition; initialization){}
//for(let i=0; ;i++){} loop will be running infinity, loops are made for array
// let array =[["cat","dog"],[1,2,3],[5,4,6]]
// for(let i=0; i<array.length; i++){
//   for(let j=0; j<array[i].length; j++){
//     console.log(array[i][j])
//   }
// }
// let rollNum = [1,2,3,4,5,6,7,89,9,10,11,12,13]
// for(let i=0; i<rollNum.length; i++){

//   if(i <= 89){ 


//     break
//   }
//   console.log(rollNum[i])
// }

// let a = prompt("enter your name")
// console.log(a)
// let c=a.toLowerCase()
// console.log(c)
// alert(c)
//===========================================================================================================
//             adding and removing cities from your country
//=====================================================================================================
let cities = ["Peshawar", "Islamabad", "Nowshera", "Lahore"];

document.getElementById("allCities").onclick = function () {
  document.getElementById("output").innerHTML = "";
  for (let i = 0; i < cities.length; i++) {
    document.getElementById("output").innerHTML += i + 1 + " " + cities[i] + "<br>";
  }
};

document.getElementById("addCities").onclick = function () {
  let value = document.getElementById("getval").value;
  if (value === "" || value.length < 3) {
    alert("Please Enter a City");
    return;
  }

  let cityFirstLetter = value.slice(0, 1).toUpperCase();
  let cityLastLetter = value.slice(1).toLowerCase();
  let newCity = cityFirstLetter + cityLastLetter;

  let cityfound = false;
  for (let i = 0; i < cities.length; i++) {
    if (newCity === cities[i]) {
      cityfound = true;
      document.getElementById("output").innerHTML = "City already exists in the list";
      break; // Exit the loop since the city is already found
    }
  }

  if (cityfound === false) {
    cities.push(newCity);
    document.getElementById("output").innerHTML = "City added";
  }
}
document.getElementById("removeCity").onclick = function () {
  let value = document.getElementById("getval").value;
  if (value === "" || value.length < 3) {
    alert("Please Enter a City")
    return;
  }

  let cityFirstLetter = value.slice(0, 1).toUpperCase();
  let cityLastLetter = value.slice(1).toLowerCase();
  let newCity = cityFirstLetter + cityLastLetter;

  let cityfound = false;

  for (let i = 0; i < cities.length; i++) {
    if (newCity === cities[i]) {
      cityfound = true;

      // Use splice to remove the city at index i
      cities.splice(i, 1);

      document.getElementById("output").innerHTML = "City removed from list";
      break;
    }
  }

  console.log(cityfound);

  if (!cityfound) {
    document.getElementById("output").innerHTML = "City not found";
  }
}
//------------------------------(Jan 7 2024)--------------------------------------------
// let m = Math
// console.log(m)
//math is a builtin object
//console.log(Math.random()) - it generate num between 0-1

//--------( this is the basic concept of ludo game  )------------------
//  let m = Math.random()*6+1
// let y = Math.trunc(m)
// console.log(y)
// let x = Math.random()*((20-10)+1)+10
// let y = Math.trunc(x)
// console.log(y)

//css-tricks.com/snippets/css/a-guide-to-flexbox/

//-----------------------(Lecture getting the current date and time 16-Jan-2024)--------------------------------------------------------------
let nowDate = new Date()
console.log(nowDate.getFullYear())
console.log(new Date().getMonth())
console.log(nowDate.getDay())
console.log(nowDate.getHours())
document.getElementById("year").innerHTML = nowDate.getFullYear()
document.getElementById("Month").innerHTML = nowDate.getMonth()
document.getElementById("day").innerHTML = nowDate.getDay()
document.getElementById("hour").innerHTML = nowDate.getHours()
document.getElementById("mins").innerHTML = nowDate.getMinutes()
document.getElementById("sec").innerHTML = nowDate.getSeconds()
document.getElementById("milisec").innerHTML = nowDate.getMilliseconds()
//=======================================================================================================
//            Rolling a dice
//=======================================================================================================
document.getElementById("roll").onclick = function(){
  let di= Math.trunc(Math.random() * 6 + 1)
  document.getElementById("output3").innerHTML = di 
  document.getElementById("theImg").src = `/images/dice-${di}.png`
}

// let player1Score = 0;
//     let player2Score = 0;
//     let currentPlayer = 1;

//     document.getElementById("roll").onclick = function () {
//         if (currentPlayer === 1 && player1Score === 0) {
//             // Game starts when Player 1 rolls a 6 for the first time
//             let diceKaX = Math.random() * 6 + 1;
//             let roll = Math.trunc(diceKaX);
//             console.log("Dice Roll: " + roll);
//             document.getElementById("output3").innerHTML = roll;

//             if (roll === 6) {
//                 player1Score += roll;
//                 document.getElementById("player1Score").innerHTML = player1Score;
//                 currentPlayer = 2;
//             } else {
//                 console.log("Player 1 needs to roll a 6 to start.");
//             }
//         } else if (currentPlayer === 2) {
//             // Player 2's turn
//             let diceKaX = Math.random() * 6 + 1;
//             let roll = Math.trunc(diceKaX);
//             console.log("Dice Roll: " + roll);

//             if (roll === 6) {
//                 player2Score += roll;
//                 document.getElementById("player2Score").innerHTML = player2Score;
//                 currentPlayer = 1;
//             } else {
//                 console.log("Player 2 needs to roll a 6 to start.");
//             }
//         }

//         // Check for a winner
//         if (player1Score >= 100) {
//             announceWinner("Player 1");
//         } else if (player2Score >= 100) {
//             announceWinner("Player 2");
//         }
//     };

//     function announceWinner(winner) {
//         console.log("Game Over! " + winner + " is the winner!");
//     }
