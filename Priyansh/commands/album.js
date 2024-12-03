module.exports.config = {
	name: "album",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
	description: "Reply answer",
	commandCategory: "Album",
	cooldowns: 5,
  dependencies: {
    axios: ""
  }
}, module.exports.run = async function({
  event: e,
  api: a,
  args: n
}) {
  if (!n[0]) return a.sendMessage("====「 𝐕𝐈𝐃𝐄𝐎 」====\n━━━━━━━━━━━━━\n𝟙. 𝐋𝐎𝐕𝐄 𝐕𝐈𝐃𝐄𝐎 💞 \n𝟚. 𝐂𝐎𝐔𝐏𝐋𝐄 𝐕𝐈𝐃𝐄𝐎 💕\n𝟛. 𝐒𝐇𝐎𝐑𝐓 𝐕𝐈𝐃𝐄𝐎 📽\n𝟜. 𝐒𝐀𝐃 𝐕da𝐄𝐎 😔\n𝟝. 𝐒𝐓𝐀𝐓𝐔𝐒 𝐕𝐈𝐃𝐄𝐎 📝\n𝟞. 𝐒𝐇𝐀𝐈𝐑𝐈\n𝟟. 𝐁𝐀𝐁𝐘 𝐕𝐈𝐃𝐄𝐎 😻\n𝟠. 𝐀𝐍𝐈𝐌𝐄 𝐕𝐈𝐃𝐄𝐎 \n𝟡. 𝐇𝐔𝐌𝐀𝐈𝐘𝐔𝐍 𝐅𝐎𝐑𝐈𝐃 𝐒𝐈𝐑 ❄\n𝟙𝟘. 𝐈𝐒𝐋𝐀𝐌𝐈𝐊 𝐕𝐈𝐃𝐄𝐎 🤲\n𝟙𝟙. 𝐁𝐑𝐎𝐊𝐄𝐍 𝐕𝐈𝐃𝐄𝐎😓\n\n===「 𝟏𝟖+ 𝐕𝐈𝐃𝐄𝐎 」===\n━━━━━━━━━━━━━\n𝟙𝟚. 𝐇𝐎𝐑𝐍𝐘 𝐕𝐈𝐃𝐄𝐎 🥵\n𝟙𝟛. 𝐇𝐎𝐓 🔞\n𝟙𝟜. 𝐈𝐓𝐄𝐌\n\nTell me how many video numbers you want to see by replaying this message", e.threadID, ((a, n) => {
    global.client.handleReply.push({
      name: this.config.name,
      messageID: n.messageID,
      author: e.senderID,
      type: "create"
    })
  }), e.messageID)
}, module.exports.handleReply = async ({
  api: e,
  event: a,
  client: n,
  handleReply: t,
  Currencies: s,
  Users: i,
  Threads: o
}) => {
  var { p, h } = linkanh();

  if ("create" === t.type) {
    const n = (await p.get(h)).data.data;
    let t = (await p.get(n, {
      responseType: "stream"
    })).data;
    return e.sendMessage({
      body: "𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐈𝐍𝐆 𝐕𝐈𝐃𝐄𝐎 𝐅𝐎𝐑 𝐘𝐎𝐔\n\n𝐏𝐋𝐄𝐀𝐒𝐄 𝐖𝟖...",
      attachment: t
    }, a.threadID, a.messageID)
  }

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://videos-api--xaikoimran.repl.co/video/love";
        else if ("2" == a.body)
         var   h = "https://videos-api--xaikoimran.repl.co/video/cpl";
        else if ("3" == a.body)
         var   h = "https://videos-api--xaikoimran.repl.co/video/short";
        else if ("4" == a.body)
          var  h = "https://videos-api--xaikoimran.repl.co/video/sadvideo";
        else if ("5" == a.body)
          var  h = "https://videos-api--xaikoimran.repl.co/video/status";
        else if ("6" == a.body)
          var  h = "https://videos-api--xaikoimran.repl.co/video/shairi";
        else if ("7" == a.body)
          var  h = "https://videos-api--xaikoimran.repl.co/video/baby";
        else if ("8" == a.body)
          var  h = "https://videos-api--xaikoimran.repl.co/video/anime";
        else if ("9" == a.body)
         var   h = "https://videos-api--xaikoimran.repl.co/video/humaiyun";
        else if ("10" == a.body)
         var  h = "https://videos-api--xaikoimran.repl.co/video/islam";
         else if ("11" == a.body)
         var  h = "https://videos-api--xaikoimran.repl.co/video/broken";
         else if ("12" == a.body)
         var  h = "https://videos-api--xaikoimran.repl.co/video/horny";
        else if ("13" == a.body)
         var  h = "https://videos-api--xaikoimran.repl.co/video/hot";
        else if ("14" == a.body)
         var  h = "https://videos-api--xaikoimran.repl.co/video/item";
        return { p, h };
    }
};