module.exports.config = {
	name: "ip",	
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "NTKhang",
	description: "View your ip information or other ip", 
	commandCategory: "Tools",
	usages: "",
	cooldowns: 5, 
	dependencies: "",
};

module.exports.run = async function({ api, args, event, __GLOBAL }) {
  const timeStart = Date.now();
  
    const axios = require("axios");
  if (!args[0]) {api.sendMessage("Please Enter IP Address - 😒",event.threadID, event.messageID);}
  else {
var infoip = (await axios.get(`http://ip-api.com/json/${args.join(' ')}?fields=66846719`)).data;
       if (infoip.status == 'fail')
         {api.sendMessage(`Error! An error occurred. Please try again later: ${infoip.message}`, event.threadID, event.messageID)}
          else {
            /////////////////
          //////////////////
 api.sendMessage({body:`======${(Date.now()) - timeStart}ms======
🗺️ Continent : ${infoip.continent}
🏳️ Nation : ${infoip.country}
🎊 Country Code : ${infoip.countryCode}
🌆 Area : ${infoip.region}
⛱️ State : ${infoip.regionName}
🏙️ City : ${infoip.city}
🛣️ District : ${infoip.district}
📮 ZIP Code : ${infoip.zip}
🧭 Latitude : ${infoip.lat}
🧭 Longitude : ${infoip.lon}
🕛 Time Zone : ${infoip.timezone}
👨‍✈️ Organization Name : ${infoip.org}
💵 Currency : ${infoip.currency}
`,location: {
				latitude: infoip.lat,
				longitude: infoip.lon,
				current: true
			}}
,event.threadID, event.messageID);}
        }
    
                  }

  
  
  
  
  
  
  