const axios = require('axios');

module.exports.config = {
  name: "simi",
  version: "2.0",
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
  description: "Chat and teach with simi",
  commandCategory: "Ai",
  usages: "{prefix}simi <question>: Chat with Simi",
  cooldowns: 0
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;
  const tid = threadID;
  const mid = messageID;
  const permission = ["100000862816633"];
   if (!permission.includes(event.senderID))
     
  if (args[0] === 'teach') {
    args.shift();
    const content = args.join(' ').trim();

    if (!content) {
      return api.sendMessage('You need to provide a question and response to teach.', tid, mid);
    }

    const [ask, ans] = content.split('-').map(item => item.trim());

    if (!ask || !ans) {
      return api.sendMessage('Both the question and response are required and should be separated by "-".', tid, mid);
    }

    try {
      const simmateachResponse = await axios.get(`https://simma.rubish-api.repl.co/teach?query=${encodeURIComponent(ask)}&response=${encodeURIComponent(ans)}`);
      const simmaresponseMessage = simmateachResponse.data.message;
      return api.sendMessage(simmaresponseMessage, tid, mid);
    } catch (error) {
      console.error('Error occurred while teaching', error.message);
      return api.sendMessage("An error occurred while teaching. Please try again later.", tid, mid);
    }
  } else {
    try {
      const botuserQuestion = args.join(' ');
      if (!botuserQuestion) {
        return api.sendMessage('You need to ask a question.', tid, mid);
      }

      const apiUrl = `https://simma.rubish-api.repl.co/chat?query=${encodeURIComponent(botuserQuestion)}`;
      const rubishresponse = await axios.get(apiUrl);
      const simmaresponse = rubishresponse.data.response;
      return api.sendMessage(simmaresponse, tid, mid);
    } catch (error) {
      console.error('Error occurred while communicating with the API', error.message);
      return api.sendMessage("I don't know what you're saying. \n\nPlease teach me✏️", tid, mid);
    }
  }
};
