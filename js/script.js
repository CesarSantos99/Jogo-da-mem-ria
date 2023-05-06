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

function handleSubmit(event) {
    event.preventDefault() //bloquei o evento padrão
    localStorage.setItem('Jogador', input.value) //salva no local storage 
    window.location = 'game.html' // manda pra outra pagina

}



input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)



