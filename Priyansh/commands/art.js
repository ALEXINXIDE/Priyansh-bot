module.exports.config = {
  name: "art",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "islamick chat",
  description: "Art Filter",
  commandCategory: "Image Creating Tools",
  usePrefix: "True - ✅",
  usages: `${global.config.PREFIX}art - Reply Image`,
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const fs = require('fs-extra');
  let pathie = __dirname + `/cache/animefy.jpg`;
  const { threadID, messageID } = event;

  var james = event.messageReply.attachments[0].url || args.join(" ");

 try {
    const lim = await axios.get(`https://animeify.shinoyama.repl.co/convert-to-anime?imageUrl=${encodeURIComponent(james)}`);
     const image = lim.data.urls[1];

     const img = (await axios.get(`https://www.drawever.com${image}`, { responseType: "arraybuffer"})).data;

     fs.writeFileSync(pathie, Buffer.from(img, 'utf-8'));

     api.sendMessage({
       body: "✨ This is Your Image ✌🏻",
       attachment: fs.createReadStream(pathie)
     }, threadID, () => fs.unlinkSync(pathie), messageID);



  } catch (e) {
  api.sendMessage(`An Error Has Been Occurred - ⚠️\n\nPlease Try Again - 😐`, threadID, messageID);
  };

};