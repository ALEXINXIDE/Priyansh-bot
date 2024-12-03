module.exports.config = {
  name: "antiout",
  version: "1.0.0",
  credits: "𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗖𝗵𝗮𝘁 𝗕𝗼𝘁",
  hasPermssion: 2,
  description: "Turn on / off Antiout Mode",
  usePrefix: "True - ✅",
  usages: `${global.config.PREFIX}antiout`,
  commandCategory: "Group - Tools",
  cooldowns: 0
};

module.exports.run = async ({ api, event, Threads }) => {
  let data = (await Threads.getData(event.threadID)).data || {};
  if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
  else data["antiout"] = false;

  await Threads.setData(event.threadID, { data });
  global.data.threadData.set(parseInt(event.threadID), data);
  return api.sendMessage(`Successfully ${(data["antiout"] == true) ? "Turn On" : "Turn Off"} Antiout Mode - ✅`, event.threadID);
}