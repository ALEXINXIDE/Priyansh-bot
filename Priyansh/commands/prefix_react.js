const fs = require("fs");
module.exports.config = {
	name: "prefix_react",
  version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗", 
	description: "Prefix React",
	commandCategory: "Extra - Files",
	usages: "[ Prefix ]",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("/")==0 || event.body.indexOf("\n")==0) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {
  }