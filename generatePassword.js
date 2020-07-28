function generatePassword() {
  console.log(mdp.value);
  let motDePasse = document.querySelector("#pwd");
  motDePasse.value = mdp.value;
  activeButton();
}
