const buttonScroll = document.getElementById('buttonScroll');

// Функція, яка перевіряє, чи користувач спустився нижче ніж на дві секції вниз
function checkScrollPosition() {
	const windowHeight = window.innerHeight;
	const scrollPosition = window.scrollY;
	const triggerPoint = windowHeight; // Одна висота екрану вниз від верху

	if (scrollPosition > triggerPoint) {
		buttonScroll.style.display = 'flex';
	} else {
		buttonScroll.style.display = 'none';
	}
}

// Встановлюємо інтервал для перевірки позиції прокрутки кожні 500 мс
setInterval(checkScrollPosition, 500);

// Обробник події для прокрутки сторінки вгору при кліку на кнопку
buttonScroll.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
});
