let angle = 0
basic.forever(function () {
    while (angle < 45) {
        angle = angle + 0.2
        pins.servoWritePin(AnalogPin.P0, angle)
        basic.pause(10)
    }
    basic.pause(2000)
    while (angle > 0) {
        angle = angle - 0.2
        pins.servoWritePin(AnalogPin.P0, angle)
        basic.pause(10)
    }
    basic.pause(2000)
})
