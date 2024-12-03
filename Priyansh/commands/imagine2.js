const axios = require('axios');
const fs = require('fs-extra');

const models = [
  "0. Absolute Reality V16",
  "1. Absolute Reality V181",
  "2. Analog Diffusion 1.0",
  "3. Anything V3.0 (Pruned)",
  "4. Anything V4.5 (Pruned)",
  "5. Anything V5 (PrtRE)",
  "6. AOM3A3 Orange Mix",
  "7. Children's Stories V13D",
  "8. Children's Stories V1 Semi-Real",
  "9. Children's Stories V1 Toon Anime",
  "10. Cyberrealistic V33",
  "11. Deliberate V2",
  "12. Dreamlike Anime 1.0",
  "13. Dreamlike Diffusion 1.0",
  "14. Dreamlike Photoreal 2.0",
  "15. Dreamshaper 6 (Baked VAE)",
  "16. Dreamshaper 7",
  "17. Dreamshaper 8",
  "18. Edge of Realism Eor V20",
  "19. Eimis Anime Diffusion V1",
  "20. Elldreth's Vivid Mix",
  "21. Epic Realism Natural Sin RC1VAE",
  "22. I Can't Believe It's Not Photography Seco",
  "23. Juggernaut Aftermath",
  "24. Lyriel V16",
];

module.exports.config = {
  name: 'imaginev2',
  version: '3.0',
  hasPermission: 0,
  credits: '𝐀𝐒𝐈𝐅 𝐱𝟔𝟗',
  description: 'Transform text into stunning AI-generated art using stable diffusion models.',
  usePrefix: true,
  commandCategory: 'Image',
  usages: 'imaginev2 [prompt]|[model number]',
  cooldowns: 0,
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const { threadID = "defaultThreadID", messageID = "defaultMessageID" } = event || {};
    let prompt = args.join(' ');
    let model = "22";

    if (prompt.includes('|')) {
      const parts = prompt.split('|');
      prompt = parts[0].trim();

      const parsedModel = parseInt(parts[1].trim());
      if (!isNaN(parsedModel) && parsedModel >= 0 && parsedModel < models.length) {
        model = parsedModel.toString();
      } else {
        return api.sendMessage(
          '❗ Invalid model number. Please specify a model number between 0 and 24.',
          threadID,
          messageID
        );
      }
    } else if (!prompt) {
      const modelsList = models.map((model, index) => `${model}`).join('\n');
      return api.sendMessage(
        'Please provide a prompt along with a model number if desired.\n\nimagine {prompt}\nExample: imagine a beautiful girl\n\nimagine {prompt}|{model number}\nExample: imaginev2 a beautiful girl:21\n\n' +
        modelsList,
        threadID
      );
    }

    const processingMessage = await api.sendMessage(
      '✅ Processing your request. Please wait...',
      threadID,
      null,
      messageID
    );

    const API = `https://api.samirthakuri.repl.co/generate?prompt=${encodeURIComponent(prompt)}&model=${model}`;

    const timeout = 20000;
    const imageStreamPromise = axios.get(API, { responseType: 'arraybuffer' });

    try {
      const imageStream = await Promise.race([
        imageStreamPromise,
        new Promise((_, reject) =>
          setTimeout(() => {
            api.unsendMessage(processingMessage.messageID);
            reject(new Error('API request timed out.'));
          }, timeout)
        ),
      ]);

      if (imageStream) {
        const path = __dirname + `/cache/imagine.png`;
        fs.writeFileSync(path, Buffer.from(imageStream.data, 'utf-8'));

        api.sendMessage(
          {
            attachment: fs.createReadStream(path),
          },
          threadID,
          () => {
            fs.unlinkSync(path);
            api.unsendMessage(processingMessage.messageID);
          },
          messageID
        );
      } else {

        api.sendMessage('❌ An error occurred while processing your prompt. Please try again later', threadID, messageID);
      }
    } catch (error) {

      console.error(error);
      api.sendMessage('❌ An error occurred while processing your prompt. Please try again later', threadID, messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage('❌ An error occurred while processing your prompt. Please try again later', threadID, messageID);
  }
};