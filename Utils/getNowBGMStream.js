const ytdl = require('ytdl-core');
const moment = require('moment');
const { BGM: BGMs } = require('../config');

module.exports = function (name) {
	const BGM = BGMs.find(({channelNameStartsWith}) => name.startsWith(channelNameStartsWith))
	return ytdl(BGM.BGMURLs[moment().hours()].URL,{
		// range: {
		// 	start: moment().minutes() * 60 + moment().seconds()
		// },
		filter: 'audioonly'
	})
}