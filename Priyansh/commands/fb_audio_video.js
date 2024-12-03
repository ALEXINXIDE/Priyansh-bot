module.exports.config = {
    name: "fb",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Zera",
    description: "Download video or audio from facebook",
  commandCategory: "Media",
  usages: "audio/video [ Link ]",
  cooldowns: 0
};
module.exports.run = async function ({api,event,args})  {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
try { 
  if(args[0] == 'audio'){
        api.sendMessage(`Your request is being processing ✅\n\nPlease wait few minutes ☺️`, event.threadID, (err, info) => 
            
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 20000),event.messageID);
        const path = __dirname+`/cache/2.mp3`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `Download Successful 🥱\n\nএই লো তোর অডিও 😒`, 
    attachment: fs.createReadStream(path)}, event.threadID, () => fs.unlinkSync(path),event.messageID);
    }; 
  }catch {return api.sendMessage(`Unable to process the request ❌`,event.threadID,event.messageID)}
    try { 
      if(args[0] == 'video'){
            api.sendMessage(`Your request is being processing ✅\n\nPlease wait few minutes ☺️`, event.threadID, (err, info) =>


    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 20000),event.messageID);
            const path1 = __dirname+`/cache/1.mp4`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path1, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `Download Successful 🥱\n\nএই লো তোর ভিডিও 😒`, 
    attachment: fs.createReadStream(path1)}, event.threadID, () => fs.unlinkSync(path1),event.messageID);
    }; 
  }catch {return api.sendMessage(`Unable to process the request ❌`,event.threadID,event.messageID)}
}