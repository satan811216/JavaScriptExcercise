// 1.Write a function called "printMany" that prints out integers 1, 2, 3, ..., 100.

function printMany() {
  let n = 0;
  for (let i = 0; i < 100; i++) {
    n = i + 1;
    console.log(n);
  }
}
// printMany(); 1,2, ...100

function printMany() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}
// 2.Write a function called "printEvery3" that prints out integers 1, 4, 7, 10, ..., 88.

function printEvery3() {
  let n = 0;
  for (let i = 0; i < 89; i++) {
    n = i % 3;
    if ((n = 1)) {
      console.log(i);
    }
  }
}
// printEvery3(); 1, 4, ..., 88

function printEvery3() {
  for (let i = 1; i <= 88; i += 3) {
    console.log(i);
  }
}

function printEvery3() {
  let i = 1;
  while (i <= 88) {
    console.log(i);
    i += 3;
  }
}

// 3.Write a function called "stars" that takes an integer as input, and returns the concatenation of n continuous "*".
function stars(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result = result + "*";
  }
  console.log(result);
}
// stars(3); // ***
// stars(10); // **********

function stars(n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += "*";
  }
  return result;
}

// 4.Write a function called "isUpperCase" that checks if the first letter of the string is uppercase.
function isUpperCase(str) {
  let reg = /^[A-Z]+$/;
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

function isUpperCase(str) {
  let reg = /^[A-Z]+$/;
  return reg.test(str);
}

// console.log(isUpperCase("ABCD")); // returns true
// console.log(isUpperCase("")); // returns false
// console.log(isUpperCase("aBCD")); // returns false

function isUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  if (str[0] == str[0].toUpperCase()) {
    return true;
  } else {
    return false;
  }
}

function isUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  return str[0] == str[0].toUpperCase();
}

// 5.Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.
function isAllUpperCase(str) {
  let reg = /^[A-Z]+[A-Z]$/;
  //   console.log(reg.test(str));
  if (reg.test(str)) {
    return true;
  } else {
    return false;
  }
}

function isAllUpperCase(str) {
  let reg = /^[A-Z]+[A-Z]$/;
  return reg.test(str);
}

// console.log(isAllUpperCase("ABCD")); // returns true
// console.log(isAllUpperCase("")); // returns false
// console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false

function isAllUpperCase(str) {
  if (str.length == 0) {
    return false;
  }

  let allUpperCase = true; // this is a boolean value

  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[i].toUpperCase()) {
      allUpperCase = false;
    }
  }

  return allUpperCase;
}

// 6.Write a function called "position" that prints out the first uppercase letter and its index location. If not found, prints -1.
function position(str) {
  let reg = /[A-Z]/;
  for (i = 0; i < str.length; i++) {
    if (reg.test(str[i])) {
      return str[i] + " " + i;
    }
  }
  return -1;
}

// console.log(position("abcd")); // prints -1
// console.log(position("AbcD")); // prints A 0
// console.log(position("abCD")); // prints C 2

function pposition(str) {
  for (let i = 0; i < str.length; i++) {
    if (reg[i] == str[i].toUpperCase()) {
      return str[i] + " " + i;
    }
  }
  return -1;
}

// 7.Write a function called "findSmallCount" that takes one array of integers and one integer as input, and returns an integer indicating how many elements in the array is smaller than the input integer.

function findSmallCount(arr, int) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (int - arr[i] > 0) {
      sum += 1;
    }
  }
  return sum;
}

// console.log(findSmallCount([1, 2, 3], 2)); // returns 1
// console.log(findSmallCount([1, 2, 3, 4, 5], 0)); // returns 0

function findSmallCount(arr, n) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      counter++;
    }
  }
  return counter;
}

// 8.Write a function called "findSmallerTotal" that takes one array of integers and one integer as input, and returns the sum of all elements in the array that are smaller than the input integer.

function findSmallerTotal(arr, int) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (int - arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// console.log(findSmallerTotal([1, 2, 3], 3)); // returns 3
// console.log(findSmallerTotal([1, 2, 3], 1)); // returns 0
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); // returns 25
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)); // returns 0

function findSmallCount(arr, n) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      sum += arr[i];
    }
  }
  return sum;
}

// 9.Write a function called "findAllSmall" that takes one array of integers and another integer as input, and returns an array of integers that contains all elements that are smaller than the input integer.

function findAllSmall(arr, int) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (int - arr[i] > 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
// console.log(findAllSmall([1, 2, 3], 2)); // returns [1]
// console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // return [1, 3, 2]

function findAllSmall(arr, n) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 10.Write a function called "sum" that takes one array of numbers, and return the sum of all elements in the input array.

function sum(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 55
// console.log(sum([])); // return 0
// console.log(sum([-10, -20, -30])); // return -60

// Simple Exercise II
// There are 10 more problems in this section of exercises. Most of them are still easy. I believe that you can do most of them. If you get stuck, try to solve it in another way. Good luck!!!
// 1.Write a function called "stars" which prints out layers of stars in the following pattern:

function stars(n) {
  let star = ["*"];
  if (n <= 1) {
    star;
  } else {
    for (i = 1; i < n; i++) {
      star.push(star[i - 1] + "*");
    }
  }
  return star;
}

// console.log(stars(1)); // [ '*' ]
// console.log(stars(4)); // [ '*', '**', '***', '****' ]

function stars(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    console.log(line);
  }
}

// stars(1); // *
// console.log("________");
// stars(4); // * ** *** ****

// 2.Write a function called "makeStars" which prints out stars in the following pattern:
// (If you are using code runner, node.js or web developer's tool, the result of makeStars function will look exactly the same as exercise 1 stars. This is 100% okay. The reason why I am putting this exercise right here is because, many programming languages that deal with files would require you to write codes like this.)

function makeStars(n) {
  let result = "*";
  for (let i = 0; i <= n; i++) {
    let star = "\n";
    for (let j = 0; j < i; j++) {
      star += "*";
    }
    result += star;
  }
  console.log(result);
}
// 這題 的 i 必須 2, 不能 1 或 0 否則 j 會有多執行一次的問題, 原因 是因為 我把變數 star 寫在 更上一層 for 迴圈導致,為了找變數 往上一層去找, 導致的問題.
// makeStars(1); // \n*
// makeStars(2); // \n*\n**
// makeStars(5); // \n*\n**\n***\n****\n*****

function makeStars(n) {
  let result = "*";
  for (let i = 2; i <= n; i++) {
    let s = "\n";
    for (let j = 0; j < i; j++) {
      s += "*";
    }
    result += s;
  }
  console.log(result);
}

// 3.Write a function called "stars2" which prints out layers of stars in the following pattern:
function stars2(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    console.log((result += "*"));
  }
  for (let j = n; j > 1; j--) {
    console.log((result = result.replace(/.$/, "")));
  }
}

// stars2(1);
// *
// stars2(2);
// *
// **
// *
// stars2(3);
// *
// **
// ***
// **
// *
// stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *

function stars2(n) {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 0; j < i; j++) {
      line += "*";
    }
    console.log(line);
  }

  for (let i = n - 1; i > 0; i--) {
    // console.log("i=" + i, "n=" + n);
    let line = "";
    for (let j = 0; j < i; j++) {
      //   console.log("j=" + j, "i=" + i);
      line += "*";
    }
    console.log(line);
  }
}

// 4.Write a function called "table" which takes an input n, and prints out n x 1 to n x 9

function table(n) {
  for (i = 1; i < 10; i++) {
    let product;
    product = n * i;
    let result = n + "*" + i + "=" + product;
    console.log(result);
  }
}

// table(5);

function table(n) {
  for (let i = 1; i <= 9; i++) {
    console.log(n + "*" + i + "=" + n * i);
  }
}

// 5.Write a function called "table9to9" that prints out the multiplication table:
function table9to9() {
  for (let n = 1; n < 10; n++) {
    for (let i = 1; i < 10; i++) {
      console.log(n + "*" + i + "=" + n * i);
    }
  }
}

// table9to9();

function table9to9() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(i + " * " + j + " = " + i * j);
    }
  }
}

// 6.Write a function called "fib" that takes an integer $n$ as input, and returns the $n$th element of the Fibonacci Sequence.
// If you never hear about Fibonacci Sequence, read about it from: https://zh.wikipedia.org/wiki/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0

function fib(n) {
  let result,
    arr = [0, 1];
  if (n === 0) {
    console.log(arr[0]);
  } else if (n >= 1) {
    for (i = 1; i <= n; i++) {
      arr.push(arr[i - 1] + arr[i]);
      result = arr[i];
    }
    console.log(result);
  }
}

// fib(0); // returns 0
// fib(1); // returns 1
// fib(2); // returns 1
// fib(3); // returns 2
// fib(8); // returns 21

function fib(n) {
  let arr = [0, 1];
  let i = 0;
  while (arr.length <= n) {
    arr.push(arr[i] + arr[i + 1]);
    i++;
  }
  console.log(arr);
  console.log(arr[n]);
}

// 以下是用 遞迴 的結構 寫出的演算法, 遞迴的定義是 當執行 function 時, 內部又再次執行自己本身這個 function 就稱為遞迴.

function fib(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
// 當執行 fib(5); 就會變成 fib(4) + fib(3);
// 而 fib(4) = fib(3) + fib(2), fib(3) = fib(2) + fib(1).
// fib(3) = fib(2) + fib(1), fib(2) = fib(1) + fib(0).
// 當 function 的執行, 一直降到 n = 0 or 1, 就會分別 return 0 or 1, 這時就可以做 計算了, 算出的答案會符合 費波納契數列了.

function fib(n) {
  var fib_n = function (curr, next, n) {
    if (n == 0) {
      return curr;
    } else {
      return fib_n(next, curr + next, n - 1);
    }
  };
  return fib_n(0, 1, n);
}
// console.log(fib(0)); //0
// console.log(fib(1)); //1
// console.log(fib(2)); //1
// console.log(fib(3)); //2
// console.log(fib(8)); //21

// 7.Write a function called "reverse" that takes a string as input, and returns the reverse string.
function reverse(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// console.log(reverse("abcd")); // returns "dcba"
// console.log(reverse("I am a good guy.")); // return ".yug doog a ma I"

// 8.Write a function called "swap" that takes a string as input, and returns a new string with lowercase changed to uppercase, uppercase changed to lowercase.

function swap(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}

// console.log(swap("Aloha")); // returns "aLOHA"
// console.log(swap("Love you.")); // returns "lOVE YOU."

// 9.Write a function called "findMin" which takes an array as input, and returns the minimum element in the input array.

function findMin(arr) {
  let result = arr[0];
  for (i = 0; i <= arr.length; i++) {
    if (result > arr[i]) {
      result = arr[i];
    }
  }
  console.log(result);
  return result;
}

// findMin([1, 2, 5, 6, 99, 4, 5]); // returns 1
// findMin([]); // returns undefined
// findMin([1, 6, 0, 33, 44, 88, -10]); // returns -10

// 10.Write a function called "findNthMin", which takes an array of integers and another integer n, and returns the nth smallest number in the given array.

function findNthMin(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        counter++;
      }
    }

    if (counter == n - 1) {
      console.log(arr[i]);
      return arr[i];
    }
  }
}

// findNthMin([1, 2, 3, 4, 5], 1); // returns 1
// findNthMin([1, 3, 5, 7, 9]); // returns 5

// # Intermediate Exercise

// There are 7 problems in this section. Some of them require some math knowledge. It's okay if you google some ideas of how to solve the problem.

// Some of them are quite tricky. It's okay if you don't know how to do it. Try your best. Good luck!

// 1. Write a function called "mySort" that takes an array of integers as input, and returns the sorted version of the input array.

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
function mySort(arr) {
  let result = [];
  while (arr.length > 0) {
    let min = findMin(arr);
    result.push(min);
    arr.splice(arr.indexOf(min), 1);
    // console.log(arr);
  }
  console.log(result);
  return result;
}

mySort([17, 0, -3, 2, 1, 0.5]); // returns [-3, 0, 0.5, 1, 2, 17]

// 2.Write a function called "isPrime" that takes an integer as input, and returns a boolean value that indicates if the input number is prime.
// 質數 (Prime) 定義 只有一和本身可以整除 ex.2, 3, 5, 7.
// 回傳 true 是質數, false 不是.
function isPrime(n) {
  if (n == 1) {
    return false;
  }

  let starter = 2;
  while (starter < n) {
    if (n % starter < n) {
      return false;
    }
  }
  return true;
}

isPrime(1); // returns false
isPrime(5); // returns true
isPrime(91); // returns false
isPrime(1000000); // returns false
