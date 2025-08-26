const list = document.querySelector('ul')
const buttonShadowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const sumAll = document.querySelector('.sum-all')
const filterall = document.querySelector('.filter-all')

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', 
        {style: 'currency', 
        currency: 'BRL'
    });

    return newValue
}

function showAll(productsArray) {
let myLi = ''

    productsArray.forEach((product) => {
        myLi = myLi + ` 
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${formatCurrency(product.price)}</p>
            </li>
            `
    })

    list.innerHTML = myLi
}

function mapAllItems(){
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(newPrices)
}

function sumAllItems(){
    const totalValue = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)
    list.innerHTML = ` 
            <li>
                <p>Ótima escolha! <br>
                O valor total da sua compra é ${formatCurrency(totalValue)}</p>
            </li>
        `
}

function filterAllItems(){
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}


buttonShadowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterall.addEventListener('click', filterAllItems)