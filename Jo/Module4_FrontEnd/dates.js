//first run:
//1. npm init (accept all defaults)
//2. npm install date-fns
//3. node dates.js


//to keep package size small, we only import the functions we need instead of the whole date-fns package
const format = require('date-fns/format');
const addYears = require('date-fns/addYears');
const differenceInDays = require('date-fns/differenceInDays');
const differenceInBusinessDays = require('date-fns/differenceInBusinessDays')
const russianLocale = require('date-fns/locale/ru');

const stPattysDay = new Date('2020/03/17');
const stPattymdy = format(stPattysDay, 'MM/dd/yyyy');
const stPattymmdy = format(stPattysDay, 'MMMM dd, yyyy');

console.log(stPattymdy);
// => "03/17/2020"

console.log(stPattymmdy);
// => "March 17, 2020"

const stPattysDayNextYear = addYears(stPattysDay, 1);
const stPattyNextmmdy = format(stPattysDayNextYear, 'MMMM dd, yyyy');

console.log(stPattyNextmmdy);
// => "March 17, 2021"

const stPattymmdyRu = format(stPattysDay, 'MMMM dd, yyyy', { locale: russianLocale });

console.log(stPattymmdyRu);
// => "марта 17, 2020"

const startDate = new Date('2020/01/01');
const endDate = new Date('2020/12/24');
const daysBetween = differenceInDays(endDate, startDate);
const workdaysBetween = differenceInBusinessDays(endDate, startDate);

console.log(daysBetween);
// => 358

console.log(workdaysBetween);
// => 256