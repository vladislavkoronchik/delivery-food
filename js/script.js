let body = document.querySelector('body');
let buttonShoppingCard = document.querySelector('#button-shopping-card');
let modal = document.querySelector('.modal');
let buttonCloseModal = modal.querySelector('.close');

if (buttonShoppingCard && modal) {

	let openModal = function() {
		modal.classList.add('active');
		modal.classList.remove('visually-hidden');
		body.classList.add('lock');
	}
	let closeModal = function() {
		modal.classList.remove('active');
		modal.classList.add('visually-hidden');
		body.classList.remove('lock');
	}

	buttonShoppingCard.addEventListener('click', openModal);
	buttonCloseModal.addEventListener('click', closeModal);
}

new WOW().init();