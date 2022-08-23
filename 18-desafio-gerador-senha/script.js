const valoresSenha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Z','Y','Z','1','2','3','4','5','6','7','8','9','%','_','-','@', '^', '~', '&']

const btnGerarSenha = document.querySelector('.btnGerarSenha')

const geradorSenha = () => {
  let senha = ''
  const  span = document.querySelector('.senha')

  for(let i = 1; i <= 10; i++){
    let caractereAleatorio = Math.floor(Math.random() * valoresSenha.length)
    senha += valoresSenha[caractereAleatorio]
  }

  return span.innerHTML = senha

}

btnGerarSenha.addEventListener('click', geradorSenha)

