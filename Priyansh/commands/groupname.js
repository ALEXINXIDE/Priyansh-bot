module.exports.config = {
	name: "groupname",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Rename your group",
	commandCategory: "Group - Tools", 
	usages: "groupname [name]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var name = args.join(" ")
	if (!name) api.sendMessage("Please Entered Group Name - ⚠️", event.threadID, event.messageID)
	else api.setTitle(name, event.threadID, () => api.sendMessage(`🔨 BOT Successfully Changed The Group Name 😇\n\nNew Group Name : ${name}`, event.threadID, event.messageID));
}
