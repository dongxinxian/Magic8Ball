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
