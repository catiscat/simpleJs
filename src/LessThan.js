const Boolean = require('./Boolean');

module.exports = class LessThan {
  constructor(left, right){
    this.left = left;
    this.right = right;
  }

  toString(){
    return `${this.left} < ${this.right}`;
  }

  inspect(){
    return this.toString();
  }

  reducible(){
    return true;
  }

  reduce(){
    if(this.left.reducible()){
      return new LessThan(this.left.reduce(), this.right);
    }else if(this.right.reducible()){
      return new LessThan(this.left, this.right.reduce());
    }else{
      return new Boolean(this.left < this.right);
    }
  }

}