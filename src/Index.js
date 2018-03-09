const Add = require('./Add');
const Numbers = require('./Numbers');
const Mutiply = require('./Mutiply');

class Machine {
  constructor(expression) {
    this.expression = expression;
  }

  step(){
    this.expression = this.expression.reduce();
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
  const res1 = new Machine(expression1).run();
}


runner();
