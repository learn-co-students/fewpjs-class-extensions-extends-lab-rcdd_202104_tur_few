// Your code here
class Polygon {
  constructor(shape) {
    this.shape = shape;
  }

  get countSides() {
    return this.shape.length;
  }

  get perimeter() {
    const add = (accumulator, currentValue) => accumulator + currentValue;
    return this.shape.reduce(add, 0);
  }
}
class Triangle extends Polygon {
  get isValid() {
    if (this.countSides != 3) return false;
    const side1 = this.shape[0];
    const side2 = this.shape[1];
    const side3 = this.shape[2];
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
      return true;
    } else {
      return false;
    }
  }
}
class Square extends Polygon {
  get isValid() {
    if (this.countSides != 4) return false;
    let side1 = this.shape[0];
    let side2 = this.shape[1];
    let side3 = this.shape[2];
    let side4 = this.shape[3];
    if (side1 === side2 && side2 === side3 && side3 === side4) {
      return true;
    } else {
      return false;
    }
  }
  get area() {
    return this.shape[0] * this.shape[0];
  }
}
