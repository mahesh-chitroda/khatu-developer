var Greeter = (function () {
    function Greeter(element, isAllow, booleanExample) {
        booleanExample.innerHTML = isAllow.toLocaleString();
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.SetNumber = function (numberExample, numberExampleElement) {
        numberExampleElement.innerHTML = numberExample.toLocaleString();
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var booleanExample = document.getElementById('booleanExample');
    var numberExample = document.getElementById('numberExample');
    var greeter = new Greeter(el, true, booleanExample);
    greeter.SetNumber(10, numberExample);
    greeter.start();
};
//# sourceMappingURL=Types.js.map