const scoreDisplay = document.getElementById('scoreDisplay');
const grid = document.querySelector('.grid');

//Array of divs to be generated in our createGrid();
let squares = [];
let width = 28;
let score = 0;

/*
0 = pac-dots
1 = wall
2 = ghost-lair
3 = power pellet
4 = empty
*/
//Total pac-dots + power-pellets = 274

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

//Create a function to createGrid
const createGrid = () => {
    //Loop through our layout
    for(let i = 0; i < layout.length; i++){
        //Create divs
        const square = document.createElement('div');
        grid.appendChild(square)

        //Squares is an array of divs we just created. 
        squares.push(square)

        if(layout[i] === 0) {
            squares[i].classList.add('pac-dots')
        }
        else if(layout[i] === 1) {
            squares[i].classList.add('wall')
        }
        else if(layout[i] === 2) {
            squares[i].classList.add('ghost-lair')

        }
        else if(layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        }
    }
}
createGrid();

//Starting Position for PacMan
let pacmanCurrentIndex = 490;
squares[pacmanCurrentIndex].classList.add('pacman');

//Create function for pacman controls
const control = e => {
    squares[pacmanCurrentIndex].classList.remove('pacman')
    switch(e.keyCode) {
        case 40:
            console.log('down pressed')
            //Disable from going down to ghost lair
            //Check if the surrounding area is a wall and edge
            if(
                !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
                pacmanCurrentIndex + width < width * width &&
                !squares[pacmanCurrentIndex + width].classList.contains('wall')
                ) {
                pacmanCurrentIndex += width;
            }
            break;
        case 38:
            console.log('up pressed')
            if(
                pacmanCurrentIndex - width >= 0 &&
                !squares[pacmanCurrentIndex - width].classList.contains('wall')
            ) {
                pacmanCurrentIndex -= width;
            }
            break
        case 37:
            console.log('left pressed')
            if(
                pacmanCurrentIndex % width !== 0 &&
                !squares[pacmanCurrentIndex - 1].classList.contains('wall')
            ) {
                pacmanCurrentIndex -= 1;
            }
            if(pacmanCurrentIndex === 364) {
                console.log('left wall hit')
                pacmanCurrentIndex = 391;
            }
            break
        case 39:
            console.log('right pressed')
            if(
                pacmanCurrentIndex % width < width &&
                !squares[pacmanCurrentIndex + 1].classList.contains('wall')
            ) {
                pacmanCurrentIndex += 1;
            }
            if(pacmanCurrentIndex === 391) {
                console.log('right wall hit')
                pacmanCurrentIndex = 364;
            }
            break
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
    pacDotEaten();
    eatPowerPellet();
    checkForGameOver();
    checkForWin();
}

//Move pacman with keyup
document.addEventListener('keyup' , control)

//Function to pelletEaten
const pacDotEaten = () => {
    //Checks if our pacman is on a pacdot
    if(squares[pacmanCurrentIndex].classList.contains('pac-dots')) {
    //Increment score
        score++;
    //Change score in dom
        scoreDisplay.innerHTML = score;
    //remove classList pacdot
        squares[pacmanCurrentIndex].classList.remove('pac-dots')
    }
}

//Function to eatPowerPellet
const eatPowerPellet = () => {
    //Check if square pacman contains power pellet
    if(squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        //Remove the power pellet
        squares[pacmanCurrentIndex].classList.remove('power-pellet')    
        //Add score of 10
        score += 10
        //Change ghost to isScared
        //Use settimeout to unscare ghost in 10 seconds 
        ghosts.forEach( ghost => {
            ghost.isScared = true
        })
        setTimeout(unScareGhost, 10000)
    }
}

const unScareGhost = () => {
    ghosts.forEach( ghost => ghost.isScared = false)
}

//Create a Class of Ghost 
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.timerId = NaN
        this.isScared = false
    }
}

const ghosts = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 300),
    new Ghost('inky', 351, 200),
    new Ghost('clyde', 379, 100)
]

//Render the ghosts using forEach() into the DOM by referencing to the class 
ghosts.forEach( ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
});

//Create a function that will move the ghosts
const moveGhost = ghost => {
    const directions = [-1, +1, +width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval( () => {
        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost') 
        ){
            //Remove all ghost classes
            squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
            squares[ghost.currentIndex].classList.remove(ghost.className)
            //Set CurrentIndex to += direction 
            ghost.currentIndex += direction;
            //Add back ghost classes 
            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')
        } else {
            direction = directions[Math.floor(Math.random() * directions.length)];
        }

        //Condition to check if ghost is scared
        if(ghost.isScared) {
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }

        //Check if pacman is on scared Ghost
        if(
            squares[pacmanCurrentIndex].classList.contains('ghost') &&
            ghost.isScared
        ) {
            //Remove classnames
            squares[ghost.currentIndex].classList.remove('scared-ghost', 'ghost', ghost.className)
            //Change ghost current index back to the start index
            ghost.currentIndex = ghost.startIndex
            //add a score of 100
            score += 100
            //re-add the classback to the ghost
            squares[ghost.currentIndex].classList.add('ghost')
        }
        checkForGameOver();
    }, ghost.speed)
}

ghosts.forEach( ghost => moveGhost(ghost))

//Define a gameover function 
const checkForGameOver = () => {
    //Conditon to check if our ghost and pacman collides
    if(
        squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
    ) {
        squares[pacmanCurrentIndex].classList.remove('pacman')
        //for each ghost, stop it from moving
        ghosts.forEach( ghost => clearInterval(ghost.timerId))
        //Remove event listener 
        document.removeEventListener('keyup', control)
        //Alert User
        scoreDisplay.innerHTML = 'You Have Lost'
    }
}

//Define a win game function
const checkForWin = () => {
    if(score === 274) {
        ghosts.forEach( ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', control)
        scoreDisplay.innerHTML = 'You Have Won'
    }
}
