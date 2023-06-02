class RandomColorTable {
    constructor(initAmount, tcTitle, textTitle, colorContainerTitle,startButtonTitle) {
        this.tcTitle = tcTitle
        this.amount = initAmount
        this.textTitle = textTitle
        this.colorContainerTitle = colorContainerTitle
        this.startButtonTitle = startButtonTitle
    }

    getRandomBackgroundColor() {

        return Math.floor(Math.random() * 16777215).toString(16)
    }

    displayTable() {
        const targetContainer = document.querySelector(this.tcTitle)
        targetContainer.innerHTML = ''

        for (let i = 0; i < this.amount; i++) {
            let randomBackgroundColor = this.getRandomBackgroundColor()

            const colorContainer = document.createElement('div')
            colorContainer.classList.add(this.colorContainerTitle)
            colorContainer.style.backgroundColor = '#' + randomBackgroundColor


            const textContainer = document.createElement('p')
            textContainer.classList.add(this.textTitle)
            textContainer.innerHTML = '#'+randomBackgroundColor

            colorContainer.append(textContainer)

            targetContainer.append(colorContainer)
        }

    }
    start(){
        const startButton = document.querySelector(this.startButtonTitle)
        console.log(startButton)

        startButton.addEventListener('click',()=>{
            this.displayTable()
        })
    }

}


const randomColorTable = new RandomColorTable(32, '.random-color__table', 'random-color__text', 'random-color__block','.random-color__call-button')

randomColorTable.start()