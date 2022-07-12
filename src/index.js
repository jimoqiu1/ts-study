const { program } = require('commander')
 
// program
//   .option('-j | --join','Join IMWeb now!');
// program.parse()
// console.log(program.opts()) // {join: true}
// console.log(program.getOptionValue('join')) // true

program
  .option('--no-sauce', 'Remove sauce')
  .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
  .option('--no-cheese', 'plain with no cheese')
  .parse();
 
const options = program.opts();
const sauceStr = options.sauce ? 'sauce' : 'no sauce';
const cheeseStr = (options.cheese === false) ? 'no cheese' : `${options.cheese} cheese`;
console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}`);

