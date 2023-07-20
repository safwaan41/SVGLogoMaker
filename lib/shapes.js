// Parent class constructor made for each shape to inherit from
// ADD 2 COLORS. AND LETTERS
class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;

    }
    
    //function to set color on shape since all shapes will inherit color function from shape constructor
    setColor(color) {
        this.color = color;
    }
}
new Shape ()
// Square constructor
class Square extends Shape {
    constructor (color, text, textColor, shape) {
        super(color, text, textColor);
        this.shape = shape;
    }
}
new Square (blue, leh, red)
// Circle constructor
class Circle extends Shape {
    constructor(color, text, textColor, shape) {
        super(color, text, textColor);
        this.shape = shape;
    }
}

// Triangle constructor
class Triangle extends Shape {
    constructor (color, text, textColor, shape) {
        super(color, text, textColor);
        this.shape = shape;
    }
    render
}