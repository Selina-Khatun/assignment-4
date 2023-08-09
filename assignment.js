function cubeNumber(number) {

   if (typeof number !== "number" || number <= 0) {
      return "Please provide me a positive number";
   } else {
      const result = Math.pow(number, 3);
      return result;
   }
}
// console.log(cubeNumber(p));
// console.log(cubeNumber(3));


function matchFinder(string1, string2) {
   if (typeof string1 !== "string" || typeof string2 !== "string") {
      return "please provide me the string in both input arguments "
   } else if (string1.includes(string2)) {
      return true;
   } else {
      return false;
   }

}
// const string1 = "JavaScript";
// const string2 = "Code";

// const string1 = "John Doe";
// const string2 = "ohn";

// const string1 = 444;
// const string2 = 3333;
// const string1 = "Peter Parker";
// const string2 = "Pen";

// const string1 = "Peter Parker";
// const string2 = "pet";

// console.log( matchFinder(string1, string2));



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
// const arr = [2,3] ;
// const arr = [4,2] ;
// const arr = [4,4] ;
// const arr = [1,2] ;
// const arr = [4,-2] ;
// const arr = [0,1] ;


// console.log(sortMaker(arr));

function findAddress(obj) {
   if (typeof obj !== "object") {
      return "please provide me a valid object";
   } else {
      const street = obj.street || "__";
      const house = obj.house || "__";
      const society = obj.society || "__";
      return street+ ","+house+ ","+society;
   }
}
// const obj = {
//    street: 10,
//    house: "15A",
//    society: "Earth Perfect"
// }
// console.log (findAddress(obj));

function canPay(changeArray, totalDue) {
if (changeArray.length ===0){
   return false;
}else {
   let totalChangeAmount = 0 ;
   for (let i = 0;i<changeArray.length; i++){
      totalChangeAmount += changeArray[i];
   }
   return totalChangeAmount>=totalDue;
}

}
const changeArray=[1,2,5];
// const changeArray=[1,5,5];

const totalDue =6;
console.log(canPay(changeArray, totalDue));