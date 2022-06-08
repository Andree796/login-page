const emailValido = document.querySelector('#input-email');

const senhaValida = document.querySelector('#input-email');

const botao = document.querySelector('#botao-enviar');//nao importante no momento

const texto = document.querySelector('#elemento-texto');


function validarEmail(){
  if(!emailValido.checkValidity()){
    texto.innerHTML="Por favor, ensina um email válido."
  }
}

function resetMensagem(){
  if(texto.innerHTML === "Por favor, ensina um email válido."){
    texto.innerHTML="";
  }
}

// botao.addEventListener('click', () => {
//   if(emailValido.value === "" || senhaValida.value === ""){
//     alert('Campo de email ou senha estão vazios!');
//   }else{
//     alert('Logado com sucesso!');
//   }
// })