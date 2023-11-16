const checkSession = () => {

}

const replaceString = (string, regEx, replaceWith) => {
	if (string) {
		return string.replace(regEx, replaceWith)
	}
}

const searchAlgo = (stringsArray = [], searchString = "") => {
	const matchingStrings = [];

	const threshold = searchString.length * .9; // 90% of search string length

	for (let i = 0; i < stringsArray.length; i++) {
		const currentString = stringsArray[i];

		let count = 0;
		for (let j = 0; j < searchString.length; j++) {
			if (currentString.includes(searchString[j])) {
				count++;
			}
		}

		if (count >= threshold) {
			matchingStrings.push(currentString);
		}
	}

	return matchingStrings;
}

export { checkSession, replaceString, searchAlgo };