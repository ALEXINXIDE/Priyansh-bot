const axios = require("axios");

module.exports.config = {
  name: "ai",
  version: "1.0.0",
  hasPermission: 0, 
  credits: "JV Barcenas & cyril", // Converted and modified to mirai by cyril //dont change credits or I spank your ass
  description: "Get Answer By AI",
  commandCategory: "Fun",
  usePrefix: "False - ❎",
  usages: `Ai - Ask Anything\n\n» Example :\nAi what is the meaning of "JUNAID" name?`,
  cooldowns: 5,
};

module.exports.handleEvent = async function ({ api, event }) {
if (!(event.body.indexOf("Ai") === 0 || event.body.indexOf("ai") === 0)) return;
     const args = event.body.split(/\s+/);;
    args.shift();
  try {
    const prompt = event.body.trim();
    const { threadID, messageID } = event;

    if (!args[0]) {
      api.sendMessage(
        "» Please Write Something What You Wanted To Know 🤗\n\nExample :\nai what is the meaning of Junaid name ?",
        threadID, 
        messageID 
      );
      return;
    }

    if (prompt) {
      await api.sendMessage("🔍 Ai Is Writing Your Answer - ✅\n\nPlease Wait Few Seconds - ⚠️", threadID);

      const response = await axios.get(`https://chatgayfeyti.archashura.repl.co?gpt=${encodeURIComponent(prompt)}`);

      if (response.status === 200 && response.data && response.data.content) {
        const messageText = response.data.content.trim();
        await api.sendMessage(messageText, threadID);
        console.log('Sent answer as a reply to the user');
      } else {
        throw new Error('Invalid or missing response from API');
      }
    }
  } catch (error) {
    console.error(`Failed To Get An Answer : ${error.message}`);
    api.sendMessage(
      `${error.message}.\nSomething Went Wrong - ⚠️\n\nPlease Try Again Later - ✅`,
      threadID
    );
  }
};
module.exports.run = async function ({ api, event }) {
};