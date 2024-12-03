module.exports.config = {
  name: "ai2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "KENLIEPLAYS",
  description: "Get Answer By AI",
  commandCategory: "Fun",
  usePrefix: "False - ❎",
  usages: `Ai2 - Ask Anything\n\n» Example :\nAi2 what is the meaning of "JUNAID" name?`,
  cooldowns: 2,
};

module.exports.handleEvent = async function ({ api, event }) {
if (!(event.body.indexOf("Ai2") === 0 || event.body.indexOf("ai2") === 0)) return;
     const args = event.body.split(/\s+/);;
    args.shift();
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("Please write something what you wanted to Know 🤗", tid, mid);
    try {
        const res = await axios.get(`https://api.kenliejugarap.com/gptgo/?text=${content}`);
        const respond = res.data.response;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("An error occurred while fetching the data - - ⚠️", tid, mid);
  }
};
module.exports.run = async function ({ api, event }) {
};