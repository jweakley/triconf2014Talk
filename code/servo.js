var five = require("johnny-five"),
  board, servo;

board = new five.Board();

board.on("ready", function() {

  // Create a new `servo` hardware instance.
  servo = new five.Servo({
    pin: 9,
    range: [0,160]
  });

  this.repl.inject({
    servo: servo
  });

  // "sweep" the servo from min to max
  servo.sweep();
});
