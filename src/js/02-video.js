import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayerTimeUpdate, 1000));
function onPlayerTimeUpdate(data) {
    const time = data.seconds;
    localStorage.setItem(STORAGE_KEY, time);
};

const currentTime = localStorage.getItem(STORAGE_KEY);
if (currentTime) {
    player.setCurrentTime(currentTime);
}
