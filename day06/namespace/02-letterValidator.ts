import { StringValidator } from "./01-stringValidators";

const letterReg = /^[A-Za-z]+$/

export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return letterReg.test(s)
    }
}
