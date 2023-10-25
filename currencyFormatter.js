function pureToCommaSeparated(stringValue) {
    const size = stringValue.length;
    stringValue = stringValue.substring(0,size-2)+","+stringValue.substring(size-2, size)
    return stringValue
}

function globalArrayPusherWithDot() {
    globalResultArray.push(globalFirstArray.pop())
    globalResultArray.push(globalFirstArray.pop())
    globalResultArray.push(globalFirstArray.pop())
    globalResultArray.push('.')
}

function globalArrayPusherWithoutDot() {
    let poppedElement = globalFirstArray.pop()

    if (!poppedElement){
        return
    }

    globalResultArray.push(poppedElement);
}

function wholeNumberPartToPointSeparated(stringValue) {

}

function revertMyString(myString) {
    myString = myString.split("").reverse().join("")
    return myString
}

// inicio aqui
// inicio aqui
// inicio aqui

const originalValue = "9294756305726"

let valueWithComma = pureToCommaSeparated(originalValue)
let splitByCommaArray = valueWithComma.split(",")

const wholeNumberPart = splitByCommaArray[0]
const decimalPart = splitByCommaArray[1]

let globalFirstArray = wholeNumberPart.split("")
let globalResultArray = [];

let resultString = ""



console.log(valueWithComma);
console.log("resto por 3: ",7%3);
console.log("inteiro por 3: ", Number.parseInt(7/3));
console.log('reverted string: ', revertMyString(originalValue));

while (globalFirstArray.length > 3) {
    globalArrayPusherWithDot()
} 

while (globalFirstArray.length <= 3) {
    globalArrayPusherWithoutDot()
    if (globalFirstArray.length==0){
        break
    }
}


resultString = globalResultArray.reverse().join("")
resultString = resultString + "," + decimalPart

console.log("resultado: ", resultString);


