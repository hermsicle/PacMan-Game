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
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
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
        //Remove any ghost class
        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
        ){
            squares[ghost.currentIndex].classList.remove(ghost.className)
            //Add direction to currentIndex
            ghost.currentIndex += direction;
    
            //Add back ghost class
            squares[ghost.currentIndex].classList.add(ghost.className)
        } else {
            direction = directions[Math.floor(Math.random() * directions.length)];
        }
    }, 250)
}

ghosts.forEach( ghost => moveGhost(ghost))