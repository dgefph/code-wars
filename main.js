//Description:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  return l.filter((v) => typeof v == 'number')
}
//Return the quarter of the year by the month given only integers

const quarterOf = (month) => {
  if (month > 0 && month <= 3) {
    return 1
  } else if (month > 3 && month <= 6) {
    return 2
  } else if (month > 6 && month <= 9) {
    return 3
  } else if (month > 9 && month <= 12) {
    return 4
  }
}

//Give a grade based on the average of 3 scores

function getGrade(s1, s2, s3) {
  let check = (s1 + s2 + s3) / 3

  if (check >= 90 && check <= 100) {
    return 'A'
  } else if (check >= 80 && check < 90) {
    return 'B'
  } else if (check >= 70 && check < 80) {
    return 'C'
  } else if (check >= 60 && check < 70) {
    return 'D'
  } else if (check >= 0 && check < 60) {
    return 'F'
  }
}

// Refactor'd
function getGrade(s1, s2, s3) {
  avg = (s1 + s2 + s3) / 3
  if (avg < 60) return 'F'
  else if (avg < 70) return 'D'
  else if (avg < 80) return 'C'
  else if (avg < 90) return 'B'
  else return 'A'
}

//return  character given ASCII number
function getChar(c) {
  return String.fromCharCode(c)
}

//return the neg or pos opposite of the value in the array
function invert(array) {
  return array.map((i) => 0 - i)
}

// 1/27 code wars

// find cuboid volume difference given two 3-item arrays, a & b
function findDifference(a, b) {
  return Math.abs(
    a.reduce((previous, current) => previous * current, 1) -
      b.reduce((previous, current) => previous * current, 1)
  )
}

//Divide

const solve = (x, y) => x / y

//get the opposite of a number given a number
const opposite = (number) => -number

// sum ONLY the positive numbers in a mixed array
// used filter + reduce both
function positiveSum(arr) {
  return arr.filter((x) => x > 0).reduce((a, c) => a + c, 0)
}

//Find the first non-consecutive numbers in an array of ascending #s
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1]
    }

    return null
  }
}

//return the average of an array rounded down
function getAverage(marks) {
  sum = marks.reduce((a, b) => a + b, 0)
  return Math.floor(sum / marks.length)
}

//Reverse strings in array
function fixTheMeerkat(arr) {
  return arr.reverse()
}

//if a bonus, multiply salary by 10
function bonusTime(salary, bonus) {
  return bonus ? `\u00A3${salary * 10}` : `\u00A3${salary}`
}

//return num of miliseconds past midnight
function past(h, m, s) {
  return s * 1000 + m * 60000 + h * 3600000
}
//refactored
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000
}
//testing testing testing

//3/3/21

//Name: 8kyu Beginner Series #1 School Paperwork
//Description: Decide how many pieces of paper per student
function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m
  } else {
    return 0
  }
}
//refactored, not my own
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0
}

//Name: Reversed Words
//Description: Reverse the order of words in a sentence
function reversedWords(str) {
  return str.split(' ').reverse().join(' ')
}

//Name: Grasshopper - Terminal game move function
//Description: return the space number if die is cast 2
function move(position, roll) {
  return position + roll * 2
}
//refactored, not my own
const move = (position, roll) => position + roll * 2

//Name: reverse a string
function solution(str) {
  return str.split('').reverse().join('')
}
//refactored, not my own
const solution = (str) => str.split('').reverse().join('')

//Name: is he gonna survive
//Description: each dragon takes 2 bullets to be defeated
function hero(bullets, dragons) {
  if (bullets / 2 >= dragons) {
    return true
  } else {
    return false
  }
}

//refactored, not my own
const here = (bullets, dragons) => bullets >= dragons * 2

//Name: Grasshopper-summation
//Description: Create a program that finds summation of every number from 1 to num.

//completely failed lol
var summation = function (num) {
  let result = 0
  for (var i = 1; i <= num; i++) {
    result += i
  }

  return result
}

//Name: Convert Boolean to a string

//My solution
function booleanToString(b) {
  if (b === true) {
    return 'true'
  } else {
    return 'false'
  }
}

//better solution
function booleanToString(b) {
  return b.toString()
}

//even cleverer solution IMO
function booleanToString(b) {
  return b ? 'true' : 'false'
}

//string 1 -- 8kyu Alan Partridge II - Apple Turnover  
function apple(x) {
  if (x ** 2 > 1000) {
    return "It's hotter than the sun!!"
  } else {
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
  }
}

//Refactored
function apple(x) {
  return x ** 2 > 1000
    ? "It's hotter than the sun!!"
    : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

//string 2 -- 8kyu Returning strings
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

//string 3 -- 8kyu Get those initials
function abbrevName(name){
  let names = name.split(' ')
  let firstLetter = names[0].charAt(0).toUpperCase()
  let secondLetter = names[1].charAt(0).toUpperCase()
  return `${firstLetter}.${secondLetter}`
}
//refactored suggestion
function abbrevName(name){

  let nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//string 4 --  8kyu The wide mouth frog!
//first try with ternary
function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}

//string 5 -- 8kyu Template Strings
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}
//refactor
let TempleStrings = (obj, feature) => `${obj} are ${feature}`;

//array 1 -- 8kyu pick a set of first elements
//definitely did not understand this one. Google helped but need to revisit
function first(arr, n=1) {
  return arr.slice(0,n);
 }

 //array 2 -- 8kyu Swap Values
 //needed help with this one as well... Must need to review array methods
 function swapValues(arr) {
  return arr.reverse()
}

//array 3 -- 8kyu Create powers of 2 JS
function powersOfTwo(n){
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}
//refactored / better solution
function powersOfTwo(n){
  return Array.from({length: n + 1}, (a, b) => 2**b)
}


//array 4 -- Filter out the geese
function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(a => !geese.includes(a)) 
  // return an array containing all of the strings in the input array except those that match strings in geese
};

//refactor -- I liked this one better, more descriptive
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter( bird => geese.indexOf(bird) < 0 );
};

//array 5 - Convert number to reversed array of digits
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

//return a multiplaction table with integers 1-10 and a given number 1-10 
const multiTable = (number) => {
  let table = '';
  
  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
  }

  return table;
}

    //refactored = into something I would do 
    const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')


//Sort vector of strings alphabetically by ASCII and join separated by string of '***'

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}