//your JS code here. If required.
function Name_of_function() {
	let a= arguments.callee.name;
	return a;
}
console.log(Name_of_function());