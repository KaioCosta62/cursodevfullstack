const btnCarregar = document.querySelector('#carregarFotos')

function fetch(method,url) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        resolve(response)
      }

      if(this.status === 404){
        reject()
      }
    };

    xhttp.open(method, url, true);
    xhttp.send();
  });
}

function exibirNaTela(dados){
  console.log(dados)
}

function exibirErro(){
  let span = document.querySelector('span')
  span.style.display = 'block'
}

btnCarregar.addEventListener('click', () => {
  fetch('GET', 'https://jsonplaceholder.typicode.com/photos')
    .then(exibirNaTela)
    .catch(exibirErro)
})


