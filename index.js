// Your code here

class Polygon {
  constructor (array){
    this.array = array;
  }

  get countSides (){
    return this.array.length;
  }

  get perimeter (){
    let sum = 0;
    for (let i = 0; i < this.countSides; i++){
      sum += this.array[i];
    }
    return sum;
  }
};

class Triangle extends Polygon {
  get isValid (){
    if (this.countSides !== 3) return false;
    else {
      let firstSide = this.array[0] + this.array[1];
      let secondSide = this.array[1] + this.array[2]; 
      let thirdSide = this.array[2] + this.array[0];

      if ((firstSide > this.array[2]) && (secondSide > this.array[0]) && (thirdSide > this.array[1])) return true;
      else return false;
    }
  }
}

class Square extends Polygon {
  get isValid (){
    let sideTest = this.array[0];
    for (let i = 0; i < this.array.length; i++){
      if (sideTest !== this.array[i]) return false;
    }
    return true;
  }

  get area (){
    return this.array[0] * this.array[0];
  }
}