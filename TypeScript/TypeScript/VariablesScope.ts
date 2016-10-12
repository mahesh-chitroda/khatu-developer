namespace mySpace {
    const x: number = 10;
}
const y: number = 20;

class VariableDeclaration {
    //const static x: number = 10; you can not declare constant variable inside class
}

function Var(y: number) {
    var x;
    //let x; can't declare same variable with var and let
    var x;
    for (let i = 0; i < 5; i++) {
        let y: string; // shadowing parameter y
    }
    //alert(i); i is not accessible here. i variable is delcared using let and scope of i is for loop
    for (var i = 0; i < 5; i++) {

    }
    alert(i);// var i scope is whole function.
    //a = 10; // can't use a variable.First we need to declare it and then we can use it.
    //let a;

    a = 10; // in case of var, we can first assign value to variable and then we can declare it.
    var a;

    let functionType = function () { //  nested function. here the type of varialbe x is function.
        alert("function inside function");                   //  and we can call this nested function with functionType().
    }
    functionType();
}

window.onload = () => {
    let varialbe = new VariableDeclaration();
    Var(10);
};