// import Validator from "./01-module/02-zipCodeValidator";

// let validator: Validator = new Validator()
// let b = validator.isAcceptable('wnagdddddd')
// console.log(b);

// /// <reference path="./03-外部模块/node.d.ts"/>
// import * as URL from "url";
// let myUrl = URL.parse("http://www.typescriptlang.org");
// console.log(myUrl)

import { StringValidator } from "./namespace/01-stringValidators"
import { ZipCodeValidator } from "./namespace/03-zipCodeValidator"
import { LettersOnlyValidator } from "./namespace/02-letterValidator"

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: StringValidator; } = {};
validators["ZIP code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();

// Show whether each string passed each validator
strings.forEach(s => {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
});

