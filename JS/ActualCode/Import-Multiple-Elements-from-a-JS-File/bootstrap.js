import * as helper from './helper';

console.log(helper.greeting);
console.log(helper.multiply(12, 5));

// OR
import { greeting, multiply } from './helper';

console.log(greeting);
console.log(multiply(5, 6));