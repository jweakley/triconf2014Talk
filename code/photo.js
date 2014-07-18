var five = require("johnny-five"),
  board, servo, photoresistor, range;

board = new five.Board();

board.on("ready", function() {
  range = [0,159];
  photoresistor = new five.Sensor({ pin: "A0", freq: 50 });
  servo = new five.Servo({ pin: 9, range: range });

  // "data" get the current reading from the photoresistor
  photoresistor.scale(range).on("data", function() {
    servo.to(Math.floor(this.scaled));
  });
});
