var five = require("johnny-five"),
  board, led;

board = new five.Board();

board.on("ready", function() {

  // Create a standard `led` hardware instance
  led = new five.Led(13);

  this.repl.inject({
    led: led
  });

  // "strobe" the led in 100ms on-off phases
  led.strobe(100);
});