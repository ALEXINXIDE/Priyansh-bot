module.exports.config = {
	name: "usermsg",
	version: "1.0.7",
	hasPermssion: 1,
	credits: "manhG",
	description: "sendmsg [uid] [text]",
	commandCategory: "Bot Admin",
	usages: "ID [Text]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
 //if (!args[0]) return api.sendMessage(`${api.getthreadID()}`, event.threadID);
    
	var idbox = args[0];
    var reason = args.slice(1);
	//let threadID = await api.getThreadID();
	if (args.length == 0) api.sendMessage("Something Went Wrong - ⚠️\n\nUse : /usermsg [ UID ] [ Message ]\n\nExample : /usermsg 100045188618507 Hi", event.threadID, event.messageID);
	
	else if(reason == "")api.sendMessage("Something Went Wrong - ⚠️\n\nUse : /usermsg [ UID ] [ Message ]\n\nExample : /usermsg 100045188618507 Hi", event.threadID, event.messageID);
	
	else
		api.sendMessage("✨ Message From Admin 👤\n\n" + reason.join(" "), idbox, () =>
			api.sendMessage(`${api.getCurrentUserID()}`, () =>
				api.sendMessage("✨ Your Message Successfully Sending To The User - ✅\n\nMessage : " + reason.join(" "), event.threadID)));
}
