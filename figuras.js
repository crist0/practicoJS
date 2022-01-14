//Code of Calculate the Square
console.group("Square");
function squarePerimeter(side){
    return side*4;
}
function squareArea(side){
    return side*side;
}
console.groupEnd();

//Code of Calculate the triangle
console.group("Triangle");
function trianglePerimeter(side1, side2, base){
    return side1+side2+base;
}
function triangleArea(base, height){
    return (base*height)/2;
}
console.groupEnd();

//Code of Calculate the Circle
console.group("Circle");
function circleDiameter(radius){
    return radius*2;
}
const PI = Math.PI;
console.log("PI are: "+PI);
function circlePerimeter(radius){
    const diameter = circleDiameter(radius);
    return diameter * PI;
}
function circleArea(radius){
    return (radius*radius)*PI;
}
console.groupEnd();

//Interact with HTML
//Square
function calculateSquarePerimeter(){
    const inputSide = document.getElementById("squareSideInput");
    const valueSide = inputSide.value;
    const perimeter = squarePerimeter(valueSide);
    alert(perimeter);
}
function calculateSquareArea(){
    const inputSide = document.getElementById("squareSideInput");
    const valueSide = inputSide.value;
    const area = squareArea(valueSide);
    alert(area);
}
//Triangle
function calculateTrianglePerimeter(){
    const inputSide1 = document.getElementById("triangleSide1Input");
    const valueSide1 = inputSide1.value;
    const inputSide2 = document.getElementById("triangleSide2Input");
    const valueSide2 = inputSide2.value;
    const inputSide3 = document.getElementById("triangleSide3Input");
    const valueSide3 = inputSide3.value;
    const perimeter = trianglePerimeter(Number(valueSide1),Number(valueSide2),Number(valueSide3));
    alert(perimeter);
}
function calculateTriangleArea(){
    const inputSide1 = document.getElementById("triangleSide1Input");
    const valueSide1 = inputSide1.value;
    const inputSide2 = document.getElementById("triangleSide2Input");
    const valueSide2 = inputSide2.value;
    const inputSide3 = document.getElementById("triangleSide3Input");
    const valueSide3 = inputSide3.value;
    const inputHeight = document.getElementById("triangleHeightInput");
    const valueHeight = inputHeight.value;
    const area = triangleArea(valueSide3,valueHeight);
    alert(area);
}
//Circle
function calculateCirclePerimeter(){
    const inputRadius = document.getElementById("circleRadiusInput");
    const valueRadius = inputRadius.value;
    const perimeter = circlePerimeter(valueRadius);
    alert(perimeter);
}
function calculateCircleArea(){
    const inputRadius = document.getElementById("circleRadiusInput");
    const valueRadius = inputRadius.value;
    const area = circleArea(valueRadius);
    alert(area);
}