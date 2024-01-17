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