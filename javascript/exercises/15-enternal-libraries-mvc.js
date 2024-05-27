import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import isSatSun from "./15f.js";

//15a
export const today = dayjs();
const plusFive = today.add(5, 'days');
console.log(plusFive.format('MMMM D'));

// 15b
const plusMonth = today.add(1, 'month');
console.log(plusMonth.format('MMMM D'));

// 15c
const minusMonth = today.subtract(1, 'month');
console.log(minusMonth.format('MMMM D'));

// 15d
console.log(today.format('dddd'));

// 15e, 15f
const example = today.add(5, 'days');
console.log(isSatSun(example));