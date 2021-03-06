const main = document.createElement('div')
main.classList.add('main')

const mainPanel = document.createElement('div')
mainPanel.classList.add('main_panel')

const mainLabel = document.createElement('h1')
mainLabel.classList.add('main_label')
mainLabel.textContent = 'Выберите сложность'

const ChooseLevel = document.createElement('div')
ChooseLevel.classList.add('main_choose_dif')

const levelOne = document.createElement('button')
levelOne.classList.add('level', 'level_one')
levelOne.textContent = '1'

const levelTwo = document.createElement('button')
levelTwo.classList.add('level', 'level_two')
levelTwo.textContent = '2'

const levelThree = document.createElement('button')
levelThree.classList.add('level', 'level_three')
levelThree.textContent = '3'

const startButton = document.createElement('button')
startButton.classList.add('button')
startButton.textContent = 'Старт'

const body = document.querySelector('body')

body.appendChild(main)
main.appendChild(mainPanel)
mainPanel.appendChild(mainLabel)
mainPanel.appendChild(ChooseLevel)
ChooseLevel.appendChild(levelOne)
ChooseLevel.appendChild(levelTwo)
ChooseLevel.appendChild(levelThree)
mainPanel.appendChild(startButton)

// const levelOne = document.querySelector('.level_one')
// const levelTwo = document.querySelector('.level_two')
// const levelThree = document.querySelector('.level_three')
// const levelbutton = document.querySelectorAll('.level')
// const button = document.querySelector('.button')
// const form = document.querySelector('.main_choose_dif')
let levelValue = ''

levelOne.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('hello')
    levelValue = 1
    levelOne.classList.add('level_pressed')
    levelTwo.classList.remove('level_pressed')
    levelThree.classList.remove('level_pressed')
})
levelTwo.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('hellox2')
    levelValue = 2
    levelTwo.classList.add('level_pressed')
    levelThree.classList.remove('level_pressed')
    levelOne.classList.remove('level_pressed')
})
levelThree.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('hellox3')
    levelValue = 3
    levelThree.classList.add('level_pressed')
    levelTwo.classList.remove('level_pressed')
    levelOne.classList.remove('level_pressed')
})

function renderEasyLevel() {
    body.textContent = ''

    const mainGame = document.createElement('div')
    mainGame.classList.add('main_game')

    const headerPart = document.createElement('div')
    headerPart.classList.add('header_part')

    const timer = document.createElement('div')
    timer.classList.add('timer')

    const timerMinute = document.createElement('p')
    timerMinute.classList.add('timer_minute')
    timerMinute.textContent = 'min'

    const timerSeconds = document.createElement('span')
    timerSeconds.classList.add('timer_seconds')
    timerSeconds.textContent = 'sec'

    const timerInfo = document.createElement('h1')
    timerInfo.classList.add('timer_info')
    timerInfo.textContent = '00,00'

    const button = document.createElement('button')
    button.classList.add('button')
    button.textContent = 'Играть еще раз'

    const section = document.createElement('section')
    section.classList.add('game_panel', 'easy')

    // const card = document.createElement('div')
    // card.classList.add('card')

    // const frontFace = document.createElement('img')
    // frontFace.classList.add('front_face')
    // frontFace.src = '/cards/туз черви.png'

    // const back = document.createElement('img')
    // back.classList.add('back_face')
    // back.src = '/cards/рубашка.png'

    const allCards = {
        1: '<div class="card" data-framework="A-heart"><img class="front_face" src="/cards/туз черви.png"><img class="back_face" src="/cards/рубашка.png">',
        2: '<div class="card" data-framework="A-heart"><img class="front_face" src="/cards/туз черви.png"><img class="back_face" src="/cards/рубашка.png">',
        3: '<div class="card" data-framework="K-heart"><img class="front_face" src="/cards/король черви.png"><img class="back_face" src="/cards/рубашка.png">',
        4: '<div class="card" data-framework="K-heart"><img class="front_face" src="/cards/король черви.png"><img class="back_face" src="/cards/рубашка.png">',
        5: '<div class="card" data-framework="Q-heart"><img class="front_face" src="/cards/дама черви.png"><img class="back_face" src="/cards/рубашка.png">',
        6: '<div class="card" data-framework="Q-heart"><img class="front_face" src="/cards/дама черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 7: '<div class="card" data-framework="J-heart"><img class="front_face" src="/cards/валет черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 8: '<div class="card" data-framework="J-heart"><img class="front_face" src="/cards/валет черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 9: '<div class="card" data-framework="10-heart"><img class="front_face" src="/cards/10 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 10: '<div class="card" data-framework="10-heart"><img class="front_face" src="/cards/10 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 11: '<div class="card" data-framework="9-heart"><img class="front_face" src="/cards/9 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 12: '<div class="card" data-framework="9-heart"><img class="front_face" src="/cards/9 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 13: '<div class="card" data-framework="8-heart"><img class="front_face" src="/cards/8 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 14: '<div class="card" data-framework="8-heart"><img class="front_face" src="/cards/8 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 15: '<div class="card" data-framework="7-heart"><img class="front_face" src="/cards/7 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 16: '<div class="card" data-framework="7-heart"><img class="front_face" src="/cards/7 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 17: '<div class="card" data-framework="6-heart"><img class="front_face" src="/cards/6 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 18: '<div class="card" data-framework="6-heart"><img class="front_face" src="/cards/6 черви.png"><img class="back_face" src="/cards/рубашка.png">',
    }

    document.body.appendChild(mainGame)
    mainGame.appendChild(headerPart)
    headerPart.appendChild(timer)
    timer.appendChild(timerMinute)
    timerMinute.appendChild(timerSeconds)
    timer.appendChild(timerInfo)
    headerPart.appendChild(button)
    mainGame.appendChild(section)
    // section.appendChild(card)
    // card.appendChild(frontFace)
    // card.appendChild(back)
    console.log(allCards)

    for (let i in allCards) {
        const card = document.createElement('div')
        card.innerHTML = allCards[i]
        section.appendChild(card)
    }

    // section.innerHTML = allCards[i]

    const cards = document.querySelectorAll('.card')

    let hasFlippedCard = false
    let lockBoard = false
    let firstCard, secondCard

    function flipCard() {
        if (lockBoard) return
        if (this === firstCard) return

        this.classList.add('flip')

        if (!hasFlippedCard) {
            hasFlippedCard = true
            firstCard = this
            return
        }

        secondCard = this
        lockBoard = true

        checkForMatch()
    }

    function checkForMatch() {
        let isMatch =
            firstCard.dataset.framework === secondCard.dataset.framework
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            console.log('match')
        }
        isMatch ? disableCards() : unflipCards()
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)

        resetBoard()
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')

            resetBoard()
        }, 1500)
    }

    function resetBoard() {
        ;[hasFlippedCard, lockBoard] = [false, false]
        ;[firstCard, secondCard] = [null, null]
    }
    ;(function shuffle() {
        cards.forEach((card) => {
            let ramdomPos = Math.floor(Math.random() * 12)
            card.style.order = ramdomPos
        })
    })()

    cards.forEach((card) => card.addEventListener('click', flipCard))
}

function renderMediumLevel() {
    body.textContent = ''

    const mainGame = document.createElement('div')
    mainGame.classList.add('main_game')

    const headerPart = document.createElement('div')
    headerPart.classList.add('header_part')

    const timer = document.createElement('div')
    timer.classList.add('timer')

    const timerMinute = document.createElement('p')
    timerMinute.classList.add('timer_minute')
    timerMinute.textContent = 'min'

    const timerSeconds = document.createElement('span')
    timerSeconds.classList.add('timer_seconds')
    timerSeconds.textContent = 'sec'

    const timerInfo = document.createElement('h1')
    timerInfo.classList.add('timer_info')
    timerInfo.textContent = '00,00'

    const button = document.createElement('button')
    button.classList.add('button')
    button.textContent = 'Играть еще раз'

    const section = document.createElement('section')
    section.classList.add('game_panel', 'medium')

    // const card = document.createElement('div')
    // card.classList.add('card')

    // const frontFace = document.createElement('img')
    // frontFace.classList.add('front_face')
    // frontFace.src = '/cards/туз черви.png'

    // const back = document.createElement('img')
    // back.classList.add('back_face')
    // back.src = '/cards/рубашка.png'

    const allCards = {
        1: '<div class="card" data-framework="A-heart"><img class="front_face" src="/cards/туз черви.png"><img class="back_face" src="/cards/рубашка.png">',
        2: '<div class="card" data-framework="A-heart"><img class="front_face" src="/cards/туз черви.png"><img class="back_face" src="/cards/рубашка.png">',
        3: '<div class="card" data-framework="K-heart"><img class="front_face" src="/cards/король черви.png"><img class="back_face" src="/cards/рубашка.png">',
        4: '<div class="card" data-framework="K-heart"><img class="front_face" src="/cards/король черви.png"><img class="back_face" src="/cards/рубашка.png">',
        5: '<div class="card" data-framework="Q-heart"><img class="front_face" src="/cards/дама черви.png"><img class="back_face" src="/cards/рубашка.png">',
        6: '<div class="card" data-framework="Q-heart"><img class="front_face" src="/cards/дама черви.png"><img class="back_face" src="/cards/рубашка.png">',
        7: '<div class="card" data-framework="J-heart"><img class="front_face" src="/cards/валет черви.png"><img class="back_face" src="/cards/рубашка.png">',
        8: '<div class="card" data-framework="J-heart"><img class="front_face" src="/cards/валет черви.png"><img class="back_face" src="/cards/рубашка.png">',
        9: '<div class="card" data-framework="10-heart"><img class="front_face" src="/cards/10 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        10: '<div class="card" data-framework="10-heart"><img class="front_face" src="/cards/10 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        11: '<div class="card" data-framework="9-heart"><img class="front_face" src="/cards/9 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        12: '<div class="card" data-framework="9-heart"><img class="front_face" src="/cards/9 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 13: '<div class="card" data-framework="8-heart"><img class="front_face" src="/cards/8 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 14: '<div class="card" data-framework="8-heart"><img class="front_face" src="/cards/8 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 15: '<div class="card" data-framework="7-heart"><img class="front_face" src="/cards/7 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 16: '<div class="card" data-framework="7-heart"><img class="front_face" src="/cards/7 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 17: '<div class="card" data-framework="6-heart"><img class="front_face" src="/cards/6 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        // 18: '<div class="card" data-framework="6-heart"><img class="front_face" src="/cards/6 черви.png"><img class="back_face" src="/cards/рубашка.png">',
    }

    document.body.appendChild(mainGame)
    mainGame.appendChild(headerPart)
    headerPart.appendChild(timer)
    timer.appendChild(timerMinute)
    timerMinute.appendChild(timerSeconds)
    timer.appendChild(timerInfo)
    headerPart.appendChild(button)
    mainGame.appendChild(section)
    // section.appendChild(card)
    // card.appendChild(frontFace)
    // card.appendChild(back)
    console.log(allCards)

    for (let i in allCards) {
        const card = document.createElement('div')
        card.innerHTML = allCards[i]
        section.appendChild(card)
    }

    // section.innerHTML = allCards[i]

    const cards = document.querySelectorAll('.card')

    let hasFlippedCard = false
    let lockBoard = false
    let firstCard, secondCard

    function flipCard() {
        if (lockBoard) return
        if (this === firstCard) return

        this.classList.add('flip')

        if (!hasFlippedCard) {
            hasFlippedCard = true
            firstCard = this
            return
        }

        secondCard = this
        lockBoard = true

        checkForMatch()
    }

    function checkForMatch() {
        let isMatch =
            firstCard.dataset.framework === secondCard.dataset.framework
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            console.log('match')
        }
        isMatch ? disableCards() : unflipCards()
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)

        resetBoard()
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')

            resetBoard()
        }, 1500)
    }

    function resetBoard() {
        ;[hasFlippedCard, lockBoard] = [false, false]
        ;[firstCard, secondCard] = [null, null]
    }
    ;(function shuffle() {
        cards.forEach((card) => {
            let ramdomPos = Math.floor(Math.random() * 12)
            card.style.order = ramdomPos
        })
    })()

    cards.forEach((card) => card.addEventListener('click', flipCard))
}

function renderHardlevel() {
    body.textContent = ''

    const mainGame = document.createElement('div')
    mainGame.classList.add('main_game')

    const headerPart = document.createElement('div')
    headerPart.classList.add('header_part')

    const timer = document.createElement('div')
    timer.classList.add('timer')

    const timerMinute = document.createElement('p')
    timerMinute.classList.add('timer_minute')
    timerMinute.textContent = 'min'

    const timerSeconds = document.createElement('span')
    timerSeconds.classList.add('timer_seconds')
    timerSeconds.textContent = 'sec'

    const timerInfo = document.createElement('h1')
    timerInfo.classList.add('timer_info')
    timerInfo.textContent = '00,00'

    const button = document.createElement('button')
    button.classList.add('button')
    button.textContent = 'Играть еще раз'

    const section = document.createElement('section')
    section.classList.add('game_panel', 'hard')

    // const card = document.createElement('div')
    // card.classList.add('card')

    // const frontFace = document.createElement('img')
    // frontFace.classList.add('front_face')
    // frontFace.src = '/cards/туз черви.png'

    // const back = document.createElement('img')
    // back.classList.add('back_face')
    // back.src = '/cards/рубашка.png'

    const allCards = {
        1: '<div class="card" data-framework="A-heart"><img class="front_face" src="/cards/туз черви.png"><img class="back_face" src="/cards/рубашка.png">',
        2: '<div class="card" data-framework="A-heart"><img class="front_face" src="/cards/туз черви.png"><img class="back_face" src="/cards/рубашка.png">',
        3: '<div class="card" data-framework="K-heart"><img class="front_face" src="/cards/король черви.png"><img class="back_face" src="/cards/рубашка.png">',
        4: '<div class="card" data-framework="K-heart"><img class="front_face" src="/cards/король черви.png"><img class="back_face" src="/cards/рубашка.png">',
        5: '<div class="card" data-framework="Q-heart"><img class="front_face" src="/cards/дама черви.png"><img class="back_face" src="/cards/рубашка.png">',
        6: '<div class="card" data-framework="Q-heart"><img class="front_face" src="/cards/дама черви.png"><img class="back_face" src="/cards/рубашка.png">',
        7: '<div class="card" data-framework="J-heart"><img class="front_face" src="/cards/валет черви.png"><img class="back_face" src="/cards/рубашка.png">',
        8: '<div class="card" data-framework="J-heart"><img class="front_face" src="/cards/валет черви.png"><img class="back_face" src="/cards/рубашка.png">',
        9: '<div class="card" data-framework="10-heart"><img class="front_face" src="/cards/10 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        10: '<div class="card" data-framework="10-heart"><img class="front_face" src="/cards/10 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        11: '<div class="card" data-framework="9-heart"><img class="front_face" src="/cards/9 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        12: '<div class="card" data-framework="9-heart"><img class="front_face" src="/cards/9 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        13: '<div class="card" data-framework="8-heart"><img class="front_face" src="/cards/8 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        14: '<div class="card" data-framework="8-heart"><img class="front_face" src="/cards/8 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        15: '<div class="card" data-framework="7-heart"><img class="front_face" src="/cards/7 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        16: '<div class="card" data-framework="7-heart"><img class="front_face" src="/cards/7 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        17: '<div class="card" data-framework="6-heart"><img class="front_face" src="/cards/6 черви.png"><img class="back_face" src="/cards/рубашка.png">',
        18: '<div class="card" data-framework="6-heart"><img class="front_face" src="/cards/6 черви.png"><img class="back_face" src="/cards/рубашка.png">',
    }

    document.body.appendChild(mainGame)
    mainGame.appendChild(headerPart)
    headerPart.appendChild(timer)
    timer.appendChild(timerMinute)
    timerMinute.appendChild(timerSeconds)
    timer.appendChild(timerInfo)
    headerPart.appendChild(button)
    mainGame.appendChild(section)
    // section.appendChild(card)
    // card.appendChild(frontFace)
    // card.appendChild(back)
    console.log(allCards)

    for (let i in allCards) {
        const card = document.createElement('div')
        card.innerHTML = allCards[i]
        section.appendChild(card)
    }

    // section.innerHTML = allCards[i]

    const cards = document.querySelectorAll('.card')

    let hasFlippedCard = false
    let lockBoard = false
    let firstCard, secondCard

    function flipCard() {
        if (lockBoard) return
        if (this === firstCard) return

        this.classList.add('flip')

        if (!hasFlippedCard) {
            hasFlippedCard = true
            firstCard = this
            return
        }

        secondCard = this
        lockBoard = true

        checkForMatch()
    }

    function checkForMatch() {
        let isMatch =
            firstCard.dataset.framework === secondCard.dataset.framework
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            console.log('match')
        }
        isMatch ? disableCards() : unflipCards()
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard)
        secondCard.removeEventListener('click', flipCard)

        resetBoard()
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')

            resetBoard()
        }, 1500)
    }

    function resetBoard() {
        ;[hasFlippedCard, lockBoard] = [false, false]
        ;[firstCard, secondCard] = [null, null]
    }
    ;(function shuffle() {
        cards.forEach((card) => {
            let ramdomPos = Math.floor(Math.random() * 12)
            card.style.order = ramdomPos
        })
    })()

    cards.forEach((card) => card.addEventListener('click', flipCard))
}

// const cards = document.querySelectorAll('.card')

startButton.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event)
    console.log(startButton.value)
    console.log(levelValue)
    if (levelValue === 1) {
        console.log('Easy level starts...')
        renderEasyLevel()
    } else if (levelValue === 2) {
        console.log('Medium level starts...')
        renderMediumLevel()
    } else {
        console.log('Hard level starts...')
        renderHardlevel()
    }
})
