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
const btnToggle = document.getElementById('togglePlay');
let position = 0;

function change() {
  music.src = songs[position];
  image.src = pictures[position];
  Name.texContent = titles[position];
}
change();

function togglePlay() {
  if (music.paused) {
    music.play();
    btnToggle.src = './imgs/pausa.png';
  } else {
    music.pause();
    btnToggle.src = './imgs/play.png';
  }
}

function nextSong() {
  position = (position + 1) % songs.length;
  change();
  music.play();
}

function prevSong() {
  position = (position - 1 + songs.length) % songs.length;
  change();
  music.play();
}
