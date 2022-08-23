function primeira(){
  console.log("Primeira função")
  for(let i = 1; i <= 10; i++){
    console.log(i)
  }
}

function segunda(){
  console.log("Segunda função")
}


setTimeout(primeira, 2000) // Assíncrono

segunda()

console.log('oi')