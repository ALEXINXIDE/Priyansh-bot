module.exports.config = {
  name: "bestfreind",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Boys Dp photos",
  commandCategory: "Random-IMG",
  usages: "bestfreind",
  cooldowns: 2,
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
 "https://i.imgur.com/IB29BRb.jpeg","https://i.imgur.com/J1pQBRl.jpeg","https://i.imgur.com/A2vGkDb.jpeg","https://i.imgur.com/zs1FHbo.jpeg","https://i.imgur.com/sJo0qoA.jpeg","https://i.imgur.com/g99DTrr.jpeg","https://i.imgur.com/46FePLl.jpeg","https://i.imgur.com/uyoGKAS.jpeg","https://i.imgur.com/80j7XvE.jpeg","https://i.imgur.com/idwszEE.jpeg","https://i.imgur.com/UELajUH.jpeg","https://i.imgur.com/otMsQGp.jpeg","https://i.imgur.com/1kOyfz2.jpeg","https://i.imgur.com/KDMMFka.jpeg","https://i.imgur.com/RAhYBEx.jpeg","https://i.imgur.com/lCHE67z.jpeg","https://i.imgur.com/vPbfnFQ.jpeg","https://i.imgur.com/SMWhU2u.jpeg","https://i.imgur.com/OMK0dcX.jpeg","https://i.imgur.com/L2YGyGM.jpeg","https://i.imgur.com/q4bhWso.jpeg","https://i.imgur.com/6PHZ6K7.jpeg","https://i.imgur.com/8nVL9g0.jpeg","https://i.imgur.com/7Ce13Df.jpeg","https://i.imgur.com/8dqnUlT.jpeg","https://i.imgur.com/d27G5pP.jpeg","https://i.imgur.com/9PCvzDB.jpeg","https://i.imgur.com/IB29BRb.jpeg","https://i.imgur.com/J1pQBRl.jpeg","https://i.imgur.com/cUQbFCV.jpeg","https://i.imgur.com/rcXQFUm.jpeg","https://i.imgur.com/6rPOu9I.jpeg","https://i.imgur.com/6PJqVNJ.jpeg",
        ];
     var callback = () => api.sendMessage({body:`🤍🍫 —͟͟͞͞𖣘『𝐀𝐛a͜͡𝐛𝐮٭𝐱͜͡ᴆ 🤍🍫`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };