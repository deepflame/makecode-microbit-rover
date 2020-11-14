input.onButtonPressed(Button.A, function () {
    radio.sendString("yes")
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "yes") {
        basic.showIcon(IconNames.Yes)
    } else if (receivedString == "no") {
        basic.showIcon(IconNames.No)
    }
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("no")
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(7)
