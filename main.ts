basic.forever(function () {
    if (Rover.LineTracking() == 0) {
        Rover.Move(100)
    }
    // links
    if (Rover.LineTracking() & 0b00000001) {
        Rover.MotorRunDual(-50, 0)
        pause(1200)
    }
    // rechts
    if (Rover.LineTracking() & 0b00000100) {
        Rover.MotorRunDual(0, -50)
        pause(1200)
    }
    // links, mitte
    if (Rover.LineTracking() & 0b00000001 && Rover.LineTracking() & 0b0000010) {
        Rover.Move(-50)
        pause(600)
Rover.MotorRunDual(-50, 0)
        pause(1200)
    }
    // rechts, mitte
    if (Rover.LineTracking() & 0b0000010 && Rover.LineTracking() & 0b0000100) {
        Rover.Move(-50)
        pause(600)
Rover.MotorRunDual(0, -50)
        pause(1200)
    }
    // alle
    if (Rover.LineTracking() & 0b00000001 && Rover.LineTracking() & 0b0000010 && Rover.LineTracking() & 0b0000100) {
        Rover.Move(-100)
        pause(600)
Rover.MotorRunDual(50, -50)
        pause(1200)
    }
})
