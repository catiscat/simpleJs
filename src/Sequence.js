module.exports = class Sequence{
  constructor(first, second){
    this.first = first;
    this.second = second;
  }

  toString(){
    return `${this.first}, ${this.second}`;
  }

  inspect(){
    console.log(this.toString());
  }

  reducible(){
    return true;
  }

  reduce(environment){
    if( !this.first.reducible() ){
      return {statement: this.second, environment}
    }else{
      const reducedResult = this.first.reduce(environment);
      return {
        statement: new Sequence(reducedResult.statement, this.second),
        environment: reducedResult.environment
      };

    }
  }
}
