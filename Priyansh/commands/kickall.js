module.exports.config = {
    name: "kickall",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
    description: "Remove all group members.",
    commandCategory: "Owner",
    usages: "",
    cooldowns: 5
};
module.exports.run = async function({ api, event, getText,args }) {
  const permission = global.config.GOD;
  if (!permission.includes(event.senderID)) return api.sendMessage(`⚠️You don't have permission to use this command!`, event.threadID, event.messageID);
  const { participantIDs } = await api.getThreadInfo(event.threadID)
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const botID = api.getCurrentUserID();
  const listUserID = participantIDs.filter(ID => ID != botID);
  return api.getThreadInfo(event.threadID, (err, info) => {
    if (err) return api.sendMessage("» An error occurred.", event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID()))
      return api.sendMessage(`» Need group admin rights.\nPlease add and try again.`, event.threadID, event.messageID);
    if (info.adminIDs.some(item => item.id == event.senderID)) {
      setTimeout(function() { api.removeUserFromGroup(botID, event.threadID) }, 300000);
      return api.sendMessage(`» সমস্ত সদস্য মুছে ফেলা শুরু করুন। বিদায় সবাই..`, event.threadID, async (error, info) => {
        for (let id in listUserID) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          api.removeUserFromGroup(listUserID[id], event.threadID)
        }
      })
    } else return api.sendMessage('» Only Bot Owner can use this command.', event.threadID, event.messageID);
  })
}