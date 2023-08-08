function cubeNumber(number) {

   if (typeof number !== "number" || number <= 0) {
      return "Please provide me a positive number";
   } else {
      const result = Math.pow(number, 3);
      return result;
   }
}
console.log(cubeNumber(p));
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
