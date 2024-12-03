module.exports.config = {
  name: "log",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "TuanDzz",
  description: "log",
  commandCategory: "Tools",
  usages: "",
  cooldowns: 3,
  denpendencies: {
  }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  //var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var tagadmin = data.tagadmin;
  var guard = data.guard;
  var antiout = data.antiout;
  //prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `True` : log = `${log}`;
  rankup == null ? rankup = `False` : rankup = `${rankup}`;
  resend == null ? resend = `False` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `True` : tagadmin = `${tagadmin}`;
  guard == null ? guard = `True` : guard = `${guard}`;
  antiout == null ? antiout = `True` : antiout = `${antiout}`;
return api.sendMessage(`ᅠᅠ☣️ Log Details ☣️\n━━━━━━━━━━━━\n» Log : ${log}\n» Rankup : ${rankup}\n» Resend : ${resend}\n» Tag Admin : ${tagadmin}\n» Antirobbery : ${guard}\n» Antiout : ${antiout}\n━━━━━━━━━━━━`, threadID, messageID);
}
