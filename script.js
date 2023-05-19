conway = document.getElementById("conway").getContext("2d")
document.getElementById("conway").width = window.innerWidth
document.getElementById("conway").height = window.innerHeight
width = document.getElementById("conway").width
height = document.getElementById("conway").height
size = 3
colorz2 = 'black'
colorz = 'purple'
draw = (x,y,c,s) => {
    conway.fillStyle = c
    conway.fillRect(x,y,s,s)
}
grid = []
tempgrid = []
function cellValue(x,y){
    try{
        return grid[x][y]
    } catch{
        return 0
    }
}
function countNeighbors(x,y){
    var count = 0
    if(cellValue(x-1,y)) count++
    if(cellValue(x+1,y)) count++
    if(cellValue(x,y-1)) count++
    if(cellValue(x,y+1)) count++
    if(cellValue(x-1,y-1)) count++
    if(cellValue(x-1,y+1)) count++
    if(cellValue(x+1,y-1)) count++
    if(cellValue(x+1,y+1)) count++
    return count
}
function updateCell(x,y){
    let neighbors = countNeighbors(x,y)
    if(neighbors > 4 || neighbors < 3) return 0
    if(grid[x][y] == 0 && neighbors == 3) return 1
    return grid[x][y]
}

function update(){
    conway.clearRect(0,0,width,height)
    draw(0,0,colorz2,width)
    for (let x = 0;x<width/size;x++){
        for (let y = 0;y<height/size;y++){
            tempgrid[x][y] = updateCell(x,y)
        }
    }
    grid = tempgrid
    let cnt = 0
    for (let x = 0;x<width/size;x++){
        for (let y = 0;y<height/size;y++){
            if(grid[x][y]){
                draw(x*size,y*size,colorz,size)
                cnt++
            }
        }
    }
    setTimeout(() => {requestAnimationFrame(update)},500)
}
function initArray(w,h){
    arr = []
    for(let x = 0;x<w;x++){
        arr[x] = []
        for (let y = 0;y<h;y++){
            arr[x][y] = 0

        }
    }
    return arr
}

init = () => {


    grid = initArray(width/size, height/size)
    tempgrid = initArray(width/size, height/size)
    for (let x = 0;x<width/size;x++){
        for (let y = 0;y<height/size;y++){
            if(Math.random() > .5) grid[x][y] = 1
        }
    }
    update()

}
init()


setInterval(() => {
    init() 


}, 1000);

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

delay.delayTime.value = .3;

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
    modulator.frequency.value = (modFreqInput.value+javanesePelog[rnd])/32
    envelope.gain.setValueAtTime(.4, audioCtx.currentTime);
    envelope.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + .8); // Attack
    envelope.gain.exponentialRampToValueAtTime(0.05, audioCtx.currentTime + 0.3); // Release
    gainNode.gain.value = envelope.gain.getValueAtTime(audioCtx.currentTime)/2;
    envelope.gain.cancelScheduledValues(audioCtx.currentTime);
}, 500);
// put your audio code here


});
document.addEventListener("DOMContentLoaded",() => {
let unicycle = new UnicycleRangeSlider("#unicycle1");
});
