
function escreverNoConsole(mensagem){
  console.log(mensagem)
}

function alterarBackGroundTela(color = 'darkblue'){
  document.querySelector('body').style.backgroundColor = color
}

function resetarBackGround(){
  document.querySelector('body').style.backgroundColor = 'white'
}