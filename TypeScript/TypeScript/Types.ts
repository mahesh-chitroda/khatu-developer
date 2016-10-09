﻿class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    numberValue: number;
    constructor(element: HTMLElement, isAllow: boolean, booleanExample: HTMLElement) {
        booleanExample.innerHTML = isAllow.toLocaleString();
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }
    SetNumber(numberExample: number, numberExampleElement: HTMLElement) {
        let numberType: number;
        numberType = numberExample;
        numberExampleElement.innerHTML = numberType.toLocaleString();
    }

    SetString(stringType: string, stringExample: HTMLElement) {
        let templateString: string;
        //templateString = `This is Template string example :${stringType}`; // Using backtick
        templateString = "This is Template string example :" + stringType;
        stringExample.innerHTML = templateString;
    }

    ArrayExample(arrayExample: any[], arrayElement: HTMLElement) {
        let genericArray: Array<string> = arrayExample;
        for (let i = 0; i < genericArray.length; i++) {
            arrayElement.innerHTML += arrayExample[i] + "<br\>";
        }
    }

    TupleExample(tupleElement: HTMLElement) {
        let tupleExample: [string, number];
        tupleExample = ["Mahesh", 1];
        tupleExample[2] = "Add new";
        for (let i = 0; i < tupleExample.length; i++) {
            tupleElement.innerHTML += tupleExample[i] + "<br\>";
        }
        tupleExample[2] = "Add Old";
        for (let i = 0; i < tupleExample.length; i++) {
            tupleElement.innerHTML += tupleExample[i] + "<br\>";
        }
    }

    stop() {
        clearTimeout(this.timerToken);
    }
}
window.onload = () => {
    var el = document.getElementById('content');
    let booleanExample = document.getElementById('booleanExample');
    let numberExample = document.getElementById('numberExample');
    var greeter = new Greeter(el, true, booleanExample);
    //greeter.SetNumber(0b1010, numberExample);
    greeter.SetNumber(0xf00d, numberExample);

    var stringExample = document.getElementById("stringExample");
    greeter.SetString("Mahesh Chitroda", stringExample);

    var arrayElement = document.getElementById("ArrayExample");
    greeter.ArrayExample([10, 20, 30, 40], arrayElement);

    var tupleElement = document.getElementById("TupleExample");
    greeter.TupleExample(tupleElement);
    greeter.start();
};