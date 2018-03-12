const Numbers = require('./Numbers');

module.exports = class Mutiply {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  toString() {
    return `${this.left} * ${this.right}`;
  }

  inspect() {
    console.log(this.toString());
  }

  reducible(){
    return true;
  }

  reduce(environment){
    if(this.left.reducible()){
      return new Mutiply(this.left.reduce(environment), this.right);
    }else if(this.right.reducible()){
      return new Mutiply(this.left, this.right.reduce(environment));
    }else{
      return new Numbers(this.left * this.right);
    }
  }

  evaluate(environment){
    return new Numbers(this.left.evaluate(environment) * this.right.evaluate(environment));
  }
}
