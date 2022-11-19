window.onload = () => {
	document.addEventListener('click', e => {
		if (e.ctrlKey && e.altKey) {
			e.preventDefault()
			navigator.clipboard.writeText(
				e.target.parentElement.innerText.trim()
			)
		} else if (e.ctrlKey) {
			e.preventDefault()
			if (e.target.nodeName === 'IMG') {
				navigator.clipboard.writeText(e.target.getAttribute('src'))
			} else {
				navigator.clipboard.writeText(e.target.innerText.trim())
			}
		}
	})
}
