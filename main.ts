let Number2 = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Number2 = randint(1, 3)
    if (Number2 == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (Number2 == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Meh)
    }
})
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 120)
})
