let convertCtoF = function(c){
  return (c * 1.8) + 32;
}

let convertFtoC = function(f){
  return (f - 32) / 1.8;
}

let convertKgToLbs = function(kg){
  return kg / 0.45359237;
}

let convertLbsToKg = function(lbs){
  return lbs * 0.45359237;
}

export { convertCtoF, convertFtoC, convertKgToLbs, convertLbsToKg };