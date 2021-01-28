//Description:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(v => typeof v == "number")
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

  function getGrade (s1, s2, s3) {
    let check = ((s1+s2+s3)/3)
    
    if (check >= 90 && check <= 100){
      return 'A'
    } else if (check >= 80 && check < 90){
      return 'B'
    } else if (check >= 70 && check < 80){
      return 'C'
    } else if (check >= 60 && check < 70){
      return 'D'
    } else if (check >= 0 && check < 60) {
      return 'F'
    }
  }

  // Refactor'd 
  function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
  }

  //return  character given ASCII number
  function getChar(c) {
    return String.fromCharCode(c)
  }


  //return the neg or pos opposite of the value in the array
  function invert(array) {
    return array.map(i => 0 - i);
 }

 // 1/27 code wars

// find cuboid volume difference given two 3-item arrays, a & b
 function findDifference(a, b) {
    return Math.abs((a.reduce((previous, current)=> previous*current, 1)) - (b.reduce((previous, current)=> previous*current, 1)))
  }

//Divide

const solve = (x, y) => x/y

//get the opposite of a number given a number
const opposite = number => -number;