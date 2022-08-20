// click button and catch the pin

function getPin(){
    const pin = generatePin()
    const pinNumber = pin+''
    if(pinNumber.length === 4 ){
        return pin
    }
    else{
        console.log('pin not 4 digit found', pin)
        return getPin()
    }
}
// generate pin. Using this function to get number
function generatePin(){
    const generatePin = Math.round(Math.random()*10000)
    return generatePin
}

document.getElementById('pin-generator').addEventListener('click',function(){

    const pin = getPin() 
    const displayField = document.getElementById('display-pin')
    displayField.value = pin

})

// get user input 

document.getElementById('type-btn').addEventListener('click',function(event){

    const number = event.target.innerText
    const displayNumberField = document.getElementById('display-number')
    const previousNumber = displayNumberField.value
    if(isNaN(number)){
        if(number === 'C'){
            displayNumberField.value = ''
        }
        else if(number === '<'){
            displayNumberField.value = previousNumber.slice(0,-1)  
          }

    }else{
        const currentNumber = previousNumber +number
        displayNumberField.value = currentNumber
    }
    

})

// matched code

function getValue(id){
    const inputField = document.getElementById(id)
    return inputField.value
}
function getText(id){
    const textElement = document.getElementById(id)
    return textElement
}

document.getElementById('btn-submit').addEventListener('click',function(){

    const pinNumber = getValue('display-pin')
    const typeNumber = getValue('display-number')
    const positiveMsg = getText('yes') 
    const negativeMsg = getText('no') 

    if(pinNumber === typeNumber){
        positiveMsg.style.display = 'block'  
        negativeMsg.style.display = 'none'  
        
    }else{
        negativeMsg.style.display = 'block'  
        positiveMsg.style.display = 'none'  
    }

})