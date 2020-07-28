let copyBtn = document.querySelector("#cpy-btn");
let motDePasse = document.querySelector("#pwd");

function activeButton() {
  if (mdp.value === "") {
    copyBtn.disabled = true;
  } else {
    copyBtn.disabled = false;
  }
}

function copyPassword() {
  if (motDePasse.value.length > 0) {
    console.log("okokok");
    motDePasse.select();
    motDePasse.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Le mot de passe : " + motDePasse.value + " à été copié");
  } else {
    console.log("kokoko");
  }
}
activeButton();
copyBtn.addEventListener("click", copyPassword);
