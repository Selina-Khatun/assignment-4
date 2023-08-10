function cubeNumber(number) {

   if (typeof number !== "number" || number <= 0) {
      return "Please provide me a positive number";
   } else {
      const result = Math.pow(number, 3);
      return result;
   }
}

function matchFinder(string1, string2) {
   if (typeof string1 !== "string" || typeof string2 !== "string") {
      return "please provide me the string in both input arguments "
   } else if (string1.includes(string2)) {
      return true;
   } else {
      return false;
   }
}

function sortMaker(arr) {
   const [element1, element2] = arr;
   if (typeof element1 !== "number" || typeof element2 !== "number") {
      return "Please provide me  an array of numbers";
   } else if (element1 < 0 || element2 < 0) {
      return "Invalid Input";
   } else if (element1 === element2) {
      return "equal";
   } else {
      return [Math.max(element1, element2), Math.min(element1, element2)];
   }
}

function findAddress(obj) {
   if (typeof obj !== "object") {
      return "please provide me a valid object";
   } else {
      const street = obj.street || "__";
      const house = obj.house || "__";
      const society = obj.society || "__";
      return street + "," + house + "," + society;
   }
}

function canPay(changeArray, totalDue) {
   if (changeArray.length === 0) {
      return "Invalid Input";
   } else {
      let totalChangeAmount = 0;
      for (let i = 0; i < changeArray.length; i++) {
         totalChangeAmount += changeArray[i];
      }
      return totalChangeAmount >= totalDue;
   }

}
// What will be the output of the following JavaScript code?

function compare(a, b) {
   if (a == b) {
      return true;
   } else {
      return false;
   }
}
// const result = compare(15, "15");
// console.log(result);
function compare(a, b) {
   if (a.toString() === b) {
      return true;
   } else {
      return false;
   }
}
const result = compare(25, 25);
//   console.log(result);
// What will be the output of the following JavaScript code? (Hint: Implicit type conversion)

// console.log("123" + 123);
// What will be the output of the following JavaScript code?

let a = "hi";
let b = "there";
// console.log(a+b);


function degreesToRadians(degrees) {
   return degrees * (Math.PI / 180);
}

// Example usage
const degrees = 90;
const radians = degreesToRadians(degrees);
//  console.log(`${degrees} degrees is approximately ${radians} radians.`);



/*************************************************************************************/
// batch 6 restart assignment---4
/***************************************************************************************/


function radianToDegree(degrees) {

   if (typeof degrees !== "number") {
      return "please provide me a valid number";
   } else {
      const piValue = 3.1415265358;
      return degrees * piValue / 180;
   }
}
// console.log(radianToDegree("180"));


function isJavaScriptFile(fileName) {
   if (typeof fileName !== "string") {
      return "please provide me a valid file name ";
   } else {
      return fileName.toLowerCase().endsWith(".js");
   }


}
console.log(isJavaScriptFile(5));
function oilPrice(diesel, petrol, octane) {

   if (typeof diesel !== "number" || typeof petrol !== "number" || typeof octane !== "number") {
      return "please provide me the number in all input arguments ";
   } else if (diesel < 0 || petrol < 0 || octane < 0) {
      return "please provide me positive number";
   } else {
      const dieselPrice = 114;
      const petrolPrice = 130;
      const octanePrice = 135;
      const totalPrice = dieselPrice * diesel + petrolPrice * petrol + octanePrice * octane;
      return totalPrice;
   }

}
// console.log(oilPrice(1, 1, 1));

function publicBusFare(people) {

   if (typeof people !== "number" || people < 0) {
      return "Please provide me a positive number";
   } else {
      const reservedBus = 50;
      const microBus = 11;
      const publicBusCost = 250;
      const busRemaining = people % reservedBus;
      const microBusRemaining = busRemaining % microBus;
      const totalBusFare = publicBusCost * microBusRemaining;
      return totalBusFare;

   }
}
// console.log(publicBusFare(263));
function isBestFriend(obj1, obj2) {
   if (typeof obj1 !== "object" || typeof obj2 !== "object") {
      return "please provide me the valid objects in both input arguments";
   } else if (obj1.friend === obj2.name && obj2.friend === obj1.name) {
      return true;
   } else {
      return false;
   }
}
// const obj1={name:'Tom',friend:'rock'};
// const obj2={name:'rock',friend:'Tom'};
// const obj3={name:'Tim',friend:'rocky'};
// const obj4={name:'Tom',friend:'rock'};
// console.log(isBestFriend(obj1,obj2));
// console.log(isBestFriend(obj3,obj4));