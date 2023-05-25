
window.addEventListener('click', function() {
    



window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
var oscillator = audioCtx.createOscillator();
var modulator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
var modGainNode = audioCtx.createGain();
var envelope = audioCtx.createGain(); // Create an envelope gain node


oscillator.type = 'triangle';

modulator.type = 'triangle';
modGainNode.gain.value = 20;


 // Set initial gain to zero
envelope.gain.value = 0.5; // Set envelope gain to zero initially
// create audio context and connect nodes here
modulator.connect(modGainNode);
modGainNode.connect(oscillator.frequency);
oscillator.connect(envelope); // Connect the oscillator to the envelope
envelope.connect(gainNode); // Connect the envelope to the gain node
gainNode.connect(audioCtx.destination);



modulator.start();
oscillator.start();
var delay = audioCtx.createDelay();
var feedback = audioCtx.createGain();

delay.delayTime.value = .2;

feedback.gain.value = .3;

gainNode.connect(delay);
delay.connect(feedback);
feedback.connect(delay);

delay.connect(audioCtx.destination);


var modFreqInput = document.getElementById('modFreq');
var modDepthInput = document.getElementById('modDepth');

modFreqInput.addEventListener('input', function() {

});

modDepthInput.addEventListener('input', function() {
    modGainNode.gain.value = this.value;
});

setInterval(() => {
    let javanesePelog = [146.83, 164.81, 174.61, 195.998, 220, 246.94, 261.63, 293.66, 329.63, 349.23, 391.995, 440, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880, 987.77, 1046.5, 1174.66, 1318.51, 1396.91, 1567.98, 1760, 1975.53, 2093, 2349.32, 2637.02, 2793.83, 3135.96, 3520, 3951.07, 4186.01];
    let rnd = parseInt(Math.random()*14);
    let freq = javanesePelog[rnd];
    oscillator.frequency.value = freq;
    modulator.frequency.value = (modFreqInput.value+javanesePelog[rnd])/16
    envelope.gain.setValueAtTime(.4, audioCtx.currentTime);
    envelope.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + .8); // Attack
    envelope.gain.exponentialRampToValueAtTime(0.05, audioCtx.currentTime + 0.3); // Release
    gainNode.gain.value = envelope.gain.getValueAtTime(audioCtx.currentTime)/2;
    envelope.gain.cancelScheduledValues(audioCtx.currentTime);
}, 500);
// put your audio code here


});

