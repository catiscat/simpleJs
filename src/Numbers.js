module.exports = class Numbers {
	constructor(number) {
		this.number = number;
	}

	toString() {
		return this.number.valueOf();
	}

	inspect() {
		console.log(this.toString());
  }
  
  reducible(){
    return false;
  }

}