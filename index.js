// 1

function checkDataTypes(num1, num2, num3) {
    if (typeof num1 == "string" || typeof num1 == "number" || typeof num1 == "boolean") {
        console.log(`${num1} is a ${typeof (num1)} data type`);
  
    } if (typeof num2 == "string" || typeof num2 == "number" || typeof num2 == "boolean") {
        console.log(`${num2} is a ${typeof (num2)} data type`);
  
    } if (typeof num3 == "string" || typeof num3 == "number" || typeof num3 == "boolean") {
        console.log(`${num3} is a ${typeof (num3)} data type`);
   
    }
    else {
        console.log("invalid oparation");
    }
  }
  
  checkDataTypes( "text", true,12345);
  
  
  // 2

  function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(`$ {year} is a leap year`);
    } 
    else {
      console.log(`${year} is not a leap year`);
    }
  }
  
  checkLeapYear(2019);
  
  
  // 3

  function evalNumbers(x, y, oparations) {
    if (oparations == "add") {
      console.log(x + y);
    }
     else if (oparations == "subtract") {
      console.log(x - y);
    } 
    else if (oparations == "modulas") {
      console.log(x % y);
    } 
    else if (oparations == "multiply") {
      console.log(x * y);
    } 
    else if (oparations == "divide") {
      console.log(x / y);
    } 
    else {
      console.log("invalid Operations");
    }
  }
  
  evalNumbers(30, 3, "multiply");
  
  // 4
  
  function findLargest(x, y, z) {
    if (x > y && x > z) {
      console.log(`${x}`);
    } 
    else if (y > x && y > z) {
      console.log(`${y}`);
    } 
    else {
      console.log(`${z}`);
    }
  }
  
  findLargest(10, 20, 30);
  