const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

function createColor() {
    alert('Favorite Color: Pink')
}

function createPlace() {
    alert('Favorite Place: Austin')
}

function createRitual() {
    alert('Favorite Ritual: Walking Dogs')
}

colorBtn.addEventListener('click', createColor)
placeBtn.addEventListener('click', createPlace)
ritualBtn.addEventListener('click', createRitual)