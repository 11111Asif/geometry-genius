function rhombusCalculateArea(){
    const d1 = getInputValueById('rhombus-d1')
    const d2 = getInputValueById('rhombus-d2')
    const area = 0.5 * d1 * d2;
    setInnerTextById('rhombus-area', area)
}