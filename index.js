// Your code here

class Polygon {
    constructor([...sides]) {
        this.sides = sides;
    }

    get countSides () {
        return this.sides.length;
    }

    get perimeter () {

        // let perimeter = 0;

        // for (let i = 0; i < this.sides.length; i++) {
        //     perimeter += this.sides[i];     
        // }

        // return perimeter;

        let perimeter = this.sides.reduce((acc, curr) => {return acc + curr}, 0);

        return perimeter;
    }
}

class Triangle extends Polygon {
    get isValid () {
        let validifier = this.sides.every(side => side > 0)
        return validifier;
    }
}