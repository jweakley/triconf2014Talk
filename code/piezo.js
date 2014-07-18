var five = require("johnny-five");

five.Board().on("ready", function() {
  // Creates a piezo object and defines the pin to be used for the signal
  var piezo = new five.Piezo(3);

  // Plays a song
  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["C4", 1],
      ["D4", 1],
      ["E4", 1],
      ["F4", 1],
      ["G4", 1],
      ["A4", 1],
      ["B4", 1],
      ["C5", 1]
    ],
    tempo: 200
  });

});
