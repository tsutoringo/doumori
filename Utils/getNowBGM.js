const ytdl = require('ytdl-core');
const moment = require('moment');
const { BGM: BGMs } = require('../config');

module.exports = function (name) {
	const BGM = BGMs.find(({channelNameStartsWith}) => name.startsWith(channelNameStartsWith))
	return `music/${BGM.channelNameStartsWith}/${moment().hours()}.mp3`;
}