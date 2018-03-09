module.exports = class Variable{
  constructor(variableName){
    this.variableName = variableName;
  }

  toString(){
    return this.variableName;
  }

  inspect(){
    return this.toString();
  }

  reducible(){
    return true;
  }

  reduce(environment){
    return environment[this.variableName];
  }


}
