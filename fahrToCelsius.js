// define the function convertFahrToCelsiu that accepts one parameter

function convertFahrToCelsiu(fahr){
  // check to see if it not a number and return the error message
  if(!isNaN(fahr)){
 //if(typeof fahr === "number" || typeof fahr ==="string")
 //{
  let C = ((fahr - 32) * 5/9);
  //rounup the value to 4 DCP
  let roundUpC =C.toFixed(4);
 return `${roundUpC}`
 }
 
else if(typeof fahr === "object"){
  // convert the param received and store it in a variable
  let objVal = JSON.stringify(fahr);
  return `${objVal} is not a valid number but a/an object.`
 }
else if(Array.isArray(fahr)){
 return `[${fahr}] is not a valid number but a/an Array.`
 }

else{
 return `${fahr} is not a valid number at all.`
}

 }
// define the function checkYuGiOh that accepts one parameter
let checkYuGiOh = (n) => {
  let arr = Array.from({length:n}, (_, i) => i+1); 
 // convert the param received and store it in a variable
  let convertedVal = JSON.stringify(n);
  
  //create and array where you store the results from the checks
  let rsltArr =[];
  // check to see if it not a number and return the error message
  if(isNaN(n)){
 // console.log(`${convertedVal} is an invalid parameter`);
  return `${convertedVal} is an invalid parameter`;
  
  }
  else{
    // loop through the array from the input/param
   for(let i = 0; i < arr.length; i++){
    //checks for the factors and push the results to the results array
    if((arr[i] % 2 !== 0) && (arr[i] % 3 !== 0) && (arr[i] % 5 !== 0)){
     rsltArr.push(arr[i]);
    }
    
    else if(arr[i] % 2 === 0){
     rsltArr.push("yu")
    }
    else if(arr[i] % 3 === 0){
     rsltArr.push("gi")
    }
    else if(arr[i] % 5 === 0){
     rsltArr.push("oh")
    }
    
    else if((arr[i] % 2 === 0) && (arr[i] % 3 === 0)){
     rsltArr.push("yu-gi");
    }
    else if((arr[i] % 2 === 0) && (arr[i] % 5 === 0)){
     rsltArr.push("yu-oh");
    }
    else if((arr[i] % 3 === 0) && (arr[i] % 5 === 0)){
     rsltArr.push("gi-oh");
    }
    else if((arr[i] % 2 === 0) && (arr[i] % 3 === 0) && (arr[i] % 5 === 0)){
     rsltArr.push("yu-gi-oh");
    } 
   
   }
   //return the results array
   //console.log(rsltArr);
   return rsltArr;
  }

 }

 
console.log("TestCases for convertFahrToCelsiu")
console.log(convertFahrToCelsiu(0));
console.log(convertFahrToCelsiu("0"));
console.log(convertFahrToCelsiu({temp: 0}));
console.log(convertFahrToCelsiu([1,2,3]));

console.log("TestCases for checkYuGiOh")
console.log(checkYuGiOh(10));
console.log(checkYuGiOh(5));
console.log(checkYuGiOh(3));
console.log(checkYuGiOh("7"));
console.log(checkYuGiOh("fhkkkll is deer"));
console.log(checkYuGiOh("fizzbuzz is meh"));
console.log(checkYuGiOh([1,2,3,"a"]));
console.log(checkYuGiOh({Name: "favour"}));
 