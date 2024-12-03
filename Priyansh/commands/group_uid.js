module.exports.config = {
	name: "groupuid",	
  version: "1.0.0", 
	hasPermssion: 0,
	credits: "NTKhang",
	description: "Get box id", 
	commandCategory: "Group - Tools",
	usages: "tid",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage(`» Group Name : ${threadName}\n» Group UID : `+event.threadID, event.threadID, event.messageID);
};