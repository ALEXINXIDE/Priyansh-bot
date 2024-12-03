module.exports.config = {
  name: "ramzan",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Clarence DK",
  description: "",
  commandCategory: "0",
  cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const u = Date.parse("March 23, 2023 00:00:00") - Date.parse(new Date());
    const saconds = Math.floor( (u/1000) % 60 );
    const menutes = Math.floor( (u/1000/60) % 60 );
    const huurs = Math.floor( (u/(1000*60*60)) % 24 );
    const deys = Math.floor( u/(1000*60*60*24) );

    return api.sendMessage(`Time remaining until ❤ 𝙃𝙤𝙡𝙮 𝙈𝙤𝙣𝙩𝙝 𝙍𝙖𝙢𝙖𝙙𝙖𝙣 𝙈𝙪𝙗𝙖𝙧𝙖𝙠 🥰\n» ${deys} days ${huurs} hours ${menutes} minutes ${saconds} seconds«\n💗Allah’s Messenger (PBUH) said\n*•.¸♡ جب رمضان آتا ہے تو جنت کے دروازے کھول دیے جاتے ہیں، جہنم کے دروازے بند کر دیے جاتے ہیں اور شیاطین کو جکڑ دیا جاتا ہے.اس لیے رمضان المبارک مسلمانوں کے لیے جہنم کی آگ سے بچنے اور جنت میں داخل ہونے کے لیے نماز اور صدقہ کرنے کا وقت ہے۔ ♡¸.•*\n\n𝗖𝗼𝗱𝗲 𝗕𝘆:\n≼≽💞🌿𝓒𝓻𝓾𝓼𝓱 𝓙𝓪𝓲𝓷 𝓐𝓻𝔂𝓪𝓷 𝓑𝓪𝓫𝓾 💞🌿≼≽`, event.threadID, event.messageID);
}