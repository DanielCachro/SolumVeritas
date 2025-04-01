// fadeInScale

export const fadeInScale = {
	hidden: {opacity: 0, scale: 0.8},
	visible: {opacity: 1, scale: 1, transition: {ease: 'easeOut'}},
}

export const getFadeInScaleProps = (useWhileInView = false) => {
	if (useWhileInView) {
		return {
			variants: fadeInScale,
			initial: 'hidden',
			whileInView: 'visible',
			viewport: {once: true},
		}
	} else {
		return {
			variants: fadeInScale,
			initial: 'hidden',
			animate: 'visible',
		}
	}
}

// fadeUp

export const fadeUp = {
	hidden: {opacity: 0, y: 20},
	visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
}

export const getFadeUpProps = (useWhileInView = false) => {
	if (useWhileInView) {
		return {
			variants: fadeUp,
			initial: 'hidden',
			whileInView: 'visible',
			viewport: {once: true},
		}
	} else {
		return {
			variants: fadeUp,
			initial: 'hidden',
			animate: 'visible',
		}
	}
}
// fadeUpStagger

export const fadeUpStaggerParent = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.3, // Opóźnienie między animacjami dzieci
		},
	},
}

export const getFadeUpStaggerParentProps = (useWhileInView = false) => {
	if (useWhileInView) {
		return {
			variants: fadeUpStaggerParent,
			initial: 'hidden',
			whileInView: 'visible',
			viewport: {once: true},
		}
	} else {
		return {
			variants: fadeUpStaggerParent,
			initial: 'hidden',
			animate: 'visible',
		}
	}
}

export const fadeUpStaggerChild = {
	hidden: {opacity: 0, y: 20},
	visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
}
