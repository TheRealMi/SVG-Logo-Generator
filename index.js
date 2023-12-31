/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
*/
const Circle = require("./lib/Circle") //reference children since parent lives within them
const Square = require("./lib/Square")
const Triangle = require("./lib/Triangle")
const inquirer = require("inquirer")
const fs = require("fs")

inquirer
//Questions
    .prompt([
        {
            type: "input",
            message: "Enter up to three characters for your SVG text:",
            name: "text",
            validate: function (text) {
                if (text.length < 4) {
                    return true;
                } else {
                    console.log("     Please enter 3 characters or less.")
                    text = "";
                    return false;
                }
            }
        }, {
            type: "list",
            message: "Choose a text color",
            name: "textColor",
            choices: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
        }, {
            type: "list",
            message: "Choose a shape",
            name: "shape",
            choices: ["Circle", "Triangle", "Square"]
        }, {
            type: "list",
            message: "Choose a shape color",
            name: "shapeColor",
            choices: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
        }
    ])
    .then(response => {
        if (response.shape === "Circle") {
            //Create new circle object using Circle constructor
            const circle = new Circle();
            //Set circle properties
            circle.setTextColor(response.textColor);
            circle.setText(response.text);
            circle.setShapeColor(response.shapeColor);
            //create "logo.svg" file in "examples" folder using circle's render function
            fs.writeFile("./examples/logo.svg", circle.render(), (err) => { 
                console.log("Generated logo.svg") })
        } else if (response.shape === "Triangle") {
            //Create new triangle object using Triangle constructor
            const triangle = new Triangle();
            //Set triangle properties
            triangle.setTextColor(response.textColor);
            triangle.setText(response.text);
            triangle.setShapeColor(response.shapeColor);
            //create "logo.svg" file in "examples" folder using triangle's render function
            fs.writeFile("./examples/logo.svg", triangle.render(), (err) => { 
                console.log("Generated logo.svg") })
        } else if (response.shape === "Square") {
            //Create new square object using Square constructor
            const square = new Square();
            //Set square properties
            square.setTextColor(response.textColor);
            square.setText(response.text);
            square.setShapeColor(response.shapeColor);
            //create "logo.svg" file in "examples" folder using square's render function
            fs.writeFile("./examples/logo.svg", square.render(), (err) => { 
                console.log("Generated logo.svg");
            })
        }
    })