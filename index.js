class Polygon {
    constructor(arrayOfIntegers) {
        this.sides = arrayOfIntegers;
    };

    get countSides() {
        return this.sides.length;   
    };

    get perimeter() {
        return this.sides.reduce((accumulator, currentValue) => accumulator += currentValue);
    };
};

class Triangle extends Polygon {

    get isValid() {
        
        let state = true;
        let sides = this.sides;

        if (sides[0] + sides[1] > sides[2] === false || this.sides[1] + sides[2] > sides[0] === false || sides[0] + sides[2] > sides[1] === false) {
            state = false;
        }
        return state;
    };
};

class Square extends Polygon {

    get isValid() {

        let state = true;
        let sides = this.sides;

        if (sides[0] === sides[1] === false || sides[0] === sides[2] === false || sides[0] === sides[3] === false || sides[1] === sides[2] === false || sides[1] === sides[3] === false || sides[2] === sides[3] === false) {
            state = false;
        }
        return state
    };

    get area() {
        
        let sides = this.sides;
        return sides[0] * sides[0];
    }

}
