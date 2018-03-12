module.exports = class DoNothing{
  toString(){
    return 'do-nothing';
  }

  inspect(){
    console.log(this.toString());
  }

  reducible(){
    return false;
  }

  evalutate(environment){
    return environment;
  }

}
