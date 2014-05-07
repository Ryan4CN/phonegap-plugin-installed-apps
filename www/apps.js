var exec = require("cordova/exec");

var Apps = function (func) {
    this.name = "Apps";
};

Apps.prototype.list = function () {
	exec(func, null, "Apps", "list", []);
};

module.exports = new Apps();
