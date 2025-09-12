"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function FetchData(id) {
    return Promise.resolve("string returned");
}
const fetchValue = async (id) => {
    return Promise.resolve({ name: "sd", age: 33 });
};
// Rest parameter and Arguments
function multiplyBy(by, ...numbers) {
    return numbers.map((number) => by * number);
}
console.log(multiplyBy(2, 3, 4, 5, 6));
const arg = [3, 0];
const angle = Math.atan2(...arg);
console.log(angle);
//# sourceMappingURL=AsyncFunction.js.map