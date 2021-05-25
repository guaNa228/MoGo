function scrollWorksGallery() {
	document.querySelector('.worksContainerWrapper').scrollTo(document.body.clientWidth/3.8,0);
}

window.onresize = scrollWorksGallery;
window.onload = scrollWorksGallery;

function serviceOpen() {
	for (let i = 0; i<serviceOpenBtnArray.length; i++) {
		serviceOpenBtnArray[i].parentElement.nextElementSibling.classList.remove('opened');
		serviceOpenBtnArray[i].classList.remove('closeAnimation');
		serviceOpenBtnArray[i].classList.add('openAnimation');
		serviceOpenBtnArray[i].parentElement.nextElementSibling.classList.add('closed');
	}
	this.parentElement.nextElementSibling.classList.remove('closed');
	this.classList.remove('openAnimation');
	this.parentElement.nextElementSibling.classList.add('opened');
	this.classList.add('closeAnimation');
}

var serviceOpenBtnArray = document.querySelectorAll('.serviceOpenBtn');

serviceOpenBtnArray.forEach(function(item) {
	item.onclick = serviceOpen;
})

let work = document.getElementsByClassName('bottomMenuItem');
[].forEach.call(work, (item) => {
	item.onclick = function() {
		document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
	}
})
