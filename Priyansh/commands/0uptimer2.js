const axios = require('axios');

module.exports.config = {
  name: "24",
  version: "1.8.7",
  hasPermission: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  usePrefix: false,
  description: "( Keep a URL alive using an uptime service )",
  commandCategory: "Noprefix",
  usages: "( link )",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  const message = event.body;
  const command = "24";

  if (message.indexOf(command) === 0 || message.indexOf(command.charAt(0).toUpperCase() + command.slice(1)) === 0) {
    const args = message.split(/\s+/);
    args.shift();

    if (args.length === 1) {
      const text1 = args[0];

      api.sendMessage(`🕟 | 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...`, event.threadID);

      try {
        const response = await axios.get(`https://apipremium-thanhali.thanhali.repl.co/uptimerobot/create?apikey=ThanhAliVip_1234567890&url=${text1}`);

        if (response.data) {
          const token = response.data.status;
          api.sendMessage(`Your '${text1}' Is Add To Uptimer Server Successfully..🚸🥀\n \n Credit➡️ 𝐀𝐒𝐈𝐅 𝐱𝟔𝟗 🥷🥀\n\n${token}`, event.threadID);
          console.log("✨ 𝗁𝖺𝗌 𝖻𝖾𝖾𝗇 𝗋𝖾𝖼𝖾𝗂𝗏𝖾𝖽:", token);
        } else {
          api.sendMessage(`🔴 𝖤𝗋𝗋𝗈𝗋: ${response.data.message}`, event.threadID);
        }
      } catch (error) {
        console.error("🔴 𝖤𝗋𝗋𝗈𝗋 𝖿𝖾𝗍𝖼𝗁𝗂𝗇𝗀", error);
        api.sendMessage("🔴 𝖤𝗋𝗋𝗈𝗋 𝖿𝖾𝗍𝖼𝗁𝗂𝗇𝗀, 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇 𝗅𝖺𝗍𝖾𝗋.", event.threadID);
      }
    } else {
      api.sendMessage("✨ 𝖴𝗌𝖺𝗀𝖾: 24 [ link ]", event.threadID);
    }
  }
};

module.exports.run = async function ({ api, event }) {

};