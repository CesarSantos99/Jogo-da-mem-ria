const input = document.querySelector('.login-input')
const button = document.querySelector('.button-login')
const form = document.querySelector('.login')


function validateInput({target}) {
    if(target.value.length > 2) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}


input.addEventListener('input', validateInput)



