//anonymous function 
(function () {

    alert("I am anonymous function");

    // *********************  function declaration ***********************************
    alert("Function Declaration :-" + functionDeclaration(5)); // function delcarion can call like this.
    function functionDeclaration(value) {
        return value + value;
    }


    // ***************  function expression ************************************************
    // alert("FunctionExpression :-" + functionExpression(5)); Will not work.You can not call function expression in this place.
    var functionExpression = function (a) { return a * a; };
    alert("FunctionExpression :-" + functionExpression(5));

})();

// () is a IIFE = imediate invoke function expression which invoke function when Javascript is register in web page
