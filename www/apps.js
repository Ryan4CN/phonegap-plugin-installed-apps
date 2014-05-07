var exec = require("cordova/exec");

var Apps = function (func) {
    this.name = "Apps";
};

Installed.prototype.list = function () {
	exec(func, null, "Apps", "list", []);
};

module.exports = new Apps();
