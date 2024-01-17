document.addEventListener('DOMContentLoaded', restaurarOpcaoSelecionada);

function abrirPopup() {
  var overlay = document.querySelector('.popup-overlay');
  overlay.style.display = 'block';
}

function selecionarOpcao(opcao) {
  var campoTexto = document.querySelector('.popup-link');
  campoTexto.value = opcao;
  salvarOpcaoSelecionada(opcao);
  fecharPopup();
}

function fecharPopup() {
  var overlay = document.querySelector('.popup-overlay');
  overlay.style.display = 'none';
}

function salvarOpcaoSelecionada(opcao) {
  localStorage.setItem('opcaoSelecionada', opcao);
}

function restaurarOpcaoSelecionada() {
  var opcaoSelecionada = localStorage.getItem('opcaoSelecionada');
  if (opcaoSelecionada) {
    var campoTexto = document.querySelector('.popup-link');
    campoTexto.value = opcaoSelecionada;
  }
}

document.addEventListener('DOMContentLoaded', function() {
    var campo = document.getElementById('campo-input');
  
    var valorSalvo = localStorage.getItem('valorCampo');
    if (valorSalvo) {
      campo.value = valorSalvo;
    }
  
    campo.addEventListener('input', function() {
      localStorage.setItem('valorCampo', campo.value);
    });
  });