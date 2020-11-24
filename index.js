require('dotenv').config();
const events = require('./events');
const config = require('./config');
const getNowBGMStream = require('./Utils/getNowBGMStream');

const Eris = require('eris');
const bot  = new Eris.Client(process.env.DISCORD_BOT_TOKEN);

bot.on('ready', events.ready);
bot.on('voiceChannelJoin', (member, channel) => {
	if (!config.BGM.some(({channelNameStartsWith}) => channel.name.startsWith(channelNameStartsWith))) {
		return;
	}
	if (channel.guild.members.get(bot.user.id).voiceState.channelID) {
		return;
	}
	bot.joinVoiceChannel(channel.id).then(connection => {
		if(connection.playing) { // Stop playing if the connection is playing something
			return;
		}
		connection.play(getNowBGMStream(channel.name));
		// connection.on('end', () => {
		// 	connection.play(getNowBGMStream(channel.name));
		// })
	});
});

bot.connect();