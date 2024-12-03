const fs = require("fs");
module.exports.config = {
  name: "good night",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "Muhammad Ali", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("night") ||
     react.includes("night") || react.includes("NIGHT") || react.includes("night") ||
react.includes("Allah hafiz night") ||
react.includes(" Night")) {
    var msg = {
        body: `𝓖𝓸𝓸𝓭 𝓝𝓲𝓰𝓱𝓽 𝓽𝓸𝓸 𝓜𝓮𝓻𝓲 𝓙𝓪𝓪𝓷🤭🍫`,attachment: fs.createReadStream(__dirname + `/noprefix/nyt.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }