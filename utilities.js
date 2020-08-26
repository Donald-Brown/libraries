// Capitalize the first letter in a string
let capitalizeString = function(str){
  let first = str.substring(0, 1);
  return first.toUpperCase() + str.substring(1);
}

// sort an array
let sortArray = function(arr){
  let isArray = Array.isArray(arr);
  if(isArray){
    arr.sort(); // sorts array
  }
  return isArray; // return true or false
}