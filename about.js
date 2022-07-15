console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('form submit')
	// console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('content img')
function alertCompliment() {
	alert('You have a heart of gold.')
}
image.addEventListener('mouseover', alertCompliment)