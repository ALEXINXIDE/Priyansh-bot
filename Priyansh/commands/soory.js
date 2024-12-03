module.exports.config = {
    name: "sorry",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "... - Long LTD",
    description: "War nát cái boxchat",
    commandCategory: "group",
    usages: "bold war",
    cooldowns: 10,
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
a("I'm So So Sorry");
setTimeout(() => {a({body: "Maf Kardo Pls" })}, 3000);
setTimeout(() => {a({body: "please"})}, 5000);
setTimeout(() => {a({body: "please 🥺" })}, 5000);
setTimeout(() => {a({body: "please 😞" })}, 5000);
setTimeout(() => {a({body: "I Know I'm So Late" })}, 5000);
setTimeout(() => {a({body: "I Know I'm Care less" })}, 5000);
setTimeout(() => {a({body: "But The Thing Is" })}, 5000);
setTimeout(() => {a({body: "Mujhe Sab Pata Tha" })}, 50000);
setTimeout(() => {a({body: "M Agar Chahta Toh Subha Hi Bol Sakta tha" })}, 6000);
setTimeout(() => {a({body: "Lekin M Buddhu Tha Nhi kiya" })}, 6000);
setTimeout(() => {a({body: "Mujhe Pata nhi Tha Kuch Aisa Hoga" })}, 5000);
setTimeout(() => {a({body: "Lekin Kya kare Mera Luck Hi Kharab ha" })}, 5000);
setTimeout(() => {a({body: "Please Bura Mat Mano" })}, 6000);
setTimeout(() => {a({body: "Aur Dher Sara Enjoy karo aj" })}, 6000);
setTimeout(() => {a({body: "Ajj Tumhe Happy Rehna Chaiye" })}, 7000);
setTimeout(() => {a({body: "So, Apna Face pe Smile Rakkho" })}, 7000);
setTimeout(() => {a({body: "Aur Har Waqt Haste Rao" })}, 7000);
setTimeout(() => {a({body: "Mere Sath Hamesha Raho" })}, 7000);
setTimeout(() => {a({body: "Khush Raho Tum" })}, 8000);
setTimeout(() => {a({body: "Tum tu Jan ho Meri" })}, 8000);
setTimeout(() => {a("ApNi Jaan sy Naraz ni hoty😔")} , 8000);
setTimeout(() => {a({body: "Please Ma Sorry Krta Hu Janu " })}, 9000);
setTimeout(() => {a({body: "My Dear Janu" })}, 8000);
setTimeout(() => {a({body: "Upar Wala Apko Hamesha kHush RaKhy" })}, 9000);
setTimeout(() => {a({body: "I'm So So Sorry Dear Good Bye🥺💖"})} , 5000);





  }