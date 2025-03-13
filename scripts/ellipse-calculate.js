function ellipseCalculateArea(){
    const axis = getInputValueById('ellipse-axis')
    console.log('ellipse axis', axis)
    const base = getInputValueById('ellipse-base')
    console.log('ellipse base', base)

    const area = 3.141 * axis * base;
    setInnerTextById('ellipse-area', area)

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText)
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}