module.exports.config = {
  name: "messi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy simp4Chaeyoung",
  description: "Messi Pictures",
  commandCategory: "Random - Image",
  cooldowns: 1,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.postimg.cc/SssnGdK1/images-1.jpg",
"https://i.postimg.cc/yYSvPXgN/images-2.jpg",
"https://i.postimg.cc/kGZ9dFq4/images-3.jpg",
"https://i.postimg.cc/h4xqJxD9/images-4.jpg",
"https://i.postimg.cc/zBxHKMSc/images-5.jpg",
"https://i.postimg.cc/XJBXBJqp/images-6.jpg",
"https://i.postimg.cc/qRJjpPvb/images-7.jpg",
"https://i.postimg.cc/NfdynZ3G/images-8.jpg",
"https://i.postimg.cc/Hn7SNQxd/images-9.jpg",
"https://i.postimg.cc/bYTHzC7W/images-10.jpg",
"https://i.postimg.cc/SxrJ93rb/images-11.jpg",
"https://i.postimg.cc/mD3qZ34j/images-12.jpg",
"https://i.postimg.cc/DyRcDJkw/images-13.jpg",
"https://i.postimg.cc/CMXDM3vv/images-14.jpg",
"https://i.postimg.cc/vZdVfWwf/images-15.jpg",
"https://i.postimg.cc/qRYtRKGt/images-16.jpg",
"https://i.postimg.cc/CxHc9GGs/download-17.jpg",
"https://i.postimg.cc/DzpPKB8L/download-18.jpg",
"https://i.postimg.cc/BnQFQ2Wg/download-19.jpg",
"https://i.postimg.cc/cLbvxjBx/download-20.jpg",

    
  ];
	 var callback = () => api.sendMessage({body: `❤️‍🔥 The King of Football 😈`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };