var exec = require("cordova/exec");

var Installed = function (func) {
    this.name = "Installed";
};

Installed.prototype.list = function () {
	exec(func, null, "Installed", "list", []);
};

module.exports = new Installed();
