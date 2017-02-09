"use strict";
var express = require("express");
var Server = (function () {
    function Server() {
        this.app = express();
    }
    Server.prototype.setRoutes = function () {
        this.app.get("/", this.renderIndex);
    };
    Server.prototype.startServer = function () {
        this.app.listen(8080, function () {
            console.log("Application listening on 8080");
        });
    };
    Server.prototype.renderIndex = function (req, res) {
        res.send("Hello world !");
    };
    return Server;
}());
exports.Server = Server;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQW1DO0FBRW5DO0lBR0k7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTSwwQkFBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLDRCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyw0QkFBVyxHQUFuQixVQUFvQixHQUFvQixFQUFFLEdBQXFCO1FBQzNELEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLHdCQUFNIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xyXG4gICAgcHJpdmF0ZSBhcHA6IGV4cHJlc3MuRXhwcmVzcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFwcCA9IGV4cHJlc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Um91dGVzKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLmdldChcIi9cIiwgdGhpcy5yZW5kZXJJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0U2VydmVyKCkge1xyXG4gICAgICAgIHRoaXMuYXBwLmxpc3Rlbig4MDgwLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFwcGxpY2F0aW9uIGxpc3RlbmluZyBvbiA4MDgwXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVySW5kZXgocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSkge1xyXG4gICAgICAgIHJlcy5zZW5kKFwiSGVsbG8gd29ybGQgIVwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=
