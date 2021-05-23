class Polygon {
  constructor(arr){
    this.arr = arr;
  }

get countSides() {
  return this.arr.length;
}

get perimeter(){
  return this.arr.reduce((acc, curr) => acc + curr, 0);
}
}

class Triangle extends Polygon {
  get isValid(){
    if(this.arr[0] + this.arr[1] > this.arr[2] && this.arr[1] + this.arr[2] > this.arr[0] && this.arr[0] + this.arr[2] > this.arr[1]) {
        return true;
      } else {
       return false;
     }
   }
 }

class Square extends Polygon {
  get isValid(){
    if(this.arr[0] === this.arr[1] && this.arr[1] === this.arr[2] && this.arr[2] === this.arr[3]) {
      return true;
      } else {
      return false;
      }
    }

  get area(){
    return this.arr[0] * this.arr[1];
  }
  }
