module.exports.config = {
	name: "getlink",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team & Khánh Milo",
	description: "Get Audio / Gif / Photo / Video Downloading Link",
	commandCategory: "Tools",
	usages: `${global.config.PREFIX}getlink`,
	cooldowns: 5,
	dependencies: {
		"tinyurl": ""
	}
};

module.exports.run = async ({ api, event }) => {
	let { messageReply, threadID } = event;
	if (event.type !== "message_reply") return api.sendMessage("» Please Reply Audio / Photo / Gif / Video For Getting Downloading Link - 😒", event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("» Please Reply Audio / Photo / Gif / Video For Getting Downloading Link - 😒", event.threadID, event.messageID);
	else {
            let num = 0
            let msg = `✨ Here's The ${messageReply.attachments.length} Downloading Link ✨\n\n`
          for (var i = 0; i < messageReply.attachments.length; i++) {
				var shortLink = await global.nodemodule["tinyurl"].shorten(messageReply.attachments[i].url);
				num +=1;
        msg += `${num} - ${shortLink}\n`;
    	}
        api.sendMessage(msg,threadID);
        }
}