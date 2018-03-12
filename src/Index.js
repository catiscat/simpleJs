const Add = require('./Add');
const Numbers = require('./Numbers');
const Mutiply = require('./Mutiply');
const Boolean = require('./Boolean');
const LessThan = require('./LessThan');
const Variable = require('./Variable');
const DoNothing = require('./DoNothing');
const Assign = require('./Assign');
const If = require('./If');
const Sequence = require('./Sequence');
const While = require('./While');

class Machine {
  constructor(statement, environment) {
    this.statement = statement;
    this.environment = environment;
  }

  toString(){
    return `statement: ${this.statement.inspect()}, environment: ${JSON.stringify(this.environment)}` }

  inspect(){
    console.log(this.toString());
  }

  step(){
    const { statement, environment } = this.statement.reduce(this.environment);
    this.statement = statement;
    this.environment = environment;
  }


  run(){
    while(this.statement.reducible()){
      this.inspect();
      this.step();
    }
  }
}


function runner() {
  const expression1 = new Add(new Add(new Numbers(3), new Numbers(5) ), new Mutiply(new Numbers(3), new Numbers(5)));
  const expression2 = new LessThan(new Add(new Numbers(40), new Numbers(9) ), new Numbers(5));
  const expression3 = new Add(new Variable('x'), new Variable('y'));
  const expression4 = new Assign('x', new Add(new Variable('x'), new Numbers(9)));
  const expression5 = new Assign(new Variable('a'), new Add(new Numbers(3), new Numbers(5)));
  const expression6 = new If(
    new LessThan(new Numbers(3), new Numbers(5)),
    new Assign(new Variable('r'), new Numbers(4)),
    new Assign(new Variable('r'), new Numbers(8))
  );
  const expression7 = new Sequence(
    new Assign('x', new Add( new Numbers(1), new Numbers(3) )),
    new Assign('y', new Add(new Numbers(4), new Numbers(6)))
  );
  const expression8 = new While(
    new LessThan(new Variable('x'), new Numbers(5)),
    new Assign('x', new Add(new Variable('x'), new Numbers(1)))
  );

  const environment = {x: new Numbers(3)};
  const res = new Machine(expression8, environment).run();
}


runner();
