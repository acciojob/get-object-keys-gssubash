//your JS code here. If required.
const student = {
	name:'subash'
};

Object.prototype.getKeys = function () {
	return Object.keys(this);
}

student.getKeys(); 