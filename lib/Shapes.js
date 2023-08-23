//Parent constructor
class Shape{
    constructor(){
        this.text = "";
        this.textColor = "";
        this.shapeColor = "";
    }
    setText(text){
        this.text = text;
    }
    setTextColor(){
        this.textColor = this.textColor;
    }
    setColor(shapeColor){
        this.shapeColor = shapeColor;
    }
    render(){
        return Error("Child must create its own render function");
    }
}
module.exports = Shape;