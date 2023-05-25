const conway = document.getElementById("conway").getContext("2d");
document.getElementById("conway").width = window.innerWidth;
document.getElementById("conway").height = window.innerHeight;
const width = document.getElementById("conway").width;
const height = document.getElementById("conway").height;
const size = 2;
const colorz2 = 'black';
const colorz = 'purple';

const draw = (x, y, c, s) => {
  conway.fillStyle = c;
  conway.fillRect(x, y, s, s);
};

let grid = [];
let tempgrid = [];

function cellValue(x, y) {
  try {
    return grid[x][y];
  } catch {
    return 0;
  }
}

function countNeighbors(x, y) {
  let count = 0;
  if (cellValue(x - 1, y)) count++;
  if (cellValue(x + 1, y)) count++;
  if (cellValue(x, y - 1)) count++;
  if (cellValue(x, y + 1)) count++;
  if (cellValue(x - 1, y - 1)) count++;
  if (cellValue(x - 1, y + 1)) count++;
  if (cellValue(x + 1, y - 1)) count++;
  if (cellValue(x + 1, y + 1)) count++;
  return count;
}

function updateCell(x, y) {
  let neighbors = countNeighbors(x, y);
  if (neighbors > 4 || neighbors < 3) return 0;
  if (grid[x][y] === 0 && neighbors === 3) return 1;
  return grid[x][y];
}

function update() {
  conway.clearRect(0, 0, width, height);
  draw(0, 0, colorz2, width);
  for (let x = 0; x < width / size; x++) {
    for (let y = 0; y < height / size; y++) {
      tempgrid[x][y] = updateCell(x, y);
    }
  }
  grid = tempgrid;
  let cnt = 0;
  for (let x = 0; x < width / size; x++) {
    for (let y = 0; y < height / size; y++) {
      if (grid[x][y]) {
        draw(x * size, y * size, colorz, size);
        cnt++;
      }
    }
  }
  setTimeout(() => {
    requestAnimationFrame(update);

  



  }, 90);
}


function initArray(w, h) {
  const arr = [];
  for (let x = 0; x < w; x++) {
    arr[x] = [];
    for (let y = 0; y < h; y++) {
      arr[x][y] = 0;
    }
  }
  return arr;
}

function init() {
  grid = initArray(width / size, height / size);
  tempgrid = initArray(width / size, height / size);
  for (let x = 0; x < width / size; x++) {
    for (let y = 0; y < height / size; y++) {
      if (Math.random() > 0.5) grid[x][y] = 1;
    }
  }
  update();
}

init()

setInterval(() => {
  init()


  

}, 20000);