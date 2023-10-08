import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import {calculateIMC, notANumber} from './ultils.js'
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

/* const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close') */

/* const Modal = {
wrapper: document.querySelector('.modal-wrapper'),
message: document.querySelector('.modal .title span'),
buttonClose: document.querySelector('.modal button.close'),


open() {Modal.wrapper.classList.add('open')},
close() {Modal.wrapper.classList.remove('open')}
} */

form.onsubmit = function(event) {
event.preventDefault()


const weight = inputWeight.value
const height = inputHeight.value

const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
}

AlertError.close()

const result = calculateIMC(weight, height)
displayResultMessage(result)

}

function displayResultMessage(result){
const Message = `Seu IMC é de ${result}`

Modal.message.innerText = Message
Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
/* Modal.buttonClose.onclick = () => {
    modalWrapper.classList.remove('open')
Modal.close()
} */

/* function IMC(weight, height){
    return (weight / ((height / 100) ** 2)).toFixed(2)
}


function notANumber(value) {
    return isNaN(value) || value == ""
} */