const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports.config = {
    name: "dalle3",
    version: "1.0",
    Credits: "Cock,dipto| credit change korla bts💩🐤",
    countDown: 15,
    hasPermssion: 0,
    Description: "Generate images by Dalle3",
    commandCategory: "Bing",
  },

module.exports.run = async function ({ api, message, args , event }) {
    try {
      const dipto = args.join(" ");

      const w = await api.sendMessage("Be Pecient...Image Is Generating - ⚠️", event.threadID);

      const data2 = {
        prompt: dipto, cookie:"1CfkXOS4DwtatSELdKF1qQ0LY0yycCRV8rzUOk6lPj5he9jKF2UaxT_J5vrMbO5WPyAO5SXwCT4rh-keRB0EksCx7y251r_XiWI2ieIrOPqQNWiUpO8FpL0LBSpaUzkqoW8HKTGHFik9Vb7kyIbG4lL-ULU5_LiPBVOucTXfWqzbL2NkEI59CO1CrACVTDBeRBqVHhFmmt-06f9N7Hh_-RQ"
      };

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post('https://project-dallee3.onrender.com/dalle', data2, config);

      if (response.status === 200) {
        const imageUrls = response.data.image_urls.filter(url => !url.endsWith('.svg'));
        const imgData = [];

        for (let i = 0; i < imageUrls.length; i++) {
          const imgResponse = await axios.get(imageUrls[i], { responseType: 'arraybuffer' });
          const imgPath = path.join(__dirname, 'cache','dalle3', `${i + 1}.jpg`);
          await fs.outputFile(imgPath, imgResponse.data);
          imgData.push(fs.createReadStream(imgPath));
        }

      //  await api.unsendMessage(w.messageID);

        await api.sendMessage({
          body: `Generated - ✅`,
          attachment: imgData
        },event.threadID);
      } else {
        throw new Error("Non-200 status code received");
      }
    } catch (error) {
      return api.sendMessage("Unexpected Error - ⚠️",event.threadID);
    }
}