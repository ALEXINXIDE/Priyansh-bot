module.exports.config = {
  name: "couple",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Anup Kumar",
  description: "Pairing",
  commandCategory: "Love", 
  usages: "couple", 
  cooldowns: 40
};
module.exports.run = async function({ api, event,Threads, Users }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];

        var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
        var tle = Math.floor(Math.random() * 101);
        var namee = (await Users.getData(event.senderID)).name
        const botID = api.getCurrentUserID();
        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
        var id = listUserID[Math.floor(Math.random() * listUserID.length)];
        var name = (await Users.getData(id)).name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});


        let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

        let gifLove = (await axios.get( `https://i.imgur.com/gun65QS.jpeg`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.jpeg", Buffer.from(gifLove, "utf-8") );

        let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

        var imglove = [];

              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.jpeg"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

        var msg = {body: `𝓫𝓪𝓷𝓪𝓓𝓲𝔂𝓪 𝓒𝓸𝓾𝓹𝓵𝓮 𝓐𝓫 𝓼𝓱𝓪𝓭𝓲 𝓴𝓱𝓾𝓭 𝓴𝓻𝓵𝓮𝓷𝓪 💞🐧 !\n🫀❤️ 𝓚𝓱𝓾𝓼𝓱 𝓡𝓱𝓸 𝓗𝓪𝓶𝓮𝓼𝓱𝓪\n💕𝓓𝓸𝓷𝓽 𝓫𝓮 𝓯𝓮𝓵𝓾𝓻𝓽 𝓮𝓪𝓬𝓱𝓸𝓽𝓱𝓮𝓻 😍❤️: ${tle}%\n`+namee+" "+"💞"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
}