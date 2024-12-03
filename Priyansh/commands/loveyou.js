const fs = require("fs");
module.exports.config = {
	name: "love you",
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
	if(react.includes("Love") ||
     react.includes("I love") || react.includes("lOve") || react.includes("LoVe") ||
react.includes("love") ||
react.includes("Love")) {
		var msg = {
				body: `𝓛𝓸𝓿𝓮 𝓨𝓸𝓾 𝓣𝓸𝓸 𝓢𝔀𝓮𝓮𝓽 𝓱𝓮𝓪𝓻𝓽 `,attachment: fs.createReadStream(__dirname + `/noprefix/lv.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

} 