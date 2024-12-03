module.exports.config = {
  name: "friendlist",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "ManhG",
  description: "View friends information/Delete friends by replying",
  commandCategory: "Admin",
  usages: "",
  cooldowns: 5
};

module.exports.handleReply = async function ({ api, args, Users, handleReply, event, Threads }) {
  const { threadID, messageID } = event;
  if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;

  switch (handleReply.type) {
    case "reply":
      {
        var msg ="" , name, urlUser, uidUser;
        var arrnum = event.body.split(" ");
        var nums = arrnum.map(n => parseInt(n));
        for (let num of nums) {
          name = handleReply.nameUser[num - 1];
          urlUser = handleReply.urlUser[num - 1];
          uidUser = handleReply.uidUser[num - 1];

          api.unfriend(uidUser);
          msg += '- ' + name + '\n🌐ProfileUrl: ' + urlUser + "\n";
          //console.log(msg);
        }

        api.sendMessage(`💢Delete Friends💢\n\n${msg}`, threadID, () =>
          api.unsendMessage(handleReply.messageID));
      }
      break;
  }
};


module.exports.run = async function ({ event, api, args }) {
  const { threadID, messageID, senderID } = event;
  //var unfriend =  await api.unfriend();
  try {
    var listFriend = [];
    var dataFriend = await api.getFriendsList();
    var countFr = dataFriend.length;

    for (var friends of dataFriend) {
      listFriend.push({
        name: friends.fullName || "Chưa đặt tên",
        uid: friends.userID,
        gender: friends.gender,
        vanity: friends.vanity,
        profileUrl: friends.profileUrl
      });
    }
    var nameUser = [], urlUser = [], uidUser = [];
    var page = 1;
    page = parseInt(args[0]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 10;
    var msg = `🎭 INCLUDES ${countFr} FRIENDS 🎭\n\n`;
    var numPage = Math.ceil(listFriend.length / limit);

    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
      if (i >= listFriend.length) break;
      let infoFriend = listFriend[i];
      msg += `${i + 1} - Name : ${infoFriend.name}\n🆔 UID : ${infoFriend.uid}\n💥 Gender : ${infoFriend.gender}\n❄️ User Name : ${infoFriend.vanity}\n🌐 FB Link : ${infoFriend.profileUrl}\n\n`;
      nameUser.push(infoFriend.name);
      urlUser.push(infoFriend.profileUrl);
      uidUser.push(infoFriend.uid);
    }
    msg += ``;

    return api.sendMessage(msg + '', event.threadID, (e, data) =>
      global.client.handleReply.push({
        name: this.config.name,
        author: event.senderID,
        messageID: data.messageID,
        nameUser,
        urlUser,
        uidUser,
        type: 'reply'
      })
    )
  }
  catch (e) {
    return console.log(e)
  }
}