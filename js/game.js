const grid = document.querySelector('.grid')

const caracters = [
    'gaara',
    'itati',
    'jiraya',
    'kakahi',
    'naruto',
    'pain',
    'sakura',
    'sasuke',
    'shikamaru',
]


const createCard = () => {
    const card = document.createElement('div')
    const front = document.createElement('div')
    const back = document.createElement('div')

    card.className = 'card'
    front.className = 'face front'
    back.className = 'face back'

    card.appendChild(front) // fala que o card tem como filho o front
    card.appendChild(back) // fala que o card tem como filho o back

    grid.appendChild(card)
}

createCard()


const loadGame = () => {
    caracters.forEach((card) => {
        console.log(card);
    })
}

loadGame()















