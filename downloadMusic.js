const ytdl = require('ytdl-core');
const fs = require('fs');
const { BGM } = require('./config');

for (const conf of BGM) {
	for(const key in conf.BGMURLs) {
		ytdl(conf.BGMURLs[key].URL,{
			filter: 'audioonly',
			format: 'mp3'
		}).pipe(fs.createWriteStream(`music/${conf.channelNameStartsWith}/${key}.mp3`));
	}
}