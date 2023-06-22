/**
 * Initial x-coordinate of the asteroid
 */
// Initial y-coordinate of the asteroid
input.onButtonPressed(Button.A, function () {
    if (spaceshipX > 0) {
        spaceshipX += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (spaceshipX < 4) {
        spaceshipX += 1
    }
})
let asteroidY = 0
let asteroidX = 0
let spaceshipX = 0
// Initial x-coordinate of the spaceship
spaceshipX = 2
// Initial y-coordinate of the spaceship
let spaceshipY = 4
basic.forever(function () {
    basic.clearScreen()
    led.plot(spaceshipX, spaceshipY)
    led.plot(asteroidX, asteroidY)
    // Move the asteroid down the screen
    if (asteroidY < 4) {
        asteroidY += 1
    } else {
        // If the asteroid reaches the bottom, reset its position
        asteroidX = Math.randomRange(0, 4)
        asteroidY = 0
    }
    // Check for collision
    if (spaceshipX == asteroidX && spaceshipY == asteroidY) {
        // Collision occurred
        spaceshipX = 2
        spaceshipY = 4
        basic.clearScreen()
        // Display crash animation
        for (let index = 0; index < 3; index++) {
            led.plot(2, 2)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
    }
    basic.pause(200)
})
