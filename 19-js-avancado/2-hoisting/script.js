function teste(){
  outraFuncao()
  function outraFuncao(){
    console.log('Sou a outra função')
  }
}

teste()