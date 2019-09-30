"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "teste1@gmail.com": new User('teste1@gmail.com', 'Teste1', 'teste1'),
    "teste2@gmail.com": new User('teste2@gmail.com', 'Teste2', 'teste2')
};
