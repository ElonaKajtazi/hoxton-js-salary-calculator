//Calculating the net salary of an employee who's gross salary is 500 € or more.
let salary = 500;
console.log(`This persons gross salary is ${salary} € `);
let pensionContribution = (5 / 100) * salary;
console.log(`This persons pension contributions are  ${pensionContribution} €`);
let taxedSalary = salary - pensionContribution;
console.log(`This persons taxed salary is  ${taxedSalary} €`);

// // 0% tax on 0-80 EUR per month = tax
// // - 4% on amounts between 80-250 EUR = tax1
// // - 8% on amounts between 250-450 EUR = tax2
// // - 10% on everything over 450 EUR tax3

let tax = 0;
let tax1 = 0.04 * 250 - 0.04 * 80;
let tax2 = 0.08 * 450 - 0.08 * 250;
let tax3 = 0.1 * taxedSalary - 0.1 * 450;

let totalTaxes = tax + tax1 + tax2 + tax3;
console.log(`Total taxes  ${totalTaxes} €`);

let netSalary = taxedSalary - totalTaxes;
console.log(`This persons final pay  is  ${netSalary} €`);

// function netSalary(a) {
//   let result;
//   if (a >= 450) {
//     result(a - pensionContribution -(tax + tax1 + tax2 + taxedSalary * 0.1 - 450 * 0.1));
//   } else if (a > 250 && a < 450) {
//     result(a - pensionContribution -(tax + tax1 + taxedSalary * 0.08 - 250 * 0.08));
//   } else if (a > 80 && a < 250) {
//     result(a - pensionContribution - (tax + taxedSalary * 0.04 - 80 * 0.04));
//   } else {
//      result (a - pensionContribution - tax);
//   }
//   return result;
// }
// console.log(netSalary(350));
