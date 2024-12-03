module.exports.config = {
  name: "spammer",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "Spam a message multiple times",
  commandCategory: "Admin - Tools",
  cooldowns: 5,
  dependencies: [],
};

module.exports.run = async function ({ api, event, args }) {
  const god = ["100083900196039", "100095251515413"];
if (!god.includes(event.senderID)) return api.sendMessage(`⚠️You don't have permission to use this command!`, event.threadID, event.messageID);
  
  const amount = parseInt(args[0]);
  const message = args.slice(1).join(" ");

  if (isNaN(amount) || !message) {
    return api.sendMessage(`Something Went Wrong - ⚠️\n\n» Use :\n${global.config.PREFIX}spammer [ Number ] [ Title ]\n\n» Example :\n${global.config.PREFIX}spammer 10 I AM BACK ☠️`, event.threadID);
  }

  for (let i = 0; i < amount; i++) {
    api.sendMessage(message, event.threadID);
  }
};