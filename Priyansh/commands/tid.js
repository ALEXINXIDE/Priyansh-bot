module.exports.config = {
	name: "tid",	
  version: "1.0.0", 
	hasPermssion: 0,
	credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
	description: "Get box id", 
	commandCategory: "Group",
	usages: "tid",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage("🔰TID: "+event.threadID, event.threadID, event.messageID);
};