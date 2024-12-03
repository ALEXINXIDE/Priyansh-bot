module.exports.config = {
	name: "ping",
	version: "0.0.3",
	hasPermssion: 2,
	credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
	description: "Tag all members",
	commandCategory: "Admin - Tools",
	usages: "[Text]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args, Threads }) {
	try {
		var all = (await Threads.getInfo(event.threadID)).participantIDs;
    all.splice(all.indexOf(api.getCurrentUserID()), 1);
	  all.splice(all.indexOf(event.senderID), 1);
		var body = (args.length != 0) ? args.join(" ") : "@everyone", mentions = [], index = 0;
		
    for (let i = 0; i < all.length; i++) {
		    if (i == body.length) body += body.charAt(body.length - 1);
		    mentions.push({
		  	  tag: body[i],
		  	  id: all[i],
		  	  fromIndex: i - 1
		    });
	    }

		return api.sendMessage({ body: `‎${body}`, mentions }, event.threadID, event.messageID);

	}
	catch (e) { return console.log(e); }
}