import moment from 'moment';

const birthday = moment('2000-10-19', 'YYYY-MM-DD');

console.log(birthday.fromNow());

console.log(birthday.format('dddd'));

console.log(birthday.format('MMM Do YYYY'));

const twoWeeksFromNow = moment().add(14, 'days');

console.log(twoWeeksFromNow.toString());

const sixMonthsAgo = moment().subtract(6, 'months');

console.log(sixMonthsAgo.toString());