module.exports.config = {
  name: 'instagram',
  version: '1.1.1',
  hasPermssion: 0,
  credits: '𝐀𝐒𝐈𝐅 𝐱𝟔𝟗',
  description: 'Instagram widgets',
  commandCategory: 'Tool',
  usages: '< infouser|image|video|postuser >',
  cooldowns: 2,
  dependencies: {
      'image-downloader': '',
  }
};
   const fs = require("fs");
const {
  image
} = require('image-downloader');
const {
  createReadStream, unlinkSync, mkdirSync, rmdirSync
} = require('fs-extra');
const {
  get
} = require('axios');
const roof = n => +n != +Math.floor(n) ? +Math.floor(n) + 1: +n;
module.exports.run = async function({
  api, event, args
}) {
  try {
      switch (args[0]) {
          case 'infouser': {
              const res = await get(`https://api.nayan-project.repl.co/instagram/infouser?ig=${args[1]}`),d=__dirname + '/cache/instagram_.png';
              if(z=res.data.full_name, !!z || z == '𝗜𝗡𝗩𝗔𝗟𝗜𝗗_𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘') return api.sendMessage(`→ User information not found`, event.threadID, event.messageID);
              api.sendMessage({
                  body: infoUser(res.data[0]), attachment: await stream_(res.data[0].profile_pic_url_hd,d)
              }, event.threadID, ()=>unlinkSync(d),event.messageID);
          }; break;
          case 'image': {
              const res = await get(`https://apipremium-thanhali.thanhali.repl.co/instagram/download?apikey=ThanhAliVip_1234567890&url=${args[1]}`),d=__dirname + '/cache/instagram_.png';
              api.sendMessage({
                  body: infoImage(res.data,true), attachment: await stream_(res.data.images,d)
              }, event.threadID, ()=>unlinkSync(d),event.messageID);
          }; break;
          case 'video': {
              const res = await get(`https://api-thanhali.thanhali.repl.co/instagram/downloadpost?url=${args[1]}`),d=__dirname + '/cache/instagram_.mp4';
              api.sendMessage({
                  body: infoVideo(res.data,true), attachment: await stream_(res.data.videos,d)
              }, event.threadID, ()=>unlinkSync(d),event.messageID);
          }; break;
          /*case 'searchuser': {
              const res = await get(`https://api-thanhali.thanhali.repl.co/instagram/searchig?ig=${args[1]}`);
              runSearchUser(api, event, res.data.users, 6, +args[2]||0x2-1);
          }; break;*/
          case 'postuser': {
              const res = await get(`https://apipremium-thanhali.thanhali.repl.co/instagram/post?apikey=ThanhAliVip_1234567890&url=${args[1]}`);
              runPostUser(api, event, res.data.edge_owner_to_timeline_media.count, 6, +args[2]||0x1,true,event.senderID);
          }; break;
          default: api.sendMessage({body :`==== 𝙂𝙐𝙄𝘿𝙀 ====\n\n→ 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗶𝗻𝗳𝗼𝘂𝘀𝗲𝗿 < 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 >: 𝙑𝙞𝙚𝙬 𝙪𝙨𝙚𝙧 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣\n→ 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝙄𝙢𝙖𝙜𝙚 < 𝘾𝙤𝙥𝙮 𝙡𝙞𝙣𝙠 >: 𝙐𝙥𝙡𝙤𝙖𝙙 𝙥𝙝𝙤𝙩𝙤𝙨\n→ 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝙑𝙞𝙙𝙚𝙤 < 𝘾𝙤𝙥𝙮 𝙡𝙞𝙣𝙠 >: 𝙏𝙧𝙖𝙣𝙨𝙥𝙤𝙧𝙩 𝙫𝙞𝙙𝙚𝙤\n→ 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 𝙥𝙤𝙨𝙩𝙪𝙨𝙚𝙧 < 𝙐𝙨𝙚𝙧𝙣𝙖𝙢𝙚 >: 𝙎𝙚𝙚 𝙪𝙨𝙚𝙧 𝙥𝙤𝙨𝙩𝙨`,attachment: fs.createReadStream(__dirname + `/cache/ins.jpg`) }, event.threadID,event.messageID);
          };
      }catch(err) {
          api.sendMessage(`${err}`, event.threadID, event.messageID)
      };
  };
  module.exports.handleReply = async function({
      handleReply: $, api, event
  }){
      try {
    if(event.senderID != $.author) return;
   if ($.case == 'searchUser') if(['page', 'list'].includes(event.args[0].toLowerCase())) runSearchUser(api, event, $.data, 6, +event.args[1],$.type,$.author); else return api.sendMessage(`Feedback < page + STT | list + STT >`, event.threadID, event.messageID);
   if ($.case == 'post') if (['page', 'list'].includes(event.args[0].toLowerCase())) runPostUser(api, event, $.data, 6, event.args[1]); else if(isFinite(event.args[0])) {
       const {node={}}=$.data[$.type?'edge_felix_video_timeline':'edge_owner_to_timeline_media'].edges[event.args[0]-0x1],d=__dirname + `/cache/instagram_.${$.type?'mp4':'jpg'}`;
       api.sendMessage({
       body: $.type?infoVideo(node,false):infoImage(node,false), attachment: await stream_(node[$.type?'video_url':'display_url'],d)
   }, event.threadID, ()=>unlinkSync(d),event.messageID)
   };
      }catch(err){
          api.sendMessage(`${err}`, event.threadID, event.messageID);
      };
  };
  module.exports.handleReaction = function({
      handleReaction: $, api, event
  }){
    if (event.userID!=$.author)return;
    runPostUser(api, event, $.data, 6, 0x2-1, $.type?false:true,$.author);
  };
  async function stream_(url, dest) {
      await image({
          url, dest
      });
      return createReadStream(dest);
  };
  function check(a) {
      return a.replace(/null/g, 'No data available').replace(/false/g, 'Not').replace(/true/g, 'Have').replace(/undefined/g, 'Unknown');
  };
  function infoUser(a) {
      return check(`==== 𝙐𝙨𝙚𝙧 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝙉𝙖𝙢𝙚: ${a.full_name}\n→ 𝗨𝗶𝗱: ${a.username}\n→ 𝘽𝙞𝙤𝙜𝙧𝙖𝙥𝙝𝙮: ${a.biography}\n→ 𝙇𝙞𝙣𝙠𝙨: ${a.bio_links.join(', ')}\n→ 𝙀𝙭𝙩𝙚𝙧𝙣𝙖𝙡 𝙡𝙞𝙣𝙠𝙨: ${a.external_url}\n→ 𝙁𝙤𝙡𝙡𝙤𝙬𝙚𝙧𝙨: ${a.follower_count}\n→ 𝙒𝙖𝙩𝙘𝙝𝙞𝙣𝙜: ${a.following_count}\n→ 𝙉𝙪𝙢𝙗𝙚𝙧 𝙤𝙛 𝙥𝙤𝙨𝙩𝙨: ${a.media_count}\n→ 𝙋𝙧𝙞𝙫𝙖𝙩𝙚 𝘼𝙘𝙘𝙤𝙪𝙣𝙩: ${a.is_private}\n→ 𝘼𝙘𝙘𝙤𝙪𝙣𝙩 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣: ${a.is_verified}`);
  };
  function infoImage(a,b) {
     return check(`=== 𝙋𝙝𝙤𝙩𝙤 𝙄𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝙃𝙚𝙖𝙙𝙡𝙞𝙣𝙚𝙨: ${x=a.edge_media_to_caption.edges, x.length == 0 ? null: x[0].node.text}\n→ 𝙇𝙞𝙠𝙚𝙨: ${a.edge_media_preview_like.count}\n→ 𝘾𝙤𝙢𝙢𝙚𝙣𝙩𝙨: ${a[!b?'edge_media_to_comment':'edge_media_to_parent_comment'].count}${b?`\n→ 𝙉𝙖𝙢𝙚: ${a.owner.full_name}\n→ 𝗜𝗗: ${a.owner.username}\n→ 𝙁𝙤𝙡𝙡𝙤𝙬𝙚𝙧𝙨: ${a.owner.edge_followed_by.count}`:``}`);
  };
  function infoVideo(a,b) {
      return check(`=== 𝙑𝙞𝙙𝙚𝙤 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣 ====\n━━━━━━━━━━━━━━━━━━\n\n→ 𝙃𝙚𝙖𝙙𝙡𝙞𝙣𝙚: ${x=a.edge_media_to_caption.edges, x.length == 0 ? null: x[0].node.text}\n→ 𝙇𝙞𝙠𝙚𝙨: ${a.edge_media_preview_like.count}\n→ 𝙑𝙞𝙚𝙬𝙨: ${a.video_view_count}${b?`\n→ 𝙑𝙞𝙙𝙚𝙤 𝙥𝙡𝙖𝙮𝙨: ${a.video_play_count}\n→ 𝘾𝙤𝙢𝙢𝙚𝙣𝙩𝙨: ${a.edge_media_to_parent_comment.count}`:``}\n→ 𝙏𝙞𝙢𝙚: ${a.video_duration.toFixed()}s${b?`\n→ 𝙉𝙖𝙢𝙚: ${a.owner.full_name}\n→ 𝗜𝗗: ${a.owner.username}\n→ 𝙉𝙪𝙢𝙗𝙚𝙧 𝙊𝙛 𝙁𝙤𝙡𝙡𝙤𝙬𝙚𝙧𝙨: ${a.owner.edge_followed_by.count}`:``}`);
  };
 /* async function runSearchUser(a,b,c,d,e,g){
     var txt = '', i=(d*e)-d,at=new Array(),l=c.length,dir=__dirname+`/cache/instagram_dir_${b.messageID}`;mkdirSync(dir);
     for(;i++<(l<=d*e?l:d*e);){txt += `${i}. ${c[i].user.full_name}\n • UserName: ${c[i].user.username}\n\n`;at.push(await stream_(c[i].user.profile_pic_url,dir+`/instagram_${i}.jpg`));};
     txt += `____\n Trang[${e}/${roof(c.length/d)}]\nReply [trang | list + STT]`; 
     a.sendMessage({body:check(txt),attachment:at}, b.threadID, (err, data) => {global.client.handleReply.push({
         name: 'instagram', messageID: data.messageID, author: b.senderID, data: c, 'case': 'searchUser'
     }) ;rmdirSync(dir, {recursive: true})},b.messageID);
  };*/
async function runPostUser(a,b,c,d,e,g,h){
     var txt='',i=(d*e)-d,n=c[g?'edge_felix_video_timeline':'edge_owner_to_timeline_media'].edges,l=n.length,iv=g?'video':'image',o,at=[],dir=__dirname+`/cache/instagram_dir_${b.messageID}`;mkdirSync(dir);
     for (;i++<(l<=d*e?l:d*e);) {
     var x=n[i-1].node.edge_media_to_caption.edges||[];
     txt+=`${i}. ${!x||x==0||!x[0].node||!x[0].node.text?null:x[0].node.text}${g?`(${n[i-1].node.video_duration.toFixed()}s)`:``}\n`;at.push(await stream_(n[i-1].node['thumbnail_src'],dir+`/instagram_${i-1}.jpg`));
     };
     txt+=`\nPage < ${e}/${roof(n.length/d)} >\n\n- Drop emotions to move through the list ${g?'image':'video'}\n- < Feedback > + < trang|list + STT > to transfer tab\n- < Feedback + STT > to see ${iv}`;
     a.sendMessage({body:check(txt),attachment:at}, b.threadID, (err, data) => {
     o={
         name: 'instagram', messageID: data.messageID, author: h, data: c, 'case': 'post', type: g
     }; global.client.handleReply.push(o),global.client.handleReaction.push(o);
     rmdirSync(dir, {recursive: true})
     }, b.messageID);
  };