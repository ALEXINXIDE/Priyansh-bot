module.exports.config = {
  name: "daroodpak",
  version: "1.0.0",
  hasPermision: 0,
  credit: "🌿💞🍫𝓐𝓑𝓪𝓫𝓾 𝓐𝓻𝔂𝓪𝓷 𝓒𝓻𝓾𝓼𝓱 𝓙𝓪𝓲𝓷 🌿💞🍫",
  description: "darood",
  commandCategory: "random-img",
  cooldowns: 0,
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
const axios = require("axios")
const request = require("request")
const fs = require("fs-extra")
var link = ["https://i.imgur.com/orr2pO7.mp4" ,];
var alikoja = [`𝘿𝘼𝙍𝙊𝙊𝘿 𝙎𝙃𝘼𝙍𝙀𝙀𝙁\n\n\nﺑِﺴْــــــــــــــــﻢِ ﺍﷲِﺍﻟﺮَّﺣْﻤَﻦِ ﺍلرَّﺣِﻴْﻢ\n\nاَللّٰھُمَّ صَلِّ عَلٰی مُحَمَّدٍ وَّ عَلٰیٓ اٰل ِمُحَمَّدٍ کَمَا صَلَّیْتَ عَلٰی اِبْرَاھِیْمَ وَعَلٰیٓ اٰلِ اِبْرَاھِیْمَ اِنَّکَ حَمِیْدٌمَّجِید\n\nاَللّٰھُمَّ بَارِکْ عَلٰی مُحَمَّدٍ وَّ عَلٰیٓ اٰل ِمُحَمَّدٍ کَمَا بَارَکْتَ عَلٰی اِبْرَاھِیْمَ وَعَلٰیٓ اٰلِ اِبْرَاھِیْمَ اِنَّکَ حَمِیْد مَّجِید...🍂🌹 \n\n(𝘾𝙍𝘼𝘿𝙄𝙏 :-🌿💞🍫𝓐𝓑𝓪𝓫𝓾 𝓐𝓻𝔂𝓪𝓷 𝓒𝓻𝓾𝓼𝓱 𝓙𝓪𝓲𝓷 🌿💞🍫 )`];
var juswa1 = alikoja[Math.floor(Math.random() * alikoja.length)];
var callback = () => api.sendMessage({body:`${juswa1}`,attachment: fs.createReadStream(__dirname + "/cache/zac.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/zac.mp4")); 
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/zac.mp4")).on("close",() => callback());
 };