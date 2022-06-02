import axios from 'axios'

let addToCart = document.querySelectorAll('.addcart')
let cartCounter = document.querySelector('#cartCounter ')

function updateCart(data) {
    axios.post('/update-cart', data).then(res => {
        console.log(res)
        cartCounter.innerText = res
    })
}
addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let data = JSON.parse(btn.dataset.data)
        updateCart(data)


    })
})