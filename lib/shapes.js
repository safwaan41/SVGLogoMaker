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
};

    setText(text) {
    this.text = ``;
};

    setTextColor(textColor) {
    this.textColor = textColor;

}

renderSvg() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><rect width="150" height="150" fill="${this.color}"/><text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
};
// new Shape ()
// Square constructor
class Square extends Shape {
    constructor (color, text, textColor, shape) {
        super(color, text, textColor);
        this.shape = shape;
    }
    renderSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><rect width="150" height="150" fill="${this.color}"/><text x="75" y="95" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
      }
};

// new Square (blue, leh, red)

// Circle constructor
class Circle extends Shape {
    constructor(color, text, textColor, shape) {
        super(color, text, textColor);
        this.shape = shape;
    }
    renderSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><circle cx="150" cy="100" r="80" fill="${this.color}"/><text x="150" y="120" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
      }
}

// Triangle constructor
class Triangle extends Shape {
    constructor (color, text, textColor, shape) {
        super(color, text, textColor);
        this.shape = shape;
    }
    renderSvg() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" ><polygon points="150, 30 244, 182 56, 182"fill="${this.color}" /><text x="150" y="160" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
      }
}

module.exports = {Square, Circle, Triangle}