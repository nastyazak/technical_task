$(document).ready(function(){
	$('.slider').slick({
		speed:1000,
		infinite: false,
		adaptiveHeight: true,
		variableWidth: true
	});
	function hideSliderArrows() {
	    if ($(window).width() < 768) {
	      $('.slider .slick-prev, .slider .slick-next').hide();
	    } else {
	      $('.slider .slick-prev, .slider .slick-next').show();
	    }
	}

  	hideSliderArrows();

	$(window).resize(function() {
	  hideSliderArrows();
	});
});

const $leftLinks = document.querySelectorAll('.categories a'),
			$mapLinks = document.querySelectorAll('.map a');

$leftLinks.forEach(el => {
	el.addEventListener('mouseenter', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let color = self.dataset.color;
		let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
		let currentPath = currentElement.querySelectorAll('path');
		if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
		self.classList.add('active');
	});

	el.addEventListener('mouseleave', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(`.map a[href="${selfClass}"]`);
		let currentPath = currentElement.querySelectorAll('path');
		if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
		self.classList.remove('active');
	});
});

$mapLinks.forEach(el => {
	el.addEventListener('mouseenter', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let color = self.dataset.color;
		let currentElement = document.querySelector(`.categories a[href="${selfClass}"]`);
		let currentPath = self.querySelectorAll('path');
		if (currentPath) currentPath.forEach(el => el.style.cssText = `fill: ${color}; stroke-width: 2px;`);
		currentElement.classList.add('active');
	});

	el.addEventListener('mouseleave', (e) => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(`.categories a[href="${selfClass}"]`);
		let currentPath = self.querySelectorAll('path');
		if (currentPath) currentPath.forEach(el => el.style.cssText = ``);
		currentElement.classList.remove('active');
	});

	el.addEventListener('click', (e) => {
		e.preventDefault();
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(`.categories a[href="${selfClass}"]`);
		let id = parseInt(currentElement.dataset.id);
		requestData(id);
	});
});


var more = document.querySelector('.more');
var area = document.querySelector('.area');

more.addEventListener('click', function(e) {
  e.preventDefault();
  area.style.display = area.style.display === 'none' ? 'block' : 'none';
});

var more2 = document.querySelector('.more2');
var area = document.querySelector('.area');

more2.addEventListener('click', function(e) {
  e.preventDefault();
  area.style.display = area.style.display === 'none' ? 'block' : 'none';
});
