const fs = require("fs");
module.exports.config = {
	name: "Asslam o alaikum",
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
	if(react.includes("Salam") ||
     react.includes("Asslam") || react.includes("asslam") || react.includes("Assalam") ||
react.includes("Asalam") ||
react.includes("alaikum")) {
		var msg = {
				body: `𝓦𝓪𝓵𝓲𝓴𝓾𝓶 𝓢𝓪𝓵𝓵𝓪𝓶 𝓙𝓪𝓷𝓾 ❤️`,attachment: fs.createReadStream(__dirname + `/noprefix/salam.png`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }