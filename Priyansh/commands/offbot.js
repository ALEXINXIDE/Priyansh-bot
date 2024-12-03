module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "HTHB",
	description: "Off Bot",
	commandCategory: "Bot Admin",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("Bye Bye 🫠👋\n\ Allah hafiz mily hain fir",event.threadID, () =>process.exit(0))
