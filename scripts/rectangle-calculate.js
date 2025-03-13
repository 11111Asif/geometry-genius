function rectangleCalculateArea(){
    const rectangleWidthInput = document.getElementById('triangle-width')
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText)
    console.log(width)

    const rectangleLengthInput = document.getElementById('triangle-length')
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText)
    console.log(length)

    const area = width * length;
    console.log('area of the rectangle is:', area)

    const rectangleSpan = document.getElementById('rectangle-area')
    rectangleSpan.innerText = area;
}