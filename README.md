# Conways-Game-Of-Synths


## The game can be triggered here: [https://dylan-hackett.github.io/conways-game-of-synths/](https://dylan-hackett.github.io/Conways-Game-Of-Synths/)

This Is an implementation of a game popular with programmers called conways game of life. I changed it up a bit here by utilizing some audio elements with the javascript web audio api to make a musical audio synthesizer play a repeating melody line utilizing one of my favorite musical scales, the Javanese pelogg. 

Event listeners are added to control the modulation frequency and depth:

-modFreqInput and modDepthInput are HTML input elements obtained by their respective IDs.

-An event listener is added to modDepthInput, and when its value changes, modGainNode.gain.value is updated accordingly.

-The setInterval() function is used to execute a callback every 500 milliseconds.
Inside the callback, a random frequency is selected from the javanesePelog array.

-The oscillator frequency and modulator frequency are adjusted based on the selected frequency.
-The gain value is updated based on the envelope's current value.
-The envelope's scheduled values are cancelled to ensure a smooth transition.

Have Fun! It's wacky little visual and may require the page to be reloaded after a while for a clean buffer.
