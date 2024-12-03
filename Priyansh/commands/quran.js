module.exports.config = {
    name: "quran",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "... - Long LTD",
    description: "War In Chatbox",
    commandCategory: "Noprefix",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("➢تَنۡزِیۡلُ الۡکِتٰبِ لَا رَیۡبَ فِیۡہِ مِنۡ رَّبِّ الۡعٰلَمِیۡنَ ؕ﴿۲\n\n\n(as-Sajdah, 32 : 2)\n\n\nاس کتاب کا اتارا جانا، اس میں کچھ شک نہیں کہ تمام جہانوں کے پروردگار کی طرف سے ہے\n\n\nThere is not even an iota of doubt in it that sending down of this Book is from the Lord of all the worlds.\n\n\nмσ∂υℓε cσ∂ε вү αвαвυ αяуαи🌿💖");


}