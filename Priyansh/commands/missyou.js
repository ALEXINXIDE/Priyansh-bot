const fs = require("fs");
module.exports.config = {
	name: "miss",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Muhammad Ali", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Miss") ||
     react.includes("I miss") || react.includes("MISS") || react.includes("Yaad") ||
react.includes("miss") ||
react.includes("Miss")) {
		var msg = {
				body: ` 𝓜𝓲𝓼𝓼 𝓨𝓸𝓾 𝓣𝓸𝓸 𝓢𝔀𝓮𝓮𝓽 𝓱𝓮𝓪𝓻𝓽 🤭❤️ `,attachment: fs.createReadStream(__dirname + `/noprefix/mis.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}