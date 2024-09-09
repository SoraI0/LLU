const gameField = document.querySelector('.game-field')
const body = document.querySelector('body')
let numOfBlocks = 11
let fieldSize = 700

gameField.style.display = 'flex' 
gameField.style.flexWrap = 'wrap'
gameField.style.width = fieldSize + 'px' 
gameField.style.height = fieldSize + 'px' 
// gameField.style.border = '1px solid red'
gameField.style.justifyContent = 'space-between'
gameField.style.alignItems = 'space-around'

const letterBlock = document.createElement('div')
let letterBlockSize = fieldSize / numOfBlocks-2
letterBlock.style.display = 'flex'
letterBlock.style.justifyContent = 'center'
letterBlock.style.alignItems = 'center'

letterBlock.style.width = letterBlockSize + 'px'
letterBlock.style.height = letterBlockSize + 'px'
letterBlock.style.border = '1px solid black'
letterBlock.style.borderRadius = '5px'


let gameMtrx = [
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0",  "0"]
]

console.log(gameMtrx.length);



for (let i = 0; i < gameMtrx.length; i++) {
    for (let ii = 0; ii < gameMtrx[i].length; ii++) {
        const clone = letterBlock.cloneNode(true);
        clone.setAttribute('row', i)
        clone.setAttribute('cow', ii)
        clone.classList.add('field-letter')

        if (gameMtrx[i][ii] != "0") {
            clone.textContent = gameMtrx[i][ii]
        }
        gameField.appendChild(clone)
        
    }
}


const hotbar = document.createElement('div')
const hotbarLetterBlock = letterBlock
hotbarLetterBlock.style.borderColor = 'red'
hotbar.style.display = 'flex'
hotbar.style.gap = '2px'
hotbar.style.cursor = 'pointer'
body.appendChild(hotbar)
let hotbarLetters = ["A", "B", "C", "D", "E", "F", "G"]

for (let i = 0; i < hotbarLetters.length; i++){
    const clone = letterBlock.cloneNode(true)
    clone.setAttribute('letter', i)
    clone.textContent = hotbarLetters[i]
    hotbar.appendChild(clone)
}

let selectLetter = ''
hotbar.addEventListener('click', function(event) {
    const clickedElement = event.target;
    selectLetter = clickedElement.textContent // Виведе елемент, по якому клацнули
});

gameField.addEventListener('click', function(event) {
    const clickedElement = event.target;
    if(selectLetter.length > 0 && clickedElement.classList.contains('field-letter') ) {
        clickedElement.textContent = selectLetter
    }
    selectLetter = ''
});
