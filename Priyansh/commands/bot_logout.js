module.exports.config = {
    name: "logout",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "HĐGN",
    description: "Logout ACC Bot",
    commandCategory: "BOT ADMIN",
    usages: "",
    cooldowns: 0
};

module.exports.run = async function({ api, event })
{
    const god = ["100092192215832", "100009723549905"];
  if (!god.includes(event.senderID)) return api.sendMessage(`⚠️You don't have permission to use this command!`, event.threadID, event.messageID);
api.sendMessage("BOT Logout Successful ✅",event.threadID,event.messageID)
api.logout()
}