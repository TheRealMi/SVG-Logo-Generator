//Parent constructor
class Logo{
    constructor(){
        this.text = "";
        this.textColor = "";
        this.shapeColor = "";
    }
    setText(text){
        this.text=text;
    }
    setTextColor(textColor){
        this.textColor=textColor;
    }
    setShapeColor(shapeColor){
        this.shapeColor=shapeColor;
    }
    render(){
        return Error("Child must create its own render function")
    }
}
module.exports = Logo