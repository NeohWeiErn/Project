def on_button_pressed_a():
    global Shape
    basic.clear_screen()
    Shape += 1
    if Shape > 5:
        Shape = 1
    if Shape == 1:
        basic.show_leds("""
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            . # . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            . # . . .
            . . # . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            . # . # .
            . . # . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . #
            . # . # .
            . . # . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            """)
        basic.show_leds("""
            . # . # .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            """)
        basic.show_leds("""
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            """)
        basic.clear_screen()
        basic.show_string("Heart")
    elif Shape == 2:
        basic.show_leds("""
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . #
            # # # # #
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.show_leds("""
            # # . . .
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.show_leds("""
            # # . . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.show_leds("""
            # # . # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.clear_screen()
        basic.show_string("Square")
    elif Shape == 3:
        basic.show_leds("""
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # # . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            # . . . #
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . #
            # . . . #
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            """)
        basic.show_leds("""
            . # . # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            """)
        basic.show_leds("""
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            """)
        basic.clear_screen()
        basic.show_string("Circle")
    elif Shape == 4:
        basic.show_leds("""
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            # # . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            # # # . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            # # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            # # # # #
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            """)
        basic.clear_screen()
        basic.show_string("Triangle")
    else:
        basic.show_leds("""
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . # . # .
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . # .
            . # . # .
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            """)
        basic.show_leds("""
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            """)
        basic.show_leds("""
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            """)
        basic.clear_screen()
        basic.show_string("Rectangle")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Shape
    basic.clear_screen()
    Shape += -1
    if Shape < 1:
        Shape = 5
    if Shape == 1:
        basic.show_leds("""
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            . # . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            . # . . .
            . . # . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            . # . # .
            . . # . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . #
            . # . # .
            . . # . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            """)
        basic.show_leds("""
            . # . # .
            # . . . #
            # . . . #
            . # . # .
            . . # . .
            """)
        basic.show_leds("""
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            """)
        basic.clear_screen()
        basic.show_string("Heart")
    elif Shape == 2:
        basic.show_leds("""
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # . . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # . .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # .
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . .
            # . . . #
            # # # # #
            """)
        basic.show_leds("""
            # # . . .
            # . . . .
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.show_leds("""
            # # . . .
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.show_leds("""
            # # . . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.show_leds("""
            # # . # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
        basic.clear_screen()
        basic.show_string("Square")
    elif Shape == 3:
        basic.show_leds("""
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # . . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # # . .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . .
            # . . . #
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            # . . . .
            # . . . #
            # . . . #
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            """)
        basic.show_leds("""
            . # . # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            """)
        basic.show_leds("""
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            """)
        basic.clear_screen()
        basic.show_string("Circle")
    elif Shape == 4:
        basic.show_leds("""
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            # # . . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            # # # . .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            # # # # .
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . . .
            # # # # #
            . . . . .
            """)
        basic.show_leds("""
            . . . . .
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            """)
        basic.clear_screen()
        basic.show_string("Triangle")
    else:
        basic.show_leds("""
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # . .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . . .
            . # . # .
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            . # . . .
            . # . # .
            . # . # .
            . # # # .
            """)
        basic.show_leds("""
            . # . . .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            """)
        basic.show_leds("""
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            """)
        basic.show_leds("""
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            """)
        basic.clear_screen()
        basic.show_string("Rectangle")
input.on_button_pressed(Button.B, on_button_pressed_b)

Shape = 0
Shape = 1