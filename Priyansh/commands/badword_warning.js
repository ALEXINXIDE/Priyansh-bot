const path = require('path');
const fs = require('fs');

let badWordsActive = {}, bannedWords = {}, warnings = {};
const saveFile = path.join(__dirname, 'badwordsActive.json');
if (fs.existsSync(saveFile)) {
  const words = JSON.parse(fs.readFileSync(saveFile, "utf8"));
  badWordsActive = words;
}

const loadBannedWords = threadID => {
  const wordFile = path.join(__dirname, `../commands/cache/badwords.json`);
  if (fs.existsSync(wordFile)) {
    const words = JSON.parse(fs.readFileSync(wordFile, "utf8"));
    bannedWords[threadID] = words;
  } else {
    bannedWords[threadID] = [];
  }
};

module.exports.config = {
  name: "badwords",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Jonell Magallanes",//Fixed By Jonell Magallanes kaya kung mag change credit ka bahala kana sa buhay mo umay par :<
  description: "Use Bad Word To Get Warning",
  commandCategory: "Admin - Tools",
  usePrefix: "True - ✅",
  usages: `${global.config.PREFIX}badwords add / remove [ Word ]\n${global.config.PREFIX}badwords list\n${global.config.PREFIX}badwords on / off\n${global.config.PREFIX}badwords unwarn [ UID ]`,
  cooldowns: 5,
};

module.exports.handleEvent = async ({ api, event }) => {
  const { threadID, messageID, senderID, body } = event;
  loadBannedWords(threadID);
  if (!badWordsActive[threadID]) return;
  
  const messageContent = body.toLowerCase();
  const hasBannedWord = bannedWords[threadID].some(bannedWord => messageContent.includes(bannedWord.toLowerCase()));

  if (hasBannedWord) {
    const threadInfo = await api.getThreadInfo(threadID);
    if (!threadInfo.adminIDs.some(item => item.id === api.getCurrentUserID())) return;

    warnings[senderID] = (warnings[senderID] || 0) + 1;
    if (warnings[senderID] === 4) {
      api.sendMessage("You have Received 3 Warnings - ⚠️\n\nYou Are Kicked From The Group - ⚠️", threadID, messageID);
      api.removeUserFromGroup(senderID, threadID);
    } else {
      api.sendMessage(`⚠️ - 𝗪𝗔𝗥𝗡𝗜𝗡𝗚𝗦 - ⚠️\n\nYour Message Has Been Detected To Contain The Offensive Word [ - ${messageContent} - ] If You Continuously Use This Such Language, You Will Be Automatically Kicked - ⚠️`, threadID, messageID);
    }
  }
};

module.exports.run = async function({ api, event, args }) {
  const { threadID, messageID } = event;
  if (!args[0]) return api.sendMessage("💣 - 𝗨𝘀𝗶𝗻𝗴 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 - 💣\n\n» badword on / off\n» badword add / remove [ Word ]\n» badword list", threadID, messageID);

  const isAdmin = (await api.getThreadInfo(threadID)).adminIDs.some(idInfo => idInfo.id === api.getCurrentUserID());
  if (!isAdmin) return api.sendMessage("🛡️ | Bot's Needs Admin Permission For Using This Command - ⚠️", threadID, messageID);

  const action = args[0];
  const word = args.slice(1).join(' ');
  loadBannedWords(threadID);

  switch (action) {
    case 'add':
      bannedWords[threadID].push(word);
      fs.writeFileSync(path.join(__dirname, `../commands/cache/badwords.json`), JSON.stringify(bannedWords[threadID]), "utf8");
      return api.sendMessage(`This [ ${word} ] Word Successfully Added To The Bad Words List - ✅`, threadID);
    case 'remove':
      const index = bannedWords[threadID].indexOf(word);
      if (index !== -1) {
        bannedWords[threadID].splice(index, 1);
        fs.writeFileSync(path.join(__dirname, `../commands/cache/badwords.json`), JSON.stringify(bannedWords[threadID]), "utf8");
        return api.sendMessage(`This [ ${word} ] Word Successfully Removed To The Bad Words List - ✅`, threadID);
      } else {
        return api.sendMessage(`Bad [ ${word} ] Word Not Found - ❌`, threadID);
      }
    case 'list':
      return api.sendMessage(`👿 Bad Word List 👿\n\n${bannedWords[threadID].join(' | ')}`, threadID);
    case 'on':
      badWordsActive[threadID] = true;
      fs.writeFileSync(saveFile, JSON.stringify(badWordsActive), "utf8");
      return api.sendMessage(`Bad Word Mode Has Been Activated On This Group - ☢️ ✅`, threadID);
    case 'off':
      badWordsActive[threadID] = false;
      fs.writeFileSync(saveFile, JSON.stringify(badWordsActive), "utf8");
      return api.sendMessage(`Bad Word Mode Has Been De-Activated On This Group - ⚠️ ❌`, threadID);
    case 'unwarn':
      const userID = args[1];
      if (!userID) return api.sendMessage("Missing User ID For Un-Warn The Member - ⚠️", threadID);

      warnings[userID] = 0;
      return api.sendMessage(`User Has Been Un-Warned For ID : ${userID}`, threadID);
    default: 
      return api.sendMessage("Something Went Wrong - ⚠️", threadID);
  }
};