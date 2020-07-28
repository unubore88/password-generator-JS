function generateLowercaseCharCode() {
  const arrayOfUppercase = [];
  for (let i = 97; i <= 122; i++) {
    arrayOfUppercase.push(String.fromCharCode(i));
  }
  return arrayOfUppercase;
}

function generateUppercaseCharCode() {
  const arrayOfUppercase = [];
  for (let i = 65; i <= 90; i++) {
    arrayOfUppercase.push(String.fromCharCode(i));
  }
  return arrayOfUppercase;
}

function generateNumberCharCode() {
  const arrayOfNumber = [];
  for (let i = 48; i <= 57; i++) {
    arrayOfNumber.push(String.fromCharCode(i));
  }
  return arrayOfNumber;
}

function generateSymboleCharCode() {
  const arrayOfSymbol = [];
  for (let i = 33; i <= 47; i++) {
    arrayOfSymbol.push(String.fromCharCode(i));
  }
  return arrayOfSymbol;
}
