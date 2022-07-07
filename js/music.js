const music = document.querySelector('audio');
const current = document.querySelector('.current');
const playstop = document.querySelector('.playstop');
let currentMode;

// Set volume
music.volume = 0;
// music.play(); // Chrome 자동재생 막힘.
currentMode = 'play';

setTimeout(() => {
    current.classList.remove('hidden');
    setInterval(() => {
        current.style.width = `${music.currentTime / music.duration * 100}%`;
    }
    , 100);
}
, 100);