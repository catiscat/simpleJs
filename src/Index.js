const Add = require('./Add');
const Numbers = require('./Numbers');
const Mutiply = require('./Mutiply');
const Boolean = require('./Boolean');
const LessThan = require('./LessThan');
const Variable = require('./Variable');

class Machine {
  constructor(expression, environment) {
    this.expression = expression;
    this.environment = environment;
  }

  step(){
    this.expression = this.expression.reduce(this.environment);
  }

  run(){
    while(this.expression.reducible()){
      this.expression.inspect();
      this.step();
    }
    this.expression.inspect();
  }
}


function runner() {
  const expression1 = new Add(new Add(new Numbers(3), new Numbers(5) ), new Mutiply(new Numbers(3), new Numbers(5)));
  const expression2 = new LessThan(new Add(new Numbers(40), new Numbers(9) ), new Numbers(5));
  const expression3 = new Add(new Variable('x'), new Variable('y'));
  const environment = {x: new Numbers(3), y: new Numbers(8) };
  const res = new Machine(expression3, environment).run();
}


runner();
