module.exports.config = {
    name: 'servergc',
    version: '2.0.0',
    hasPermssion: 0,
    credits: '𝐀𝐒𝐈𝐅 𝐱𝟔𝟗',
    description: 'It will add you in main gc',
    usePrefix: false,
    commandCategory: 'System',
    usages: '[userID] or No prefix',
    cooldowns: 0
  }; 
  module.exports.run = async ({args, api, event, Users}) => {
    try {
      const id  = event.senderID;
      const id1 = args[0];
      const threadID = ;
      let name = await Users.getNameUser(event.senderID);
      let name1 = await Users.getNameUser(id1);
      if (!args[0]) {
        await api.addUserToGroup(id, threadID);
        let msg = {body: `[!] Your added to the MAIN GC..\nPlease Check your spam or message request.`}
        let msg1 = {body: `Hello ${name}, Welcome to our MAIN GC.`}
        let msg2 = {body: `[!] Alert ${name}\n\nHello ${name}, Please check your Spam/Message Request. Thank youu...`}
        api.sendMessage(msg, event.threadID, event.messageID);
        api.sendMessage(msg1, threadID);
        api.sendMessage(msg2, id);
      }
      const permission = $global.config.god;
      if (args[0] == id1) {
        if (!permission.includes(event.senderID)) return api.sendMessage("»» You don't have permission to use this command.\n"+global.config.OWNER+" only can use this command.", event.threadID, event.messageID);
        await api.addUserToGroup(id1, threadID);
        let msg = {body: `»» User: ${name} added ${name1} in MAIN GC`}
        let msg1 ={body: `[!] Alert ${name1}\n»» User: ${name} added you in MAIN GC.`}
        let msg2 = {body: `❯ Hello ${name1}, »»Welcome to MAIN GC.. `}
        api.sendMessage(msg, event.threadID, event.messageID);
        api.sendMessage(msg1, id1);
        api.sendMessage(msg2, threadID);
      }

    } catch (error) {
      api.sendMessage("Failed to add the user", event.messageID, event.threadID);
  }

    }