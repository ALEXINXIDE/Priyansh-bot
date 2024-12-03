const API = "https://all-in-one-api-by-faheem.replit.app/api/ephoto/cloud?text="
module.exports.config = {
  name: "cloudtext",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MR ARYAN",
  description: "logo",
  commandCategory: "text maker",
  usages: "...",
  cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
if (this.config.credits != "MR ARYAN") {
        console.log("[ WARNING ] » Change credited Fuck You By ARYAN:p  :) "+ global.config.BOTNAME + ' credits modules "' + this.config.name + '"');
        return api.sendMessage("× [ WARNING ] × LOL CREDIT CHANGED FUCK YOUR SISTER BY ARYAN 😍💞" , event.threadID, event.messageID);
}
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage(" 𝓦𝓪𝓲𝓽 𝓜𝓮𝓻𝓲 𝓙𝓪𝓪𝓷 🤭🍫", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: "𝓨𝓮 𝓛𝓸 𝓑𝓪𝓫𝔂 𝓐𝓹𝓴𝓪 𝓛𝓸𝓰𝓸🤭💞🌿", attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {


            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID, event.messageID);
})
};