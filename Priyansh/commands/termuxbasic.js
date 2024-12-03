module.exports.config = {
  name: "termuxbasic",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗", //don't change the credits please
  description: "Termux Basic setup commands.",
  commandCategory: "Tool",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/O3MAiKX.jpg",
            "https://i.imgur.com/IWUMdoL.jpg",

"https://i.imgur.com/3TOknP1.jpg"];var callback = () => api.sendMessage({body:`🌿termux setup All pkig🌿

apt update
apt upgrade
apt update
apt upgrade
pkg install python -y
pkg install python2 -y
pkg install git -y
pkg install figlet -y
pkg install cmatrix -y
pkg install toilet -y
pkg install nano -y
pkg install php 
pip2 install requests
pip install future
apt install ruby
apt install openssh
apt install wget
apt install curl
pkg install python
pkg install python2
pkg install bash
pkg install php
pkg install perl
pkg inatall curl
pkg install ruby
pkg install nano
pkg install ngrok
pkg install nodejs
pkg install nmap
pkg install wget
pkg install grep
pkg install golang
pkg install openssh
pkg install vim
pkg install w3m
pkg install toilet
pkg install w3m
pkg install git
pkg Install bs4
pkg Install npm
pkg Install emacs
pkg Install micro
pkg Install figlet
pkg Install cmatrix
pkg Install clang
pkg Install coreutils
pkg Install tqdm
pkg Install gnupg
pkg Install swi-prolog
pkg Install clib
pkg Install rdf
pkg Install chr
pkg Install http
pkg Install pcre
pkg Install pengines
pkg Install protobufs
pkg Install sgml
pkg Install yaml
pkg Install zlib
pkg Install ssl
pkg Install semweb
pkg Install bdb
pkg Install odbc
pkg Install space
pkg Install sl
pkg Install top
pkg install sudo
pkg install tsu
pip install requests
 pip install mechanize
 pip install tqdm
 pip install bs4

☘️Mian Amir🌺`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };