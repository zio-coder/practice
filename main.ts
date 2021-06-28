if (input.temperature() > 30) {
    basic.showIcon(IconNames.StickFigure)
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
} else {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
	
})
