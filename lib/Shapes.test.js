const Triangle = require("./Triangle");
const Circle = require("./Circle");
const Square = require("./Square");

describe('Triangle', () => {
    describe('setText', () => {
        it('Should set text to ABC', () => {
            const shape = new Triangle();
            const text = 'ABC';
            shape.setText('ABC');
            expect(shape.text).toEqual(text);
        });
    })

    describe('setTextColor', () => {
        it('Should set text color to red', () => {
            const shape = new Triangle();
            const color = 'red';
            shape.setTextColor('red');
            expect(shape.textColor).toEqual(color);
        });
    })

    describe('setShapeColor', () => {
        it('Should set shape color to orange', () => {
            const shape = new Triangle();
            const shapeColor = 'orange';
            shape.setShapeColor('orange');
            expect(shape.shapeColor).toEqual(shapeColor);
        });
    })

    describe('render', () => {
        it('Should render a triangle', () => {
            const shape = new Triangle();
            shape.setText('ABC');
            shape.setTextColor('red');
            shape.setShapeColor('orange');

            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="orange"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>`);
        });
    });
}); 

describe('Circle', () => {
    describe('setText', () => {
        it('Should set text to ABC', () => {
            const shape = new Circle();
            const text = 'ABC';
            shape.setText('ABC');
            expect(shape.text).toEqual(text);
        });
    });
    describe('setTextColor', () => {
        it('Should set text color to red', () => {
            const shape = new Circle();
            const color = 'red';
            shape.setTextColor('red');
            expect(shape.textColor).toEqual(color);
        });
    });
    describe('setShapeColor', () => {
        it('Should set shape color to orange', () => {
            const shape = new Circle();
            const shapeColor = 'orange';
            shape.setShapeColor('orange');
            expect(shape.shapeColor).toEqual(shapeColor);
        });
    });
    describe('render', () => {
        it('Should render a circle', () => {
            const shape = new Circle();
            shape.setText('ABC');
            shape.setTextColor('red');
            shape.setShapeColor('orange');

            expect(shape.render()).toEqual( `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="orange"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>`);
        });
    });
});

describe('Square', () => {
    describe('setText', () => {
        it('Should set text to ABC', () => {
            const shape = new Square();
            const text = 'ABC';
            shape.setText('ABC');
            expect(shape.text).toEqual(text);
        });
    });
    describe('setTextColor', () => {
        it('Should set text color to red', () => {
            const shape = new Square(); 
            const color = "red";
            shape.setTextColor('red');
            expect(shape.textColor).toEqual(color);
        });
    });
    describe('setShapeColor', () => {
        it('Should set shape color to orange', () => {
            const shape = new Square();
            const shapeColor = "orange";
            shape.setShapeColor('orange');
            expect(shape.shapeColor).toEqual(shapeColor);
        });
    });
    describe('render', () => {
        it('Should render a square', () => {
            const shape = new Square();
            shape.setText('ABC');
            shape.setTextColor('red');
            shape.setShapeColor('orange');

            expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200" fill="orange" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>`);
        });
    });
});