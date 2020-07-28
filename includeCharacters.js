let nbrRange = document.getElementById("nbr-range");
let nbrNumber = document.getElementById("nbr-number");

function getNbrValue(e) {
  nbrRange.value = e.target.value;
  nbrNumber.value = e.target.value;
  filter.nbr = nbrNumber.value;
}

nbrNumber.addEventListener("input", getNbrValue);
nbrRange.addEventListener("input", getNbrValue);

let optionUppercase = document.getElementById("include-uppercase");
let optionNumber = document.getElementById("include-number");
let optionSymbol = document.getElementById("include-symbol");
let validForm = document.getElementById("validForm");

function submitOptions(e) {
  e.preventDefault();
  let array1 = [];
  let array2 = [];
  let array3 = [];
  let allArray = [];
  let nbr = generateNumberCharCode();
  let upperCase = generateUppercaseCharCode();
  let lowerCase = generateLowercaseCharCode();
  let symbol = generateSymboleCharCode();
  let password = [];
  optionNumber.checked === true ? (array1 = nbr) : array1;
  optionUppercase.checked === true ? (array2 = upperCase) : array2;
  optionSymbol.checked === true ? (array3 = symbol) : array3;
  allArray = lowerCase.concat(array1).concat(array2).concat(array3);
  for (let i = 1; i <= filter.nbr; i++) {
    let random = Math.floor(Math.random() * allArray.length);
    password.push(allArray[random]);
  }
  mdp.value = password.join("");
  generatePassword();
}

validForm.addEventListener("submit", submitOptions);
