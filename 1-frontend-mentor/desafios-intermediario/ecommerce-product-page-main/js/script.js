function showMenu() {
  const iconMenu = document.querySelector('.menu-hamburguer')
  const downMenu = document.querySelector('.icon-close')

  const menu = document.querySelector('.menu ul')
  const isOpen = menu.classList.contains('open-menu')

  iconMenu.addEventListener('click', function () {
    if (!isOpen) {
      return menu.classList.add('open-menu')
    }
  })

  downMenu.addEventListener('click', function () {
    return menu.classList.remove('open-menu')
  })
}

function showModal() {
  const mainImage = document.querySelector('.main-image')
  const downModal = document.querySelector('.icon-close-modal')
  const modal = document.querySelector('.modal')

  mainImage.addEventListener('click', function () {
    return modal.classList.add('open-modal')
  })

  downModal.addEventListener('click', function () {
    return modal.classList.remove('open-modal')
  })
}

let cartItensQtd = 1
let newPriceIte = 125

function addItem() {
  const btnPlus = document.querySelector('.plus')
  const priceItem = document.querySelector('.price')
  let amount = document.querySelector('.amount span')

  btnPlus.addEventListener('click', function () {
    cartItensQtd++
    newPriceItem = 250 * cartItensQtd * 0.5
    amount.innerHTML = cartItensQtd
    priceItem.innerHTML = `$${newPriceItem.toFixed(2)}`
  })
}

function removeItem() {
  const btnMinus = document.querySelector('.minus')
  const priceItem = document.querySelector('.price')
  let amount = document.querySelector('.amount span')

  btnMinus.addEventListener('click', function () {
    if (cartItensQtd === 1) {
      return (cartItensQtd = 1)
    }
    cartItensQtd--
    newPriceItem = 250 * cartItensQtd * 0.5
    amount.innerHTML = cartItensQtd
    priceItem.innerHTML = `$${newPriceItem.toFixed(2)}`
  })
}

let cartItensControl = 0

function itensCart() {
  const addCart = document.querySelector('.add-cart')
  const cartItens = document.querySelector('.cart-itens')
  const viewItens = document.querySelector('.view-itens')
  const emptyCart = document.querySelector('.empty-cart')

  addCart.addEventListener('click', function () {
    cartItensControl++
    emptyCart.style.display = 'none'
    
    let structuringHTML = `
    <div class="itens-cart open-cart">
    <img src="images/image-product-1-thumbnail.jpg" alt="">
    <div>
      <span class="description-item">
        Fall Limited Edition Sneakers
      </span>
      <div class="information-item">
        <span>$125.00 x ${cartItensQtd}</span>
        <span class="price-item-cart">${newPriceItem}.00</span>
      </div>
    </div>
    <img class = "delete-cart" src="images/icon-delete.svg" alt="">
  </div>
  <button class = "open-checkout">Checkout</button>
  `

  cartItens.innerHTML = cartItensControl

  viewItens.innerHTML += structuringHTML
})
}



showMenu()
showModal()
addItem()
removeItem()
itensCart()

