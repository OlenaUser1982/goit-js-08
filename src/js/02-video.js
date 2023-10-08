import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(date) {
  localStorage.setItem('videoplayer-current-time', date.seconds);
}
const readDate = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(readDate);
