module.exports = class Add {
    constructor(left, right){
        this.left = left;
        this.right = right;
    }

    toString(){
        return `${this.left} + ${this.right}`;
    }

    inspect(){
        console.log(this.toString());
    }
}
