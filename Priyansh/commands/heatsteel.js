const API = "https://all-in-one-api-by-faheem.replit.app/api/ephoto/heated?text="
module.exports.config = {
	name: "heatsteel",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ARYAN BABU",
	description: " logo",
	commandCategory: "text maker",
	usages: "<text>",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    anup = args.join(" ");
    (event.type == "message_reply") ? anup = event.messageReply.attachments[0].url: anup = args.join(" ");
    const pathsave = __dirname + `/cache/banner2.png`;
    let imageBuffer;
    api.sendMessage("✦𝗣𝗟𝗘𝗔𝗦𝗘 𝗪𝗔𝗜𝗧 𝗕𝗔𝗕𝗬✦", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(anup)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `𝗛𝗘𝗥𝗘'𝗦 𝗬𝗢𝗨𝗥 𝗟𝗢𝗚𝗢 𝓜𝓸𝓭𝓾𝓵𝓮 𝓒𝓸𝓭𝓮 𝓑𝔂 𝓐𝓻𝔂𝓪𝓷 🌿💞`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`An error has occurred ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};