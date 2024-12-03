module.exports.config = {
  name: "fbdl",
  version: "1.0.",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "Fb Vid Downloader",
  commandCategory: "Tool",
  usages: "fb video link",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require('axios');
const fs = require('fs-extra');
  let link = args.join(" ");

  if (!args[0]) {
    api.sendMessage("𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐄𝐍𝐃 𝐖𝐈𝐓𝐇 𝐀 𝐅𝐁 𝐕𝐈𝐃𝐄𝐎 𝐋𝐈𝐍𝐊...🌺", event.threadID, event.messageID);
    return;
  }

  api.sendMessage("𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐘𝐎𝐔𝐑 𝐕𝐈𝐃𝐄𝐎, 𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝟖...⌛", event.threadID, event.messageID);

  try {
    let path = __dirname + `/cache/fbVID.mp4`;

    const aa = await axios.get(`https://fbdl.mohammad-rahad.repl.co/fbdl?url=${encodeURI(link)}&apikey=Rahad`);

    const vid = (await axios.get(aa.data.data.url, { responseType: "arraybuffer", }).data);

    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));

    api.sendMessage({
      body: `𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐃 𝐘𝐎𝐔𝐑 𝐕𝐈𝐃𝐄𝐎...✨🌺`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
     api.sendMessage(`${e}`, event.threadID, event.messageID);
  };

};