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

