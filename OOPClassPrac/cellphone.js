"use strict";
exports.__esModule = true;
var Cellphone = /** @class */ (function () {
    function Cellphone(brand, color, memoryBuiltIn, memoryExpansionAvaliable, CPU, RAMSize, currentCellOhoneNumber) {
        this.brand = brand;
        this.color = color;
        this.memoryBuiltIn = memoryBuiltIn;
        this.memoryExpansionAvaliable = memoryExpansionAvaliable;
        this.CPU = CPU;
        this.RAMSize = RAMSize;
        this.currentCellPhoneNumber = currentCellOhoneNumber;
    }
    Cellphone.prototype.call = function (num) {
        console.log(this.currentCellPhoneNumber + " is calling to " + num);
    };
    Cellphone.prototype.text = function (num, msg) {
        console.log(this.currentCellPhoneNumber + " is texting " + num + " with message of: " + msg);
    };
    return Cellphone;
}());
exports.Cellphone = Cellphone;
