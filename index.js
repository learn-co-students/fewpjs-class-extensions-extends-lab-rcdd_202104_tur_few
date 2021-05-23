// Your code here

class Polygon {
    constructor(array){
        this.array = array;
    }
    get countSides(){
        return this.array.length
    }
    get perimeter(){
        return this.array.reduce((acc, cur) => {
            return acc+cur 
        }, 0)
    }
}

let polygon = new Polygon( [ 5, 5, 5 ] );

class Triangle extends Polygon {
    get isValid(){
         for (let i=1; i<this.array.length ; i++){
             if(this.array[0] === this.array[i]){
                 return true
             }else {
                 return false
             }
         }
    }
}

let triangle = new Triangle( [ 5, 5, 5 ] )
let triangle2 = new Triangle( [ 15, 10, 1 ] )

class Square extends Polygon{
    get isValid(){
        for (let i=1; i<this.array.length ; i++){
            if(this.array[0] === this.array[i]){
                return true
            }else {
                return false
            }
        }
   }
   get area(){
            return this.array[0]**2
   }
} 

let square = new Square( [ 5, 5, 5, 5 ] )