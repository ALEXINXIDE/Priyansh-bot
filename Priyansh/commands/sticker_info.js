module.exports.config = {
  name: "stickerinfo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
  description: "Get Sticker Info",
  commandCategory: "Info",
  usages: `${global.config.PREFIX}stickerinfo - Reply Sticker`,
  cooldowns: 5   
}

module.exports.run = async function ({ api, event, args }) {
  if (event.type == "message_reply") {
    if (event.messageReply.attachments[0].type == "sticker") {
      return api.sendMessage({
        body: `Sticker ID : ${event.messageReply.attachments[0].ID}\n\nCaption : ${event.messageReply.attachments[0].description}`
      }, event.threadID)
    }
    else return api.sendMessage(`😀 Sticker Command Details 🫡\n\n${global.config.PREFIX}stickerinfo - Reply Sticker ~ Sticker Info - ❌\n\n${global.config.PREFIX}stickerinfo [ Sticker ID ] - Get Sticker`, event.threadID);
  }
  else if (args[0]) {
    return api.sendMessage({body:`Here Is The Sticker`, sticker: args[0]}, event.threadID);
  }
  else return api.sendMessage(`😀 Sticker Command Using Details 🫡\n━━━━━━━━━━━━━━━━━━━━━━\n${global.config.PREFIX}stickerinfo - Reply Sticker ~ [ Sticker Info ]\n\n${global.config.PREFIX}stickerinfo [ Sticker ID ] - Get Sticker`, event.threadID);
}