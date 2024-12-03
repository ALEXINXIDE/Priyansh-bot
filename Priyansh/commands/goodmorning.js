const fs = require("fs");
module.exports.config = {
	name: "Good Morning",
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
	if(react.includes("Morninig") ||
     react.includes("Gd morning") || react.includes("moRning") || react.includes("MoRning") ||
react.includes("morning") ||
react.includes("Morning")) {
		var msg = {
				body: `𝓖𝓸𝓸𝓭 𝓜𝓸𝓻𝓷𝓲𝓷𝓰 𝓣𝓸 𝓑𝓪𝓫𝔂 ❤️🍫`,attachment: fs.createReadStream(__dirname + `/noprefix/good.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

       }