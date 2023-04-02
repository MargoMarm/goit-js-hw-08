import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
	 
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time"

const setCurrentTime = function(data) {
	localStorage.setItem(CURRENT_TIME, data.seconds)
};

player.on('timeupdate', throttle(setCurrentTime, 1000) );

player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);