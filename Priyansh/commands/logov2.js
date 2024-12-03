var hiro = "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "logov2",
  version: "1.0",
  hasPermssion: 0,
  credits: `${hiro}`,
  description: "Generate logos",
  commandCategory: "text maker",
  usages: "log0v2",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length === 1 && args[0] === "list") {
    const logoTypes = [
      "\n52 : yellow jewerly", "\n53 : shiny metal", "\n54 : purple gem","\n55 : rainbow metal","\n56 : SCI FI logo",
      "\n57 : wood text", "\n58 : bagal text", "\n59 : biscuit text", "\n60 : abstra gold", "\n61 : rusty metal", "\n62 : fruit juice",
      "\n63 : ice cream", "\n64 : marble metal", "\n65 : slabs marble", "\n66 : silver jewerly", "\n\nmore logo for : log0v3 coming soon wait for log0v3"
    ];
    return api.sendMessage(`All types of logos:\n\n${logoTypes.join(", ")}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage(`Use: logo number <name>\n to see all logo types: log0v2 list`, threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args[1];
  let name2 = args.slice(2).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "52":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/17?text=${name}`;
      message = "[yellow jewerly] Logo created:";
      break;
    case "53":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/18?text=${name}`;
      message = "[shiny metal] Logo created:";
      break;
    case "54":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/19?text=${name}`;
      message = "[purple gem] Logo created:";
      break;
    case "55":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/20?text=${name}`;
      message = "[rainbow metal] Logo created:";
      break;
    case "56":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/21?text=${name}`;
      message = "[SCI FI logo] Logo created:";
      break;
    case "57":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/22?text=${name}`;
      message = "[wood text] Logo created:";
      break;
    case "58":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/23?text=${name}`;
      message = "[bagal text] Logo created:";
      break;
    case "59":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/24?text=${name}`;
      message = "[biscuit text] Logo created:";
      break;
    case "60":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/25?text=${name}`;
      message = "[abstra gold] Logo created:";
      break;
    case "61":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/26?text=${name}`;
      message = "[rusty metal] Logo created:";
      break;
    case "62":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/27?text=${name}`;
      message = "[fruit juice] Logo created:";
      break;
    case "63":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/28?text=${name}`;
      message = "[ice cream] Logo created:";
      break;
    case "64":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/29?text=${name}`;
      message = "[marble metal] Logo created:";
      break;
    case "65":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/30?text=${name}`;
      message = "[slabs marble] Logo created:";
      break;
    case "66":
      apiUrl =`https://reset-api.ch9nd.repl.co/api/textpro/16?text=${name}`;
      message = "[silver jewerly] Logo created:";
      break;
    default:
      return api.sendMessage(`Invalid logo type! Use: ${global.config.PREFIX} list to show all logo types`, threadID, messageID);
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
