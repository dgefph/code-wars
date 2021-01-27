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