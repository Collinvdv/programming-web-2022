// -------------------------------------------------------------------------
// ES 5 
// -------------------------------------------------------------------------
// var square = function(number) {
//   return number * number;
// };

// square(5);

function square2(number) {
  return number * number;
}

square2(5);


// -------------------------------------------------------------------------
// ES 6 
// -------------------------------------------------------------------------

const oppervlakteVierkant = (lengte, breedte) => {
  return lengte * breedte;
};

console.log(oppervlakteVierkant(5, 10));

const oppervlakteVierkant2 = (lengte, breedte) =>  lengte * breedte;

console.log(oppervlakteVierkant2(5, 10));

const square = number => number * number;
console.log(square(5));


// -------------------------------------------------------------------------
// Multiple parameters
// -------------------------------------------------------------------------
const squareES6Multiple = (number1 , number2) => {
  return number * number;
};

// -------------------------------------------------------------------------
// Single parameters
// -------------------------------------------------------------------------
const squareES6Single = number => {
  return number * number;
};

// -------------------------------------------------------------------------
// No parameters
// -------------------------------------------------------------------------
const squareOf5No = () => {
  return 5 * 5;
};

// -------------------------------------------------------------------------
// Single line parameters
// -------------------------------------------------------------------------
const squareSingle = number => number * number;