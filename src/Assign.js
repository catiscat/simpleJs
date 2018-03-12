const DoNothing = require('./DoNothing');

module.exports = class Assign{
  constructor(name, expression){
    this.name = name;
    this.expression = expression;
  }

  toString(){
    return `${this.name} = ${this.expression}`;
  }

  inspect(){
    return this.toString();
  }

  reducible(){
    return true;
  }

  reduce(environment){
    if(this.expression.reducible()){
      return {statement: new Assign(this.name , this.expression.reduce(environment)),environment };
    }else{
      return {statement: new DoNothing(), environment};
    }
  }

  evaluate(environment){
    return {...environment, [this.name]: this.expression.evaluate(environment)};
  }

}
