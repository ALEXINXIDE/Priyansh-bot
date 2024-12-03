const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  
module.exports.config = {
	name: "atoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Bật/tắt tự động seen khi có tin nhắn mới",
	commandCategory: "Group - Tools",
	usages: "on/off",
	cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'false')
    api.markAsReadAll(() => {});
};

module.exports. run = async ({ api, event, args }) => {
  try {
	if (args[0] == 'on') {
	  fs.writeFileSync(pathFile, 'true');
	  api.sendMessage('Turned On [ Auto Seen ] Mode - ✅', event.threadID, event.messageID);
	}
	else if (args[0] == 'off') {
	  fs.writeFileSync(pathFile, 'false');
	  api.sendMessage('Turned Off [ Auto Seen ] Mode - ⚠️', event.threadID, event.messageID);
	}
	else {
	  api.sendMessage(`» Use : ${global.config.PREFIX}atoseen on / off - ⚠️`, event.threadID, event.messageID);
	}
  }
  catch(e) {
    console.log(e);
  }
};