module.exports.config = {
    name: "Amir",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "KENLIEPLAYS",
    description: "Talk to Khan",
    commandCategory: "Fun",
    usages: "Khan [ask]",
    usePrefix: false,
    cooldowns: 2,
};

module.exports.handleEvent = async function ({ api, event }) {
if (!(event.body.indexOf("amir") === 0 || event.body.indexOf("amir") === 0)) return;
     const args = event.body.split(/\s+/);;
    args.shift();
  
    const axios = require("axios");
    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
    mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage("Bolo Jan 😘", tid, mid);
    try {
      api.setMessageReaction("👀", event.messageID, (err) => {}, true);
        const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=bn&message=${content}&filter=true`);
        const respond = res.data.success;
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
        api.sendMessage("An error occurred while fetching the data.", tid, mid);
    }
};
module.exports.run = async function ({ api, event }) {
};