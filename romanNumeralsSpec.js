const { toRomanLazy, toRoman } = require("./romanNumerals.js");

console.log(toRomanLazy(4) === "IIII");
console.log(toRomanLazy(150) === "CL");
console.log(toRomanLazy(944) === "DCCCCXXXXIIII");

console.log(toRoman(4) === "IV");
console.log(toRoman(150) === "CL");
console.log(toRoman(944) === "CMXLIV");
console.log(toRoman(1) === "I");
console.log(toRoman(3) === "III");
console.log(toRoman(5) === "V");
console.log(toRoman(9) === "IX");
console.log(toRoman(10) === "X");
console.log(toRoman(14) === "XIV");
console.log(toRoman(19) === "XIX");
console.log(toRoman(40) === "XL");
console.log(toRoman(49) === "XLIX");
console.log(toRoman(50) === "L");
console.log(toRoman(90) === "XC");
console.log(toRoman(99) === "XCIX");
console.log(toRoman(100) === "C");
console.log(toRoman(400) === "CD");
console.log(toRoman(500) === "D");
console.log(toRoman(900) === "CM");
console.log(toRoman(1000) === "M");
console.log(toRoman(1987) === "MCMLXXXVII");
console.log(toRoman(2024) === "MMXXIV");
console.log(toRoman(3999) === "MMMCMXCIX");
console.log(toRoman(6) === "VI");
console.log(toRoman(7) === "VII");
console.log(toRoman(11) === "XI");
console.log(toRoman(16) === "XVI");
console.log(toRoman(21) === "XXI");
console.log(toRoman(33) === "XXXIII");
console.log(toRoman(55) === "LV");
console.log(toRoman(63) === "LXIII");
console.log(toRoman(78) === "LXXVIII");
console.log(toRoman(84) === "LXXXIV");
console.log(toRoman(122) === "CXXII");
console.log(toRoman(151) === "CLI");
console.log(toRoman(235) === "CCXXXV");
console.log(toRoman(312) === "CCCXII");
console.log(toRoman(499) === "CDXCIX");
console.log(toRoman(567) === "DLXVII");
console.log(toRoman(634) === "DCXXXIV");
console.log(toRoman(755) === "DCCLV");
console.log(toRoman(845) === "DCCCXLV");
console.log(toRoman(999) === "CMXCIX");
console.log(toRoman(1111) === "MCXI");
console.log(toRoman(2020) === "MMXX");
console.log(toRoman(149) === "CXLIX");
console.log(toRoman(454) === "CDLIV");
console.log(toRoman(154)=== "CLIV")
console.log(toRoman(54) === "LIV");
