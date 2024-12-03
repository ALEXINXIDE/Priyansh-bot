const fs = require("fs");
module.exports.config = {
    name: "prefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "jeka",
    description: "hihihihi",
    commandCategory: "Help Zone",
    usages: "prefix",
    cooldowns: 1,
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
    var { threadID, messageID, senderID } = event;
    var senderName = "";
    api.getUserInfo(senderID, (err, result) => {
        if (err) {
            console.error(err);
            senderName = "";
        } else {
            senderName = result[senderID].name;
        }
        if (
            event.body.indexOf("prefix") == 0 ||
            event.body.indexOf("Prefix") == 0 ||
            event.body.indexOf("PREFIX") == 0 ||
            event.body.indexOf("prefi") == 0
        ) {
            // Send text message with prefix information
            api.sendMessage(
                {
                    body: `𝗛𝗲𝘆 👋🏻 𝗜 𝗔𝗺 𝗔𝗹𝗶𝘃𝗲 🙋🏻‍♂️\n\nMy Prefix - [ ${global.config.PREFIX} ]\n\n⚠️ - 𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨 - ⚠️\n\n${global.config.PREFIX}help -> See All Commands\n${global.config.PREFIX}called [ Message ] -> Report to Admin for any problem\n\n𝗡𝗼𝘄 𝗘𝗻𝗷𝗼𝘆 𝗧𝗵𝗲 𝗕𝗢𝗧 - 😇`,
                    attachment: fs.createReadStream(
                        __dirname + `/noprefix/prefix.gif`
                    ),
                },
                threadID,
                messageID
            );

            // Send voice message with additional information
            const voiceFile = fs.readFileSync(
                __dirname + "/noprefix/prefix.gif"
            );
            api.sendMessage(
                {
                    attachment: voiceFile,
                    type: "audio",
                    body: "Hey, listen to my prefix information!",
                },
                threadID,
                () => {}
            );

            api.setMessageReaction("👍", event.messageID, (err) => {}, true);
        }
    });
};
module.exports.run = function ({ api, event, client, __GLOBAL }) {};