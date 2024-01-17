var form = document.getElementById("loginForm");
var emailInput = document.getElementById("email");
form.addEventListener("submit", function(event) {
  var email = emailInput.value;
  var allowedDomains = ["gmail.com", "hotmail.com", "outlook.com", "uol.com", "yahoo.com", "icloud.com", "mail.com", "aol.com"];

  var domain = email.substring(email.lastIndexOf("@") + 1);
  if (!allowedDomains.includes(domain)) {
    event.preventDefault();
    alert("Por favor, insira um email válido com domínio permitido.");
  }
})
function abrirPopup(id) {
    var popup = document.getElementById(id);
    popup.style.display = 'block';
  }
  function fecharPopup(id) {
    var popup = document.getElementById(id);
    popup.style.display = 'none';
  }
  var campoInput = document.getElementById("campo-input");

  campoInput.addEventListener("click", function() {
    campoInput.removeAttribute("readonly");
  });