export default function getMinuteString(number) {
	const lastDigit = number % 10
	const lastTwoDigits = number % 100

	if (number === 1) {
		return `${number} minutę`
	} else if (lastDigit === 1 && lastTwoDigits !== 11) {
		return `${number} minut`
	} else if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
		return `${number} minuty`
	} else {
		return `${number} minut`
	}
}
