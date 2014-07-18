var five = require('johnny-five'),
	songs = require('j5-songs'),
	board = new five.Board();

board.on('ready', function () {
  var piezo = new five.Piezo(3);

  // Load a song object
  var song = songs.load('mario-fanfare');

  // Play it !
  piezo.play(song);
});