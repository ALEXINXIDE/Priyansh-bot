module.exports.config = {
  name: "spotify",
  version: "1.0.2",
  permission: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  usePrefix: false,
  description: "Spotify Music",
  commandCategory: "Music",
  usages: "",
    cooldowns: 5,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const { messageID, threadID } = event;
  if (!args[0]) return api.sendMessage("[ ! ] Input Song Name.", threadID, messageID);
    let np = args.join(" ");
    api.sendMessage(`Searching ${np}`, threadID, messageID);

 try {
    const res = await axios.get(`https://api.nayan-project.repl.co/spotify/track?url=${np}`);
    var data = res.data.url;
    var msg = [];
    let img1 = `${res.data.audio}`;
    let cp = `${res.data.title}`

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.mp3", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.mp3"));

    {
        msg += `✅${cp}`
    }

    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
} catch (err) {
    api.sendMessage(`n`, event.threadID, event.messageID);  
   }
};