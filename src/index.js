module.exports = function check(str, bracketsConfig) {
	str = str.split('');
	let checkTimes = str.length/2 + 1;

	for (let i = 0; i <= checkTimes; i ++) {
		 str.forEach(function(item, i, arr) {
		 	for (let n = 0; n < bracketsConfig.length; n ++) {
		 		if (arr[i] === bracketsConfig[n][0] && arr[i+1] === bracketsConfig[n][1]) {
		 			str.splice(i, 2);
		 		};
		 	};
		 });

		if (str.length === 0) break;
	};
		
	if (str.length === 0) {
		return true;
	} 
	else {
		return false;
	}
};