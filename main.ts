input.onButtonPressed(Button.A, function () {
    걸음수 = 0
})
input.onGesture(Gesture.LogoUp, function () {
    걸음수 += 1
})
let 걸음수 = 0
걸음수 = 0
basic.forever(function () {
    basic.showNumber(걸음수)
})
