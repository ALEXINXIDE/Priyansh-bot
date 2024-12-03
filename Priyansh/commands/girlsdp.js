module.exports.config = {
  name: "adp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mr Aryan ",
  description: "",
  commandCategory: "random-img",
  usages: "girlsdp",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
 "https://i.imgur.com/vExOEL4.jpeg",
"https://i.imgur.com/II4RuwS.jpeg",
"https://i.imgur.com/oANuWYe.jpeg",
"https://i.imgur.com/xGXG6L3.jpeg",
"https://i.imgur.com/ih4mi2D.jpeg",
"https://i.imgur.com/0anlViu.jpeg",
"https://i.imgur.com/txMgy14.jpeg",
"https://i.imgur.com/kLad5pC.jpeg",
"https://i.imgur.com/2Y0onnd.jpeg",
"https://i.imgur.com/Lasxwcw.jpeg",
"https://i.imgur.com/llxzPUe.jpeg",
"https://i.imgur.com/N183EUq.jpeg",
"https://i.imgur.com/pKArZpF.jpeg",
"https://i.imgur.com/XnUxgdU.jpeg",
"https://i.imgur.com/Rkl2K44.jpeg",
"https://i.imgur.com/QRoLD4Y.jpeg",
"https://i.imgur.com/dyKnbDV.jpeg",
"https://i.imgur.com/CEYntSa.jpeg",
"https://i.imgur.com/OAxrv9E.jpeg",
"https://i.imgur.com/x4jnTAO.jpeg",
"https://i.imgur.com/rgeNKwV.jpeg",
"https://i.imgur.com/N59iCdF.jpeg",
"https://i.imgur.com/gBA1sbG.jpeg",
"https://i.imgur.com/yciVHph.jpeg",
"https://i.imgur.com/n9US5pz.jpeg",
"https://i.imgur.com/Qrsybqk.jpeg",
"https://i.imgur.com/3HnWcbP.jpeg",
"https://i.imgur.com/KfgZnxp.jpeg",
"https://i.imgur.com/OoODgmU.jpeg",
"https://i.imgur.com/0pAYfMU.jpeg",
"https://i.imgur.com/ZYN3xt4.jpeg",
"https://i.imgur.com/wCVxQgv.jpeg",
"https://i.imgur.com/t64dazr.jpeg",
"https://i.imgur.com/Lim73K2.jpeg",
"https://i.imgur.com/lRmMQir.jpeg",
"https://i.imgur.com/h07piq7.jpeg",
"https://i.imgur.com/PtsnsBU.jpeg",
"https://i.imgur.com/Unzmu35.jpeg",
"https://i.imgur.com/1SjSHOJ.jpeg",
"https://i.imgur.com/jzeVzD7.jpeg",
"https://i.imgur.com/GDbbpEE.jpeg",
"https://i.imgur.com/nRR2opK.jpeg",
"https://i.imgur.com/N56UEA0.jpeg",
"https://i.imgur.com/umEmRPZ.jpeg",  "https://i.imgur.com/fwzUo5a.jpg",
"https://i.imgur.com/qfnfiNr.jpeg",
"https://i.imgur.com/XTitWit.jpg",
"https://i.imgur.com/hYDjqgV.jpg",
"https://i.imgur.com/JVnfMY5.jpg",
"https://i.imgur.com/mmA3Uvp.jpeg",
"https://i.imgur.com/EZNHaew.jpg",
"https://i.imgur.com/GWKo2j8.jpeg",
"https://i.imgur.com/duNm8yu.jpeg",
"https://i.imgur.com/KBowHxM.jpeg",
"https://i.imgur.com/D9aSfmZ.jpeg",
"https://i.imgur.com/cQqSJeO.jpeg",
"https://i.imgur.com/pL02g1B.jpeg",
"https://i.imgur.com/8QYS5Rx.jpeg",
"https://i.imgur.com/eAGZxWb.jpeg",
"https://i.imgur.com/tXPUkOl.jpeg",
"https://i.imgur.com/4ChHeYB.jpeg",
"https://i.imgur.com/mvHsGJ7.jpeg",
"https://i.imgur.com/GRiFU7G.jpeg",
"https://i.postimg.cc/ZR7k8wqx/1690049020031.jpg",
"https://i.postimg.cc/WbJRZ6c0/1692003896309.jpg",
"https://i.postimg.cc/MGqggCMY/1692779612779.jpg",
"https://i.postimg.cc/qv89bJRR/1692779620469.jpg",
"https://i.postimg.cc/y6G4WptV/1692779629437.jpg",
"https://i.postimg.cc/k5yP4J3Z/1692779643634.jpg",
"https://i.postimg.cc/bJNcS7qv/1692779654278.jpg",
"https://i.postimg.cc/g0pPmw58/1692779669693.jpg",
"https://i.postimg.cc/WbDVncgF/1692779675151.jpg",
"https://i.postimg.cc/5NZVKKSP/1692779679364.jpg",
"https://i.postimg.cc/3NVP6Wmy/1692779720149.jpg",
"https://i.postimg.cc/1XfkJDnh/1692779725973.jpg",
"https://i.postimg.cc/442ZVx7R/1692779776786.jpg",
"https://i.postimg.cc/KzJb9Z0L/1692779814180.jpg",

  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 0) api.sendMessage("You need 100 dollars to see the photo ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 0})
   var callback = () => api.sendMessage({body:`This Photo Command made by Aryan Babu\n\n-💫💔 `,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
     }
   };
