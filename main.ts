input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 5, NeoPixelMode.RGB_RGB)
