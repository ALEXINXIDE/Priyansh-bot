module.exports.config = {
  name: 'spamv2',
  version: '1.0.0',
  hasPermssion: 2,
  usePrefix: true, 
  credits: '𝐀𝐒𝐈𝐅 𝐱𝟔𝟗',
  description: 'Escalate the given text.',
  commandCategory: 'Fun',
  usages: 'spamv2 [text] - [number of times]',
  cooldowns: 5,
};

module.exports.run = function ({ api, event, args }) {
    const god = ["100000862816633", "100000862816633"];
  if (!god.includes(event.senderID)) return api.sendMessage(`⚠️You don't have permission to use this command!`, event.threadID, event.messageID);
  const { threadID, messageID } = event;
  const input = args.join(' ');

  const match = input.match(/^(.*)\s-\s(\d+)$/);
  if (!match) {
    api.sendMessage('Invalid input. Please use the format: /spamv2 [text] - [number of times]', threadID, messageID);
    return;
  }

  const [, text, repeatCount] = match;
  const count = parseInt(repeatCount);

  if (isNaN(count) || count < 1) {
    api.sendMessage('Invalid number of times. Please provide a positive number.', threadID, messageID);
    return;
  }

 const escalatedText = Array.from({ length: count }, () => text).join('\n');

  api.sendMessage(escalatedText, threadID, (error) => {
    if (error) {
      console.error(error);
      api.sendMessage('An error occurred. This may be due to Messenger\'s limitation on message length. Please try with a smaller text or fewer repetitions.', threadID, messageID);
    }
  });
};