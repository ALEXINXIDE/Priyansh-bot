var hiro = "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logov1",
  version: "1.0",
  hasPermssion: 0,
  credits: `${hiro}`,
  description: "Generate logos",
  commandCategory: "text maker",
  usages: "logov1",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length === 1 && args[0] === "list") {
    const logoTypes = [
      "\n37 : Glowing", "\n38 : chromelogo", "\n39 : black metal", "\n40 : bluetext","\n41 : bluemetal","\n42 : hot logo",
      "\n43 : carbon", "\n44 : yellow", "\n45 : golden", "\n46 : blue jewerly", "\n47 : cyan jewerly", "\n48 : green",
      "\n49 : orange jewerly", "\n50 : purple jewerly", "\n51 : red jewerly", "\n\nFor more logo : log0v2"
    ];
    return api.sendMessage(`All types of logos:\n\n${logoTypes.join(", ")}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage(`Use: log0v1 number <name>\n to see all logo types: log0v1 list`, threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args[1];
  let name2 = args.slice(2).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "37":
      apiUrl =`https://reset-api.ch9nd.repl.co/api/textpro/1?text=${name}`;
      message = "[Glowing] Logo created:";
      break;
    case "38":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/2?text=${name}`;
      message = "[chrome LOGO] Logo created:";
      break;
    case "39":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/3?text=${name}`;
      message = "[black metal] Logo created:";
      break;
    case "40":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/4?text=${name}`;
      message = "[bluetext] Logo created:";
      break;
    case "41":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/5?text=${name}`;
      message = "[bluemetal] Logo created:";
      break;
    case "42":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/6?text=${name}`;
      message = "[hot logo] Logo created:";
      break;
    case "43":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/7?text=${name}`;
      message = "[carbon] Logo created:";
      break;
    case "44":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/8?text=${name}`;
      message = "[yellow] Logo created:";
      break;
    case "45":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/9?text=${name}`;
      message = "[golden] Logo created:";
      break;
    case "46":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/10?text=${name}`;
      message = "[blue jewerly] Logo created:";
      break;
    case "47":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/11?text=${name}`;
      message = "[cyan jewerly] Logo created:";
      break;
    case "48":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/12?text=${name}`;
      message = "[green logo] Logo created:";
      break;
    case "49":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/13?text=${name}`;
      message = "[orange jewerly] Logo created:";
      break;
    case "50":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/14?text=${name}`;
      message = "[purple jewerly] Logo created:";
      break;
    case "51":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/15?text=${name}`;
      message = "[red jewerly] Logo created:";
      break;
    default:
      return api.sendMessage(`Invalid logo type! Use: ${global.config.PREFIX}log0v1 list to show all logo types`, threadID, messageID);
  }

  api.sendMessage("Please wait...", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
