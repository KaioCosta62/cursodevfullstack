const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    const dadosApiConvertidos = JSON.parse(this.responseText)
    let box = ''

    for(let dados of dadosApiConvertidos){
      box += `
        <div class = 'box'>
          <h1> ${dados.title}</h1>
          <img src = '${dados.url}'> </img>
        </div>
      `
    }

    document.querySelector('.container').innerHTML = box

  }

  
}
xhttp.open('GET','https://jsonplaceholder.typicode.com/photos', true)
xhttp.send()