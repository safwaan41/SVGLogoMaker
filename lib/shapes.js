// Parent class constructor made for each shape to inherit from
class Shape {
    constructor(){
        this.color = ``;
    }
    
    //function to set color on shape since all shapes will inherit color function from shape constructor
    setColor(color) {
        this.color = color;
    }
}

// Square constructor
class Square extends Shape {
    constructor () {
        super(color);
    }
}

// Circle constructor
class Circle extends Shape {
    constructor() {
        super(color);
    }
}

// Triangle constructor
class Triangle extends Shape {
    constructor (){
        super(color);
    }
}