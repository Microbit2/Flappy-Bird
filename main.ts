input.onButtonPressed(Button.A, function () {
    Vogel.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Vogel.change(LedSpriteProperty.Y, 1)
})
let leer = 0
let Vogel: game.LedSprite = null
let Schritte = 0
let Objekt: game.LedSprite[] = []
Vogel = game.createSprite(0, 2)
Vogel.set(LedSpriteProperty.Blink, 150)
loops.everyInterval(1000, function () {
    if (game.isRunning()) {
        game.setScore(game.score() + 1)
    }
})
basic.forever(function () {
    while (Objekt.length > 0 && Objekt[0].get(LedSpriteProperty.X) == 0) {
        Objekt.removeAt(0).delete()
    }
    for (let Objekt2 of Objekt) {
        Objekt2.change(LedSpriteProperty.X, -1)
    }
    if (Schritte % 2 == 0) {
        leer = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != leer) {
                Objekt.push(game.createSprite(4, index))
            }
        }
    }
    for (let Objekt3 of Objekt) {
        if (Objekt3.get(LedSpriteProperty.X) == Vogel.get(LedSpriteProperty.X) && Objekt3.get(LedSpriteProperty.Y) == Vogel.get(LedSpriteProperty.Y)) {
            game.pause()
            for (let index = 0; index < 4; index++) {
                basic.showLeds(`
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                    `)
                basic.pause(5)
                basic.showLeds(`
                    . # . # .
                    # . # . #
                    . # . # .
                    # . # . #
                    . # . # .
                    `)
            }
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
            basic.showNumber(game.score())
            basic.pause(2000)
            control.reset()
        }
    }
    Schritte += 1
    basic.pause(1000)
})
