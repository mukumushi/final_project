//Grabbing Elements
const openBtn = document.getElementByClassName('openModal');
const modal = document.getElementByClassName('modal')
const close = document.getElementById('close')

//Functions
const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}

//Event Listeners
openBtn.addEventListener('click', openModal)

close.addEventListener('click', closeModal)