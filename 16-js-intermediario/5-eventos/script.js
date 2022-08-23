let btn = document.querySelector('#btn')

// onclick

/*
btn.onclick = function(){
  alert('Mensagem 1')
}

btn.onclick = function(){
  alert('Mensagem 2')
}
*/


// addEventListener


let contador = 0

function cliqueBotao(){
  contador++
  console.log(`Mensagem: ${contador}`)

  if(contador >= 10){
    btn.removeEventListener('click', cliqueBotao)
  } 
}


btn.addEventListener('click', cliqueBotao)


/*
btn.addEventListener('click', function(){
  console.log('Mensagem 2')
})
*/