
function mudarPage(){
  let newPage = '/index2.html'
  return window.location.pathname = newPage
}

function recarregarPagina(){
  return location.reload()
}

function voltarParaOTopo(){
  return window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

console.log(window)
console.log(location)


console.log(window.innerWidth)

console.log(window.innerHeight)

console.log( window.document.contains)
