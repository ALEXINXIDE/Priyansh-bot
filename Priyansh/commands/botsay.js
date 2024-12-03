module.exports.config = {
	name: "botsay",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "John Lester",
	description: "Bot Saying",
	commandCategory: "Tools",
	usages: "[text/message/chat]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
	if (!say) api.sendMessage("Please enter a message", event.threadID, event.messageID)
	else api.sendMessage(`${say}`, event.threadID, event.messageID);
}
