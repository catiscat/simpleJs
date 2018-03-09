module.exports = class Boolean{
  constructor(bool){
    this.bool = bool;
  }

  toString(){
    return this.bool.toString();
  }

  inspect(){
    console.log(this.toString());
  }

  reducible(){
    return false;
  }
}
