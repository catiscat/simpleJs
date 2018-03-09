const Add = require('./Add');
const Numbers = require('./Numbers');
const Mutiply = require('./Mutiply');

function run(){
   return new Add(new Numbers(3), new Mutiply(new Numbers(3), new Numbers(5))).inspect();
}


run();