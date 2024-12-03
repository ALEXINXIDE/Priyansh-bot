module.exports.config = {
	name: "uidinfo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Rup Kumar",
	description: "Get UID Info",
	commandCategory: "Info",
  usages: `${global.config.PREFIX}uidinfo - Own UID Info\n${global.config.PREFIX}uidinfo [ @Mention ] - Mentioned Person's UID Info`,
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`Your UID : ${event.senderID}\n\nMessenger Link : m.me/${event.senderID}\n\nFacebook Link :\nwww.facebook.com/${event.senderID}`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}'s UID : ${Object.keys(event.mentions)[i]}\n\nMessenger Link : m.me/${Object.keys(event.mentions)[i]}\n\nFacebook Link :\nwww.facebook.com/${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
  }