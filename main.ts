input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
    basic.showLeds(`
        . . # . .
        . # . . .
        # . # # #
        . # . . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("straight")
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "left") {
        Rover.MotorRunDual(0, 50)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedString == "right") {
        Rover.MotorRunDual(50, 0)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # . #
            . . . # .
            . . # . .
            `)
    } else if (receivedString == "straight") {
        Rover.MotorRunDual(50, 50)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    basic.pause(500)
    basic.clearScreen()
    Rover.MotorStopAll(MotorActions.Stop)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("right")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # . #
        . . . # .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(7)
