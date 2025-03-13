export default function calculateReadTime(blocks) {
	const charactersPerMinute = 1250
	const totalTextLength = blocks?.reduce((total, block) => total + (block.text?.length || 0), 0) || 0
	const readTime = Math.max(Math.round(totalTextLength / charactersPerMinute), 1)

	return readTime
}
