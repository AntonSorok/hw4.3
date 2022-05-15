const body = document.querySelector('body')

function startscreen() {
    const start = document.querySelector('body')
    start.textContent = ''

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

    startButton.addEventListener('click', (event) => {
        if (levelValue === 1) {
            console.log('Easy level starts...')
            renderEasyLevel()
        } else if (levelValue === 2) {
            console.log('Medium level starts...')
            renderMediumLevel()
        } else {
            console.log('Hard level starts...')
            renderHardLevel()
        }
    })
}
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

    const timerInfo = document.createElement('div')
    timerInfo.classList.add('timer_space')
    const appendMin = document.createElement('h1')
    const appendSec = document.createElement('h1')
    appendMin.classList.add('timer_info')
    appendMin.textContent = '00' + ':'
    appendSec.classList.add('timer_info')
    appendSec.textContent = '00'

    const button = document.createElement('button')
    button.classList.add('button')
    button.textContent = 'Играть еще раз'

    const section = document.createElement('section')
    section.classList.add('game_panel', 'easy')

    const allCards = {
        1: '<div class="card" data-framework="A-heart"><img class="front_face" src="/cards/туз черви.png"><img class="back_face" src="/cards/рубашка.png">',
        2: '<div class="card" data-framework="A-heart"><img class="front_face" src="/cards/туз черви.png"><img class="back_face" src="/cards/рубашка.png">',
        3: '<div class="card" data-framework="K-heart"><img class="front_face" src="/cards/король черви.png"><img class="back_face" src="/cards/рубашка.png">',
        4: '<div class="card" data-framework="K-heart"><img class="front_face" src="/cards/король черви.png"><img class="back_face" src="/cards/рубашка.png">',
        5: '<div class="card" data-framework="Q-heart"><img class="front_face" src="/cards/дама черви.png"><img class="back_face" src="/cards/рубашка.png">',
        6: '<div class="card" data-framework="Q-heart"><img class="front_face" src="/cards/дама черви.png"><img class="back_face" src="/cards/рубашка.png">',
    }

    document.body.appendChild(mainGame)
    mainGame.appendChild(headerPart)
    headerPart.appendChild(timer)
    timer.appendChild(timerMinute)
    timerMinute.appendChild(timerSeconds)
    timer.appendChild(timerInfo)
    timerInfo.appendChild(appendMin)
    timerInfo.appendChild(appendSec)
    headerPart.appendChild(button)
    mainGame.appendChild(section)

    button.addEventListener('click', (e) => {
        renderEasyLevel()
    })

    for (let i in allCards) {
        const card = document.createElement('div')
        card.innerHTML = allCards[i]
        section.appendChild(card)
    }

    function shuffle(o) {
        for (
            let j, x, i = o.length;
            i;
            j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
        );
        return o
    }
    shuffle(allCards)

    let counter = 00
    let tens = 00
    let seconds = 00
    let min = 00
    let interval
    let resultArray = []

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

        clearInterval(interval)
        interval = setInterval(starttimer, 10)
    }

    function checkForMatch() {
        let isMatch =
            firstCard.dataset.framework === secondCard.dataset.framework
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            console.log('match')
            check('correct')
            counter++
            win()
            resultArray = []
        } else {
            check('card')
            resultArray = []
        }
        let result = secondCard.dataset.framework
        resultArray.push(result)

        isMatch ? disableCards() : unflipCards()
    }

    let check = function (className) {
        let x = document.getElementsByClassName('flip')

        setTimeout(function () {
            for (let i = x.length - 1; i >= 0; i--) {
                x[i].className = className
            }
        }, 500)
        console.log(resultArray)
    }

    let win = function () {
        if (counter === 3) {
            clearInterval(interval)
            mainGame.classList.add('main_win')

            const resultScreen = document.createElement('div')
            resultScreen.classList.add('result_screen')

            const blockResultInfo = document.createElement('div')
            blockResultInfo.classList.add('block_result_info')

            const wowPic = document.createElement('img')
            wowPic.classList.add('wow_picture')

            const result = document.createElement('h1')
            result.classList.add('result')
            result.textContent = 'Вы победили!'

            const resultTimerInfo = document.createElement('p')
            resultTimerInfo.classList.add('result_timer_info')
            resultTimerInfo.textContent = 'Затраченное время'

            const resultTimer = document.createElement('h1')
            resultTimer.classList.add('result_timer')
            if (min < 9 && seconds < 9) {
                resultTimer.textContent = `0${min}:0${seconds}`
            }
            if (min < 9 && seconds > 9) {
                resultTimer.textContent = `0${min}:${seconds}`
            }

            const restartButton = document.createElement('button')
            restartButton.classList.add('button')
            restartButton.textContent = 'Играть снова'

            const body = document.querySelector('body')

            body.appendChild(resultScreen)
            resultScreen.appendChild(blockResultInfo)
            blockResultInfo.appendChild(wowPic)
            blockResultInfo.appendChild(result)
            blockResultInfo.appendChild(resultTimerInfo)
            blockResultInfo.appendChild(resultTimer)
            blockResultInfo.appendChild(restartButton)

            restartButton.addEventListener('click', (event) => {
                startscreen()
            })
        }
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
        ;[hasFlippedCard, lockBoard] = [false, false][(firstCard, secondCard)] =
            [null, null]
    }

    cards.forEach((card) => card.addEventListener('click', flipCard))

    function starttimer() {
        tens++
        if (tens > 99) {
            seconds++
            appendSec.innerHTML = '0' + seconds
            tens = 0
        }
        if (seconds > 9) {
            appendSec.innerHTML = seconds
        }
        if (seconds > 59) {
            min++
            appendMin.innerHTML = '0' + min + ':'
            seconds = 00
            appendSec.innerHTML = '0' + 0
        }
        if (min > 9) {
            appendMin.innerHTML = min
        }
    }
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

    const timerInfo = document.createElement('div')
    timerInfo.classList.add('timer_space')
    const appendMin = document.createElement('h1')
    const appendSec = document.createElement('h1')
    appendMin.classList.add('timer_info')
    appendMin.textContent = '00' + ':'
    appendSec.classList.add('timer_info')
    appendSec.textContent = '00'

    const button = document.createElement('button')
    button.classList.add('button')
    button.textContent = 'Играть еще раз'

    const section = document.createElement('section')
    section.classList.add('game_panel', 'medium')

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
    }

    document.body.appendChild(mainGame)
    mainGame.appendChild(headerPart)
    headerPart.appendChild(timer)
    timer.appendChild(timerMinute)
    timerMinute.appendChild(timerSeconds)
    timer.appendChild(timerInfo)
    timerInfo.appendChild(appendMin)
    timerInfo.appendChild(appendSec)
    headerPart.appendChild(button)
    mainGame.appendChild(section)

    button.addEventListener('click', (e) => {
        renderMediumLevel()
    })

    for (let i in allCards) {
        const card = document.createElement('div')
        card.innerHTML = allCards[i]
        section.appendChild(card)
    }

    function shuffle(o) {
        for (
            let j, x, i = o.length;
            i;
            j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
        );
        return o
    }
    shuffle(allCards)

    let counter = 00
    let tens = 00
    let seconds = 00
    let min = 00
    let interval
    let resultArray = []

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

        clearInterval(interval)
        interval = setInterval(starttimer, 10)
    }

    function checkForMatch() {
        let isMatch =
            firstCard.dataset.framework === secondCard.dataset.framework
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            console.log('match')
            check('correct')
            counter++
            win()
            resultArray = []
        } else {
            check('card')
            resultArray = []
        }
        let result = secondCard.dataset.framework
        resultArray.push(result)

        isMatch ? disableCards() : unflipCards()
    }

    let check = function (className) {
        let x = document.getElementsByClassName('flip')

        setTimeout(function () {
            for (let i = x.length - 1; i >= 0; i--) {
                x[i].className = className
            }
        }, 500)
        console.log(resultArray)
    }

    let win = function () {
        if (counter === 6) {
            clearInterval(interval)
            mainGame.classList.add('main_win')

            const resultScreen = document.createElement('div')
            resultScreen.classList.add('result_screen')

            const blockResultInfo = document.createElement('div')
            blockResultInfo.classList.add('block_result_info')

            const wowPic = document.createElement('img')
            wowPic.classList.add('wow_picture')

            const result = document.createElement('h1')
            result.classList.add('result')
            result.textContent = 'Вы победили!'

            const resultTimerInfo = document.createElement('p')
            resultTimerInfo.classList.add('result_timer_info')
            resultTimerInfo.textContent = 'Затраченное время'

            const resultTimer = document.createElement('h1')
            resultTimer.classList.add('result_timer')
            if (min < 9 && seconds < 9) {
                resultTimer.textContent = `0${min}:0${seconds}`
            }
            if (min < 9 && seconds > 9) {
                resultTimer.textContent = `0${min}:${seconds}`
            }

            const restartButton = document.createElement('button')
            restartButton.classList.add('button')
            restartButton.textContent = 'Играть снова'

            const body = document.querySelector('body')

            body.appendChild(resultScreen)
            resultScreen.appendChild(blockResultInfo)
            blockResultInfo.appendChild(wowPic)
            blockResultInfo.appendChild(result)
            blockResultInfo.appendChild(resultTimerInfo)
            blockResultInfo.appendChild(resultTimer)
            blockResultInfo.appendChild(restartButton)

            restartButton.addEventListener('click', (event) =>{
                startscreen()
                })
    
        }
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
        ;[hasFlippedCard, lockBoard] = [false, false][(firstCard, secondCard)] =
            [null, null]
    }

    cards.forEach((card) => card.addEventListener('click', flipCard))

    function starttimer() {
        tens++
        if (tens > 99) {
            seconds++
            appendSec.innerHTML = '0' + seconds
            tens = 0
        }
        if (seconds > 9) {
            appendSec.innerHTML = seconds
        }
        if (seconds > 59) {
            min++
            appendMin.innerHTML = '0' + min + ':'
            seconds = 00
            appendSec.innerHTML = '0' + 0
        }
        if (min > 9) {
            appendMin.innerHTML = min
        }
    }
}

function renderHardLevel() {
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

    const timerInfo = document.createElement('div')
    timerInfo.classList.add('timer_space')
    const appendMin = document.createElement('h1')
    const appendSec = document.createElement('h1')
    appendMin.classList.add('timer_info')
    appendMin.textContent = '00' + ':'
    appendSec.classList.add('timer_info')
    appendSec.textContent = '00'

    const button = document.createElement('button')
    button.classList.add('button')
    button.textContent = 'Играть еще раз'

    const section = document.createElement('section')
    section.classList.add('game_panel', 'hard')

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
    timerInfo.appendChild(appendMin)
    timerInfo.appendChild(appendSec)
    headerPart.appendChild(button)
    mainGame.appendChild(section)

    button.addEventListener('click', (e) => {
        renderHardLevel()
    })

    for (let i in allCards) {
        const card = document.createElement('div')
        card.innerHTML = allCards[i]
        section.appendChild(card)
    }

    function shuffle(o) {
        for (
            let j, x, i = o.length;
            i;
            j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
        );
        return o
    }
    shuffle(allCards)

    let counter = 00
    let tens = 00
    let seconds = 00
    let min = 00
    let interval
    let resultArray = []

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

        clearInterval(interval)
        interval = setInterval(starttimer, 10)
    }

    function checkForMatch() {
        let isMatch =
            firstCard.dataset.framework === secondCard.dataset.framework
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            console.log('match')
            check('correct')
            counter++
            win()
            resultArray = []
        } else {
            check('card')
            resultArray = []
        }
        let result = secondCard.dataset.framework
        resultArray.push(result)

        isMatch ? disableCards() : unflipCards()
    }

    let check = function (className) {
        let x = document.getElementsByClassName('flip')

        setTimeout(function () {
            for (let i = x.length - 1; i >= 0; i--) {
                x[i].className = className
            }
        }, 500)
        console.log(resultArray)
    }

    let win = function () {
        if (counter === 9) {
            clearInterval(interval)
            mainGame.classList.add('main_win')

            const resultScreen = document.createElement('div')
            resultScreen.classList.add('result_screen')

            const blockResultInfo = document.createElement('div')
            blockResultInfo.classList.add('block_result_info')

            const wowPic = document.createElement('img')
            wowPic.classList.add('wow_picture')

            const result = document.createElement('h1')
            result.classList.add('result')
            result.textContent = 'Вы победили!'

            const resultTimerInfo = document.createElement('p')
            resultTimerInfo.classList.add('result_timer_info')
            resultTimerInfo.textContent = 'Затраченное время'

            const resultTimer = document.createElement('h1')
            resultTimer.classList.add('result_timer')
            if (min < 9 && seconds < 9) {
                resultTimer.textContent = `0${min}:0${seconds}`
            }
            if (min < 9 && seconds > 9) {
                resultTimer.textContent = `0${min}:${seconds}`
            }

            const restartButton = document.createElement('button')
            restartButton.classList.add('button')
            restartButton.textContent = 'Играть снова'

            const body = document.querySelector('body')

            body.appendChild(resultScreen)
            resultScreen.appendChild(blockResultInfo)
            blockResultInfo.appendChild(wowPic)
            blockResultInfo.appendChild(result)
            blockResultInfo.appendChild(resultTimerInfo)
            blockResultInfo.appendChild(resultTimer)
            blockResultInfo.appendChild(restartButton)

            restartButton.addEventListener('click', (event) =>{
                startscreen()
                })

        }
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

    cards.forEach((card) => card.addEventListener('click', flipCard))
    function starttimer() {
        tens++
        if (tens > 99) {
            seconds++
            appendSec.innerHTML = '0' + seconds
            tens = 0
        }
        if (seconds > 9) {
            appendSec.innerHTML = seconds
        }
        if (seconds > 59) {
            min++
            appendMin.innerHTML = '0' + min + ':'
            seconds = 00
            appendSec.innerHTML = '0' + 0
        }
        if (min > 9) {
            appendMin.innerHTML = min
        }
    }
}

window.onload = startscreen

// startButton.addEventListener('click', (event) => {
//     if (levelValue === 1) {
//         console.log('Easy level starts...')
//         renderEasyLevel()
//     } else if (levelValue === 2) {
//         console.log('Medium level starts...')
//         renderMediumLevel()
//     } else {
//         console.log('Hard level starts...')
//         renderHardLevel()
//     }
// })
