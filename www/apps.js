var exec = require("cordova/exec");

var Apps = function () {
    this.name = "Apps";
};

Apps.prototype.list = function (func) {
	exec(func, null, "Apps", "list", []);
};

module.exports = new Apps();
