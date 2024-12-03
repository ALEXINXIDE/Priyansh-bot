const axios = require('axios');

module.exports.config = {
  name: "pastebin",
  version: "1.0.",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  usePrefix: true,
  description: "Paste your code",
  commandCategory: "Other",
  usages: "/pastebin [your code]",
  cooldowns: 2,
};
module.exports.run = async ({ api, event, args }) => {
    let { threadID, messageID } = event;
    let code= args[0];
  if(!code) {
api.sendMessage(`missing input!\nusage: ${global.config.PREFIX}pastebin [your code]`, threadID, messageID);
return;
  }
api.sendMessage("PLEASE WAIT YOUR LINK🔗🕜", threadID, messageID);

    try {
        const b = await axios.get(`https://sensui-useless-apis.codersensui.repl.co/api/tools/pastebin?text=${encodeURI(code)}`);
        const a = b.data.url;

      api.sendMessage(`HERE'S YOUR PASTEBIN LINK🔗: \n${a}`, threadID, messageID);

    } catch (b) {
        return api.sendMessage(`loveyou ${b}`, threadID, messageID);
    };

};