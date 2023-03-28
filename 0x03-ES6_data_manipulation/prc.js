// function cleanSet(set, startString) {
// 	let result = "";
// 	set.forEach((value) => {
// 	  if (value.startsWith(startString)) {
// 		result += value.slice(startString.length) + "-";
// 	  }
// 	});
	// Remove the trailing "-" character from the end
// 	return result.slice(0, -1);
//   }
function cleanSet(set, startString) {
	if (startString === '') {
	  return '';
	}
	let result = '';
	let foundValues = false;
	for (let value of set) {
	  if (value.startsWith(startString)) {
		result += value.slice(startString.length) + '-';
		foundValues = true;
	  }
	}
	return foundValues ? result.slice(0, -1) : '';
  }
  

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));