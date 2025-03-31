// fadeInScale

export const fadeInScale = {
	hidden: {opacity: 0, scale: 0.8},
	visible: {opacity: 1, scale: 1, transition: {ease: 'easeOut'}},
}

export const fadeInScaleProps = {
	variants: fadeInScale,
	initial: 'hidden',
	whileInView: 'visible',
	viewport: {once: true},
}

// fadeUp

export const fadeUp = {
	hidden: {opacity: 0, y: 20},
	visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
}

export const fadeUpProps = {
	variants: fadeUp,
	initial: 'hidden',
	whileInView: 'visible',
	viewport: {once: true},
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

export const fadeUpStaggerParentProps = {
	variants: fadeUpStaggerParent,
	initial: 'hidden',
	whileInView: 'visible',
	viewport: {once: true},
}

export const fadeUpStaggerChild = {
	hidden: {opacity: 0, y: 20},
	visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
}
