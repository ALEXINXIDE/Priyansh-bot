module.exports.config = {
  name: "tikinfo",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "find tiktok info",
  usages: "[tiktok name]",
  commandCategory: "Info",
  cooldowns: 1
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let asif = args.join(" ");
const res = await axios.get(`https://apipremium-thanhali.thanhali.repl.co/tiktok/info?apikey=ThanhAliVip_1234567890&unique_id=${asif}`);
var id = res.data.id;
var nickname = res.data.nickname;
var username = res.data.username;
var heart = res.data.heartCount;
var followerCount = res.data.followerCount;
var followingCount = res.data.followingCount;
var videoCount = res.data.videoCount;
var relation = res.data.relation;
var isUnderAge18 = res.data.isUnderAge18;
var privateAccount = res.data.privateAccount;
var verified = res.data.verified;
var secUid = res.data.secUid;
var signature = res.data.signature;
var avatar = res.data.avatarLarger;
var diggCount = res.data.diggCount;
return api.sendMessage(`ID: ${id}\nNICKNAME: ${nickname}\nUSERNAME: ${username}\nFOLLOWING_COUNT: ${followingCount}\nVIDEO_COUNT: ${videoCount}\nRELATIONSHIP: ${relation}\nisUNDER_AGE18: ${isUnderAge18}\nVERIFIED: ${verified}\nSEC_UID: ${secUid}\nPRIVATE_ACCOUNT: ${privateAccount}\nFOLLOWER_COUNT: ${followerCount}\nHEART_COUNT: ${heart}\nSIGNATURE: ${signature}\nDIGG_COUNT: ${diggCount}\nAVATAR: ${avatar}`, event.threadID, event.messageID)
}