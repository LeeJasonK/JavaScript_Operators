console.log("Hello World!\n===========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("Exercise 1:\n==========\n");
const a = 20;
const b = 4;
const add = a + b;
const minus = a -b;
const multiply = a * b;
const dividing = a / b;
// Alt Shift down to copy down
console.log(a);
console.log(b);
console.log(add);
console.log(minus);
console.log(multiply);
console.log(dividing);

// Exercise 2
console.log("Exercise 2:\n==========\n");
let num = 11;  //number
let str = "11";  //string
let str2 = "eleven";
let isPresent = true;  //Boolean
let firstName = "Frodo";
let lastName = "Baggins";

//What is the value of: num + str?
// 1111
console.log(num + str);
//what is the value of: num + str2? 22
console.log(num + str2);
//11eleven
//What is the value of: num + isPresent?
console.log(num + isPresent);  // True means 1, False is 0
12
//What is the value of: firstName + num? 11Frodo11
console.log(firstName + num); // true11

//What is the value of: isPresent + str? 
console.log(isPresent + str);  // true11

//What is the value of: firstName + lastName?
console.log(firstName + lastName); // FrodoBaggins"
console.log("2" * 4);

//Exsecise 3
console.log("Exercise 3:\n==========\n");
let val = 5;
let str3 = "5";
let str4 = "five";
let isPresent2 = false;

//What is the value of: val == str3?
console.log(val == str3);
//5 == "55" True

//What is the value of: val === str3?
console.log(val === str3);
//5 === "5" false

//What is the value of: !isPresent2?
console.log(!isPresent2);  // ! means not, true is not false (Boolean, T or F)

//What is the value of: (“eleven” == str4 && val >= str3)? // 11 is not 5 is false so no need to go further. 
   //both should be true
console.log("eleven" == str4 && val >= str3);  // false == true is false

//What is the value of: (!isPresent2 || isPresent2)?
console.log(!isPresent2 || isPresent2);   // !false is true, || false, so T or F is True

// = assignment, == loose, === strict


//What is the value of: 0 == false?  Boolean, T or F, 1 or 0, so its true
console.log(0 == false);
//What is the value of: 0 === false?
console.log(0 === false);

//What is the value of: 0 != false?
console.log(0 != false);

//What is the value of 0 !== false?
console.log(0 !== false);

