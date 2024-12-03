kmodule.exports.config = {
  name: "testing",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "Restart the bot",
  commandCategory: "Admin",
  cooldowns: 5,
  dependencies: {
    "eval": ""
  }
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    const eval = require("eval");
    return api.sendMessage("*Success rebooting*", event.threadID, () => eval("module.exports = process.exit(1)", true), event.messageID);

   }
