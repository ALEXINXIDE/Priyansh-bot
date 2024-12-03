module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "GAMING BOY",
    description: "",
    commandCategory: "Extra - Files",
    usages: "",
    cooldowns: 0
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
  const threadInfo = await api.getThreadInfo(event.threadID)
  let sex = threadInfo.messageCount;
    const chalk = require('chalk');
     const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:mm:ss");
  const thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["console"] !== "undefined" && thread["console"] == true) return;
  if (event.senderID == global.data.botID) return;
  var nameBox = global.data.threadInfo.get(event.threadID).threadName || "Name Does Not Exist";
  let threadMem = threadInfo.participantIDs.length;
  var nameUser = await Users.getNameUser(event.senderID)
    var msg = event.body||"Photo/Video/Special Characters";
    var job = ["00FFFF", "7FFFD4", "0000FF", "8A2BE2", "7FFF00"];
    var job1 = ["FF7F50","008B8B","006400","FF8C00","2F4F4F"];
    var job2 = ["FF1493","FF00FF","FFD700","808080","4B0082"];
    var job3 = ["FFFFF0","90EE90","FF0000","B0C4DE","008000"];
    var job4 = ["00BFFF","191970","FFFF33","FF99FF","F58220"];
    var job5 = ["FFFFFF","651FFF","33691E","616161","FF5722"];
    var job6 = ["66BB6A","EF5350","FF8A80","CE93D8","FF5722"];
    var random = 
job[Math.floor(Math.random() * job.length)]      
   var random1 = job1[Math.floor(Math.random() * job1.length)]
   var random2 = job2[Math.floor(Math.random() * job2.length)]
   var random3 = job3[Math.floor(Math.random() * job3.length)]
   var random4 = job4[Math.floor(Math.random() * job4.length)]
   var random5 = job5[Math.floor(Math.random() * job5.length)]
   var random6 = job6[Math.floor(Math.random() * job6.length)]
    console.log(chalk.hex("#" + random)(`\n◆━━━━━━━◆━━━━━━◆ ╰‿╯ ◆━━━━━━◆━━━━━━━━◆`) + "\n" + chalk.hex("#" + random1)(`[🌸] » Group Name : ${nameBox}\n[🔰] » Group UID : ${threadID}`) + "\n" + chalk.hex("#" + random2)(`[👥] » Total Member : ${threadMem}\n[🌟] » Total Message : ${sex}`) + "\n" + chalk.hex("#" + random3)(`[👤] » Name : ${nameUser}\n[🆔] » UID : ${event.senderID}`) + "\n" + chalk.hex("#" + random4)(`[💬] » Message : ${msg}`) + `\n` + chalk.hex("#" + random5)(`[🕒] » Time : ${time}`) + "\n" + chalk.hex("#" + random6)(`◆━━━━━━━◆━━━━━━◆ ╰‿╯ ◆━━━━━━◆━━━━━━━━◆`)); 
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
  
  }