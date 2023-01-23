const grid = document.querySelector('.grid')
images_url.sort(()=> 0.4 - Math.random() )
let cardId          = 0
let currentCard     = []
let currentCardId   = []

function displayBoard(){
    for (let index = 0; index < images_url.length; index++) {
        const card = document.createElement('img')
        card.setAttribute('src','assets/face.jpg')
        card.setAttribute('id',index);
        card.addEventListener('click',flipCard);
        grid.appendChild(card)
        
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    let option1 = currentCardId[0]
    let option2 = currentCardId[1]
    if (option1 == option2) {
        cards[option1].setAttribute('src','assets/face.jpg')
        cards[option2].setAttribute('src','assets/face.jpg')}


    else if(currentCard[0] === currentCard[1]){
        cards[option1].setAttribute('src',images_url[option1].image)
        cards[option2].setAttribute('src',images_url[option2].image)
        cards[option1].removeEventListener('click', flipCard)
        cards[option2].removeEventListener('click', flipCard)
    }
    
    else{
        cards[option1].setAttribute('src','assets/face.jpg')
        cards[option2].setAttribute('src','assets/face.jpg')

    }
    currentCard = []
    currentCardId = []  
    

}




function flipCard() {
    cardId = this.id
    currentCard.push(images_url[cardId].name)
    currentCardId.push(cardId)
    console.log(cardId,currentCard,currentCardId)
    this.setAttribute('src',images_url[cardId].image)
    if(currentCard.length === 2){
        setTimeout(checkForMatch, 600)
    }
    
    
}

displayBoard()
