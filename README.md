# code-wars

These are my codewars solutions!

This is mainly an exercise in journaling my progress, but feel free to follow along :)

UPDATE: In the process of comparing using a README.md verses a JS file for note taking

# 8kyu 

# Multiplication table for number - 8kyu

### Description

Your goal is to return multiplication table for number that is always an integer from 1 to 10.

### Solution
```jsx
const multiTable = (number) => {
  let table = '';
  
  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
  }

  return table;
}
```

### Solution 2 - refactored
```jsx
const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')
```

# Sort and Star

### Description
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

### Solution

```jsx
function twoSort(s) {
    return s.sort()[0].split('').join('***');
}
```

# Is there a vowel in there?

### Description
Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

### Solution

```jsx
function isVow(a){
  return a.map(a => (a == 101 || a == 117 || a == 97 || a == 105 || a == 111) ? String.fromCharCode(a) : a);
}
```

### Solution 2 - refactored
```jsx
function isVow(a){
return  a.map(
    charCode =>
      /[aeiou]/.test(String.fromCharCode(charCode))
        ? String.fromCharCode(charCode)
        : charCode)}
```