const songs = [
  './songs/ACZINO vs WOS - Octavos  Red Bull Internacional 2019.mp3',
  './songs/Hans Zimmer - Interstellar - Main Theme.mp3',
  './songs/Travis Scott - FE!N ft. Playboi Carti.mp3'
];
const titles = ['ACZINO vs WOS - Octavos  Red Bull', 'Hans Zimmer - Interstellar', 'Travis Scott - FE!N'];
const pictures = ['./imgs/wosVSaczino.avif', './imgs/interestellar.jpeg', './imgs/fein.png'];

const music = document.getElementById('song');
const image = document.getElementById('picture');
const Name = document.getElementById('title');
let position = 0;

function change() {
  music.src = songs[position];
  image.src = pictures[position];
  Name.texContent = titles[position];
  music.play();
}
change();

function togglePlay() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function nextSong() {
  position++;
}

function prevSong() {}
