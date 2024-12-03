module.exports.config = {
  name: "info",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Gaming Boy",
  description: "All Info Command List",
    commandCategory: "Info",
  usePrefix: "True - ✅",
  usages: `${global.config.PREFIX}info`,
  cooldowns: 5,
  dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`ℹ️ This Is The Info List ✅\n\n» ${global.config.PREFIX}botinfo\n» ${global.config.PREFIX}group info\n» ${global.config.PREFIX}ownerinfo\n» ${global.config.PREFIX}profile\n» ${global.config.PREFIX}stickerinfo\n» ${global.config.PREFIX}uidinfo`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.imgur.com/d4zLX9L.gif`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };