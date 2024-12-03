module.exports.config = {
	name: "help4",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗", //don't change the credits please
	description: "help",
	commandCategory: "System",
	cooldowns: 1,
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
var link = ["https://i.postimg.cc/XY749N3c/received-190750053862067.jpg",];
  
var callback = () => api.sendMessage({body:`✅ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 ✅
_______________________________________\n\n» / - Islamic Caption
» ai - Ask Anything
» art - Reply Image
» age - Enter Birthday
» adduser - Write UID
» adminlist - Group Admin List
» advice - Random Advice
» andrea - Write Anything
» brazil - Neymar Photo
» botinfo - Admin & Bot Info
» cvaudio - Reply Video
» count - Get Command Details
» couple -  Mention Anyone
» chor - Mention Anyone
» delete - Mention Anyone
» elon - Write Anything
» einstein - Write Anything
» elements - Search Element
» font - Name Style
» fire - Mention Anyone
» face - Mention Anyone
» fact - Write Anything
» fb audio / video - FB Video Link
» fbvideo - FB Reels / Video Link
» fblite - Write Anything
» fbcover - Make Cover Photo
» groupemoji - Emoji
» groupimage - Reply Photo
» groupname - Write Name
» game - Mention Anyone
» getlink - Reply Anything
» google - Search Anything
» hack - Mention Anyone
» hitler - Mention Anyone
» hug - Mention Anyone
» hadis - Random Hadis
» imagine - [ Name - Number ]
» info - All Info Commands
» ip - Write IP Address
» kader - Write Anything
» kick - Mention Anyone
» kiss - Mention Anyone
» love - Mention Anyone
» lexi - Write Anything
» media - Link [ jpeg, jpg, png, mp4, mp3, pdf, raw, docx, txt, gif, wav - file ]
» meme - Random Meme
» messi - Messi Random Photo
» mark - Write Anything
» markcmt - Write Anything
» mix -  Emoji | Emoji 
» math - Calculator
» marry - Mention Anyone
» married - Mention Anyone
» mia - Write Anything
» nickname - [ Mention ] [ Name ]
» note - [ add / remove / all ] [ Note ]
» olivia - Chat Bot
» obama - Write Anything
» pp - Profile Photo
» pin - [ Name - Number ]
» photoxy - [ 1-30 + Name ]
» photoxy2 - [ Number + Name ]
» profile - User Information
» poutine - Mention Anyone
» phub - Write Anything
» rip - Mention Anyone
» rmbg - Reply Photo
» random passgen - Generate Password
» quiz - Random Quiz
» quake - Mention Anyone
» qr - Text
» ss - Link
» simpson - Write Anything
» song - Song Name / Lyrics
» song2 - Song Name / Lyrics
» sefuda - Write Anything
» shairi - Random Shairi Video
» speedtest - Network Speed Test
» stonks - Mention Anyone
» student - Write Anything
» sunny - Write Anything
» spam - Spam Message
» tempmail - Get Using Details
» toilet - Mention Anyone
» trump - Write Anything
» trans - Language Short Name
» tiktok - Video Link
» unsend - Unsend Bot Message
» uid - Mention Anyone
» uptime - Bot Uptime
» video - Search / YT Video Link
» vb - [ Text ] ~ Bangla Voice 
» ve - [ Text ] ~ English Voice
» wallpaper - Search Wallpaper
» weather - Location
» xavier - Write Anything
» yes - Write Anything
» you - Mention Anyone
» zuck - Write Anything
✇━━━━━━━━━━━━━━━━━━━✇\n➠ BOT PREFIX : [ ${global.config.PREFIX} ]`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };