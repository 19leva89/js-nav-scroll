class Nav {
	static #HOME_PAGE = 'https://google.com'

	static #back = () => {
		return history.back()
	}

	static #forward = () => {
		return history.forward()
	}

	static #reload = () => {
		return location.reload();
	}

	static #home = () => {
		return this.#changePage(this.#HOME_PAGE);  // Перехід на домашню сторінку
	}

	static #go = () => {
		try {
			// Отримуємо URL від користувача з елементу введення (window.input.value)
			const url = new URL(window.input.value);

			// Викликаємо приватний метод #changePage з визначеним URL
			this.#changePage(url.href);
		} catch (error) {
			// Обробка помилки
			alert('Введено неправильний URL');
		}
	}

	static #changePage = (href) => {
		if (href && typeof href === 'string') {
			return location.href = href;  // Перехід на нову сторінку за вказаним URL
		} else {
			console.error('Невірний URL');  // Обробка помилки: неправильний URL
		}
	}

	static init = () => {
		window.back.onclick = this.#back
		window.forward.onclick = this.#forward
		window.reload.onclick = this.#reload
		window.home.onclick = this.#home
		window.go.onclick = this.#go

		window.input.value = location.href
	}
}

Nav.init()