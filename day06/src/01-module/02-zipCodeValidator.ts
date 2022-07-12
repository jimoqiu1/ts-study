// import { stringValidator } from "./01-valitation";

// export const numberRegexp = /^[0-9]+$/;

// export class ZipCodeValidator implements stringValidator {
//     isAcceptable(s: string) {
//         return s.length === 5 && numberRegexp.test(s);
//     }
// }

// // export { ZipCodeValidator };
// export { ZipCodeValidator as mainValidator };

export default class ZipCodeValidator {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5 && ZipCodeValidator.numberRegexp.test(s);
    }
}