module.exports.config = {
  name: "genimg",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "( 𝙈𝙞𝙙𝙅𝙤𝙪𝙧𝙣𝙚𝙮 )",
  usePrefix: true,
  commandCategory: "Image",
  usages: "( Generate Images from MidJourney )",
  cooldowns: 2,
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const fs = require('fs-extra');

  let { threadID, messageID } = event;
  let query = args.join(" ");

  if (!query) return api.sendMessage("🐰 𝖯𝗅𝖾𝖺𝗌𝖾 𝗉𝗋𝗈𝗏𝗂𝖽𝖾 𝖺 𝗍𝖾𝗑𝗍 𝗍𝗈 𝖼𝗋𝖾𝖺𝗍𝖾 𝗂𝗆𝖺𝗀𝗂𝗇𝖾 𝗂𝗆𝖺𝗀𝖾.", threadID, messageID);

  let path = __dirname + `/cache/polination.png`;

  try {
    const response = await axios.get(`https://arjhil-midjourney.arjhilbard.repl.co/generate-image?prompt=${encodeURIComponent(query)}`);
    const images = response.data.result;

    api.sendMessage("🌈 | 𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗶𝗻𝗴 𝘆𝗼𝘂𝗿 𝗶𝗺𝗮𝗴𝗲🪄………", threadID, messageID);

    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      const imageUrl = images[randomIndex];

      const imageResponse = await axios.get(imageUrl, { responseType: "arraybuffer" });
      const imageBuffer = Buffer.from(imageResponse.data, "binary");

      fs.writeFileSync(path, imageBuffer);

      api.sendMessage({
        body: "[] 𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲 𝗦𝘂𝗰𝗰𝗲𝘀𝘀 🍭 []\n\n𝖣𝗈𝗇'𝗍 𝖿𝗈𝗋𝗀𝖾𝗍 𝗍𝗈 𝖿𝗈𝗅𝗅𝗈𝗐\nhttps://www.facebook.com/4S1F.403",
        attachment: fs.createReadStream(path)
      }, threadID, () => fs.unlinkSync(path), messageID);
    } else {
      await api.sendMessage("😿 𝖭𝗈 𝖨𝗆𝖺𝗀𝖾 𝖿𝗈𝗎𝗇𝖽", threadID, messageID);
    }
  } catch (error) {
    await api.sendMessage("😿 𝖤𝗋𝗋𝗈𝗋, 𝖶𝗁𝗂𝗅𝖾 𝖿𝖾𝗍𝖼𝗁𝗂𝗇𝗀 𝗂𝗆𝖺𝗀𝖾.", threadID, messageID);
  }
};
