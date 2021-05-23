// Your code here

class Polygon {
  constructor(arr) {
    this.arr = arr;
  }
  
  get countSides() {
     return this.arr.length
  }
  
  get perimeter() {
     return this.arr.reduce((acc,curr) => acc + curr)
  }
}

class Triangle extends Polygon {
  // inherits constructor from Polygon
  
  get isValid() {
     const side1 = this.arr[0];
     const side2 = this.arr[1];
     const side3 = this.arr[2];
     if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
       return true
     } else {
       return false
     }
  }
}


class Square extends Polygon {
  // inherits constructor from Polygon
  
  get isValid() {
     const side1 = this.arr[0];
     const side2 = this.arr[1];
     const side3 = this.arr[2];
     const side4 = this.arr[3];
     if(side1 === side2 && side1 === side3  && side1 === side4 && side2 === side3 && side2 === side4 && side3 === side4) {
       return true
     } else {
       return false
     }
  }
  
   get area() {
     const side1 = this.arr[0];
     return side1 * side1
  }
}



  