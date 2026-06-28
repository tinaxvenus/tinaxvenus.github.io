//Getting player:
let puffer = document.getElementById("puffer");
let gameScreen = document.getElementById("gameScreen");
let checkpoint = document.getElementById("checkpoint");
let y = 0; //starting point of puffer
let pixelMovement = 20;
let scoreDiv = document.getElementById("score");
let scoreCount = 0;
let fishes = 
[
    //FISH ARRAY YAYAYAYY
    document.getElementById("fishR1"),
    document.getElementById("fishR2"),
    document.getElementById("fishR3"),

    document.getElementById("fishL1"),
    document.getElementById("fishL2"),
    document.getElementById("fishL3")
];  

gameLoop();


//Movement (albeit up and down but this counts):
document.addEventListener("keydown", (temp) => 
{
    if (temp.key === "w")
        {
            y -= pixelMovement;
        } 
        
    if (temp.key === "s") 
        {
            y += pixelMovement;
        }
            
    puffer.style.top = y + "px";
    //Must add in text to let player know controls!!
});
        
//Puffer Collider:
function checkCollisionFish() {
    //Refrenced the api MDM lowkey:
    let pufferBox = puffer.getBoundingClientRect();

    for (let i = 0; i < fishes.length; i++) {
        let fishBox = fishes[i].getBoundingClientRect();

        //Refrencing Chris Courses "How to code:collision Detection w/ Javascript"
        if (
            pufferBox.left <= fishBox.right &&
            pufferBox.right >= fishBox.left &&
            pufferBox.top <= fishBox.bottom &&
            pufferBox.bottom >= fishBox.top
        ) {
            console.log("Puffer has collided with a fish, RIP. Game over");
            gameOver(); 
            return true;
        }
    }
    return false;
}

//Checkpoint collider, w puffer
function checkCollisionCheckpoint()
{
    let pufferBox = puffer.getBoundingClientRect();
    let clam = checkpoint.getBoundingClientRect();

    //Refrencing Chris Courses "How to code:collision Detection w/ Javascript" again
    if (
        pufferBox.left <= clam.right &&
        pufferBox.right >= clam.left &&
        pufferBox.top <= clam.bottom &&
        pufferBox.bottom >= clam.top
        ) {
            console.log("Puffer has reached a checkpoint");
            //Teleport back
            resetPuffer();
            
            return true;
        }
    
    return false;   
}

function resetPuffer()
{
    y = 0;
    puffer.style.top = y + "px";
    scoreCount++;

    //And increase score:
    updateScore(scoreCount);
}

function updateScore(score)
{
    scoreDiv.textContent = "Score is " + score;

    if(score == 10)
    {
        alert("Well Done, you have helped Puffer overcome his fear of fish!");
    }
}

function waterSound()
{
    water = new sound("gametheme.mp3");
    water.play();
    //Nevermind sound just breaks the game actually.
}

function gameOver()
{
    alert("GameOver, puffer hit a fish!")
    resetPuffer();
    scoreCount = 0;
    updateScore();
}

function gameLoop() {
    checkCollisionFish();
    checkCollisionCheckpoint()
    //THIS IS HWY IT WSNT GETTING THE COLLIDE WHAT
    requestAnimationFrame(gameLoop);   
}


