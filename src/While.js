const DoNothing = require('./DoNothing');
const If = require('./If');
const Sequence = require('./Sequence');

module.exports = class While{
  constructor(condition, body){
    this.condition = condition;
    this.body = body;
  }

  toString(){
    return `while(${this.condition}){${this.body}}`;
  }

  inspect(){
    return this.toString();
  }

  reducible(){
    return true;
  }
  //这里环境并没有更新???? how to update environment here???
  reduce(environment){
    return {
      statement: new If(
        this.condition,
        new Sequence(this.body, new While(this.condition, this.body)),
        new DoNothing()),
      environment
    }
  }
}
