var five = require("johnny-five"),
  board = new five.Board();

board.on("ready", function() {
  // Creates a piezo object and defines the pin to be used for the signal
  var piezo = new five.Piezo(3);

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

  // Plays a song
  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["C5", 1/4],
      ["D5", 1/4],
      ["F5", 1/4],
      ["D5", 1/4],
      ["A5", 1/4],
      [null, 1/4],
      ["A5", 1],
      ["G5", 1],
      [null, 1/2],
      ["C5", 1/4],
      ["D5", 1/4],
      ["F5", 1/4],
      ["D5", 1/4],
      ["G5", 1/4],
      [null, 1/4],
      ["G5", 1],
      ["F5", 1],
      [null, 1/2],
      ["C5", 1/4],
      ["D5", 1/4],
      ["F5", 1/4],
      ["D5", 1/4],
      ["F5", 1],
      ["G5", 1/2],
      ["E5", 1],
      ["C5", 1/2],
      [null, 1/4],
      ["C5", 1/2],
      ["G5", 1],
      ["F5", 2],
      ["C5", 1/4],
      ["D5", 1/4],
      ["F5", 1/4],
      ["D5", 1/4],
      ["A5", 1/4],
      [null, 1/4],
      ["A5", 1],
      ["G5", 1],
      [null, 1/2],
      ["C5", 1/4],
      ["D5", 1/4],
      ["F5", 1/4],
      ["D5", 1/4],
      ["A5", 1],
      ["E5", 1/4],
      ["F5", 3/4],
      [null, 1/4],
      ["C5", 1/4],
      ["D5", 1/4],
      ["F5", 1/4],
      ["D5", 1/4],
      ["F5", 1],
      ["G5", 1/2],
      ["E5", 3/4],
      ["C5", 1/2],
      [null, 1/4],
      ["G5", 1],
      ["F5", 2]
    ],
    tempo: 100
  });

});
