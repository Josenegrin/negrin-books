const checkIfStartViewTransitionIsSupported = () => {
	return Boolean(document.startViewTransition)
}

const fetchpage = async (url) => {
	const response = await fetch(url.pathname)
	const text = await response.text()
	const [, data] = text.match(/<body>([\s\S]*)<\/body>/i)
	return data
}

const startViewTransition = (content) => {
	document.startViewTransition(() => {
		document.getElementById('content').innerHTML = content
		document.documentElement.scrollTop = 0
	})
}

const viewTransitionAnimation = () => {
	if (!checkIfStartViewTransitionIsSupported()) return

	window.navigation.addEventListener('navigate', (e) => {
		const toUrl = new URL(e.destination.url)

		if (location.origin !== toUrl.origin) return

		e.intercept({
			async handler () {
				const data = await fetchpage(toUrl)
				startViewTransition(data)
			}
		})
	})
}

export default viewTransitionAnimation