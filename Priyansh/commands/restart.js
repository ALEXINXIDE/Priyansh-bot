module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "manhIT",
	description: "Restart Bot",
	commandCategory: "Bot Admin",
	usages: "",
	cooldowns: 5
};
module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`${global.config.BOTNAME} Restarting - ✅\n\nPlease Wait 30 Seconds - ⚠️`, threadID, () => process.exit(1));
}