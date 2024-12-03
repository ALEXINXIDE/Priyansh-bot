module.exports.config = {
  name: "tempmail",
  version: "1.0.",
  hasPermission: 0,
  credits: "James, CREDITS SENSUI FOR THE API ←(*꒪ヮ꒪*)",
  description: "Generate free temporary email",
  commandCategory: "Tools",
  usages: `"gen" = generate email\n"inbox" = check email messages`,
  cooldowns: 5,
};
module.exports.run = async ({ api, event, args }) => {
    const axios = require('axios');
    let { threadID, messageID } = event;
    
   
    if (!args[0]) {
        api.sendMessage(`📧 Temp Mail Using Details 📧\n\n◆ For Creating Mail - ✅\n${global.config.PREFIX}tempmail create\n\n◆ For Check The Inbox - 📥\n${global.config.PREFIX}tempmail inbox - [ Email ]\n\n» Example :\n${global.config.PREFIX}tempmail inbox abc@mail.com`, threadID, messageID);
    }
    else if (args[0] == "create") {
        const url1 = await axios.get(`https://tempmail-api.codersensui.repl.co/api/gen`);
        const email = url1.data.email;
  return api.sendMessage(`📧 This Is Your Temp Mail 📧\n\n» Mail : ${email}`, threadID, messageID);
    }
    else if (args[0] == "inbox") {
    const text = args[1];
      const url2 = await axios.get(`https://tempmail-api.codersensui.repl.co/api/getmessage/${text}`);
        const mess = url2.data.messages[0].message;
      const sub = url2.data.messages[0].subject;
      const sender = url2.data.messages[0].sender;
      
           return api.sendMessage(`📨 Here's The Inbox Of This Mail 📨\n» Your Mail : ${text}\n\n👤 Sender : ${sender}\n✨ Subject : ${sub}\n✉️ Message : ${mess}`, threadID, messageID);
    }   
};