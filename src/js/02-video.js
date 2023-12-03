import Vimeo from '@vimeo/player'
import throttle from 'lodash.throttle'

const videoInfo = document.getElementById('vimeo-player');
const playVimeoOk = new Vimeo(videoInfo);


const saveTime = throttle(function () {
    playVimeoOk.getCurrentTime().then(function (time) {
      localStorage.setItem('videoplayer-current-time', time);
      console.log(localStorage);
    });
  }, 1000);

playVimeoOk.on('timeupdate', saveTime);

const timeFinal = localStorage.getItem('videoplayer-current-time');
console.log("::",timeFinal);

if (timeFinal) {
    playVimeoOk.setCurrentTime(parseFloat(timeFinal));
}