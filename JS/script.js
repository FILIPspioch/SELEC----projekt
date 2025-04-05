//elementy
const profil_icon = document.querySelector("#profile_icon");
const viewport = document.querySelector("main");

//kod

//obsługa klikniecia na ikone profilu
profil_icon.addEventListener("click", () => {
  displayLogin();
});

//funckje
function displayLogin() {
  viewport.innerHTML += `<div id="login-form">
    <h2>Login</h2>
    <form>
        <input type="text" name="login" placeholder="Login"><br>
        <input type="password" name="password" placeholder="Hasło"><br>
        <button id="Zaloguj-btn"> Zaloguj Się </button>
    </form> 
  </div>`;

  let formSubmitButton = document.querySelector("#login-form #Zaloguj-btn");

  let form = document.querySelector("#login-form");
  let tb_login = form.querySelector(`input[name="login"]`);
  let tb_password = form.querySelector(`input[name="password"]`);

  formSubmitButton.addEventListener("click", (ev) => {
    ev.preventDefault();

    if (tb_login.value == "Filip" && tb_password.value == "123") {
      console.log("Zalogowano");
      form.querySelector("h2").innerHTML = "Zalogowano";
    }

    //document.querySelector("#login-form").style.display = "none";
  });
}
