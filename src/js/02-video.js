import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const vimeoPlayer = new Vimeo('vimeo-player');

vimeoPlayer.on('timeupdate', throttle(timeVideo, 1000));
function timeVideo(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
if (localStorage.getItem('videoplayer-current-time')) {
  vimeoPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
