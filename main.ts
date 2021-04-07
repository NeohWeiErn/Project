input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    basic.clearScreen()
    Shape += 1
    if (Shape > 5) {
        Shape = 1
    }
    
    if (Shape == 1) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            . # . . .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.clearScreen()
        basic.showString("Heart")
    } else if (Shape == 2) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # . . .
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # . . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # . # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.clearScreen()
        basic.showString("Square")
    } else if (Shape == 3) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # # . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("Circle")
    } else if (Shape == 4) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            `)
        basic.clearScreen()
        basic.showString("Triangle")
    } else {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("Rectangle")
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    basic.clearScreen()
    Shape += -1
    if (Shape < 1) {
        Shape = 5
    }
    
    if (Shape == 1) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            . # . . .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.clearScreen()
        basic.showString("Heart")
    } else if (Shape == 2) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . .
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # . . .
            # . . . .
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # . . .
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # . . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # . # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.clearScreen()
        basic.showString("Square")
    } else if (Shape == 3) {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # . . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # # . .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            # . . . .
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("Circle")
    } else if (Shape == 4) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # # # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . . .
            # # # # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            `)
        basic.clearScreen()
        basic.showString("Triangle")
    } else {
        basic.showLeds(`
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . # . . .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
        basic.clearScreen()
        basic.showString("Rectangle")
    }
    
})
let Shape = 0
Shape = 1
