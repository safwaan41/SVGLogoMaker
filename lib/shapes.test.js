// shapes.js is imported to test. contains classes SHAPE, CIRCLE, SQUARE, AND TRIANGLE
const {Circle, Square, Triangle} = require(`./shapes.js`);

// test for Cirlce

describe(`ShapeColor`, () => {
    it(`should contain a color, text, and text color property`, () =>{
    const shape = new Circle(`yellow`, `hell`, `black`)
    expect (shape.color).toBe(`yellow`)
    })
})
describe(`ShapeText`, () => {
    it(`should contain a color, text, and text color property`, () =>{
    const shape = new Circle(`yellow`, `hell`, `black`)
    expect (shape.text).toBe(`hell`)
    })
})

// test for Square

describe(`ShapeColor`, () => {
    it(`should contain a color, text, and text color property`, () =>{
    const shape = new Square (`blue`, `hell`, `black`)
    expect (shape.color).toBe(`blue`)
    })
})
describe(`ShapeText`, () => {
    it(`should contain a color, text, and text color property`, () =>{
    const shape = new Square (`yellow`, `heaven`, `black`)
    expect (shape.text).toBe(`heaven`)
    })
})

// test for Triangle

describe(`ShapeColor`, () => {
    it(`should contain a color, text, and text color property`, () =>{
    const shape = new Triangle(`green`, `purgotory?`, `black`)
    expect (shape.color).toBe(`green`)
    })
})
describe(`ShapeText`, () => {
    it(`should contain a color, text, and text color property`, () =>{
    const shape = new Circle(`green`, `purgotory?`, `black`)
    expect (shape.text).toBe(`purgotory?`)
    })
})