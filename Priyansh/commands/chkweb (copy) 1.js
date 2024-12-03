module.exports.config = {
  name: "mod",
  version: "1.0.5",
  hasPermssion: 0, 
  credits: "𝘼𝙎𝙄𝙁 𝙭𝟔𝟗",
  description: "Manage bot admin",
  commandCategory: "Owner",
  usages: "[list/add/remove] [userID]",
    cooldowns: 5,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.languages = {

    "en": {
        "listAdmin": '╭•┄┅══𝘼𝙎𝙄𝙁 𝙭𝟔𝟗-𝘽𝙊𝙏-𝟬𝟬𝟳══┅┄•╮\n\n•═════•𝙊𝙒𝙉𝙀𝙍-𝙇𝙄𝙎𝙏•═════•\n\n╰┈►𝘼𝙎𝙄𝙁 𝙭𝟔𝟗\n\n╰┈►𝘼𝙎𝙄𝙁 𝙭𝟔𝟗\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n•═══•𝙈𝙊𝘿𝙀𝙍𝘼𝙏𝙊𝙍-𝙇𝙄𝙎𝙏•═══•\n\n%1 \n•═════•𝘼𝙇𝙇•══════•\n\n╰•┄┅══𝘼𝙎𝙄𝙁 𝙭𝟔𝟗-𝘽𝙊𝙏══┅┄•╯',
        "notHavePermssion": '[Admin] You have no permission to use "%1"',
        "addedNewAdmin": '[Admin] Added %1 𝙈𝙊𝘿𝙀𝙍𝘼𝙏𝙊𝙍 :\n\n%2',
        "removedAdmin": '[Admin] Remove %1 𝙈𝙊𝘿𝙀𝙍𝘼𝙏𝙊𝙍 :\n\n%2',
      "listId":'•═════•UID•═════•\n%1\n•═════•LIST•═════•'
    }
}

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    const content = args.slice(1, args.length);
    const { threadID, messageID, mentions } = event;
    const { configPath } = global.client;
    const { ADMINBOT } = global.config;
    const { userName } = global.data;
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const mention = Object.keys(mentions);
    delete require.cache[require.resolve(configPath)];
    var config = require(configPath);


    switch (args[0]) {
        case "list":
        case "all":
        case "ls": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = await Users.getNameUser(idAdmin);
                    msg.push(`╰┈►${name}`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n")), threadID, messageID);
        }
        case "id":
      case "uid":
      case "ids": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = await Users.getNameUser(idAdmin);
                    msg.push(`» UID${idAdmin}`);
                }
            }

            return api.sendMessage(getText("listId", msg.join("\n")), threadID, messageID);
      }
        case "root": {
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = await Users.getNameUser(idAdmin);
                    msg.push(`╰┈►${name}\n${idAdmin}`);
                }
            }

            return api.sendMessage(getText("listAdmin", msg.join("\n")), threadID, messageID);
        }

      case "add":
      case "+":{            
if (event.senderID !== "100004504180813") return api.sendMessage("Only 𝐀𝐒𝐈𝐅 𝐱𝟔𝟗 Can Add New Mod", event.threadID);



            if (mention.length != 0 && isNaN(content[0])) {
                var listAdd = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[ ${content[1]} ] » ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "god": {
            const god = $global.config.GOD;
            if (!god.includes(event.senderID)) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);


            if (mention.length != 0 && isNaN(content[0])) {
                var listGod = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listGod.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listGod.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[ ${content[1]} ] » ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete":
      case "-":{
            if (event.senderID !== "100083900196039") return api.sendMessage("╰┈►Only 𝐀𝐒𝐈𝐅 𝐱𝟔𝟗 can remove admin from self list!", event.threadID);
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] » ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }

        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
    }