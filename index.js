class Polygon{
    constructor(sides){
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let result = 0
        for(let i = 0; i < this.sides.length; i++){
            result += this.sides[i]
        }
        return result

    }

}

class Triangle extends Polygon{
    get isValid(){

        if( this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1] ){
            return true
        }
        else{
            return false
        }


    }

}



class Square extends Polygon {
    get isValid(){


        if(this.sides[0] == this.sides[1] && this.sides[0] == this.sides[2] && this.sides[0] == this.sides[3]){
            return true
        }
        else{
            return false
        }
        
    }


    get area(){
        return this.sides[0] * this.sides[0]
    }

}









// Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent each side of a shape.
// Use the get keyword to make a getter method countSides that counts the number of sides (each index in the array).
// Use the get keyword to make a getter method perimeter that calculates the sum of each side (each index in the array) of the polygon. This method will become accessible to its child classes.


// Define a Triangle class that inherits from Polygon.
// It will automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 3 sides for a triangle is valid.


// Define a Square class that inherits from Polygon.
// It will automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 4 sides for a square is valid. A square is valid when the lengths of all sides are equal.
// Use the get keyword to make a getter method area that calculates the area of the square.
