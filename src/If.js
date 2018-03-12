const Boolean = require('./Boolean');

module.exports = class If{
  constructor(condition, consequence, alternative){
    this.condition = condition;
    this.consequence = consequence;
    this.alternative = alternative;
  }

  toString(){
    return `if(${this.condition}){${this.consequence}}else{${this.alternative}}`;
  }

  inspect(){
    console.log(this.toString());
  }

  reducible(){
    return true;
  }

  reduce(environment){
    if(this.condition.reducible()){
      return {
        statement: new If(this.condition.reduce(environment), this.consequence, this.alternative),
        environment
      };
    }else{
      if(new Boolean(this.condition) ){
        return {
          statement: this.consequence,
          environment
        };
      }else{
        return {
          statement: this.alternative,
          environment
        };
      }
    }
  }

  evaluate(environment){
    if(new Boolean(this.condition.evaluate(environment))){
      return this.consequence.evaluate(environment);
    }else{
      return this.alternative.evaluate(environment);
    }
  }
}
