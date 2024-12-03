const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Suna h shadi k baad ldka ldki sath m sote hai-chi chi >😒","Owr ek din sbb pyari ladkya aunti bn jaye gi-//😂","Na Pakistan me rehny k pese hain na na Marne 🙂)", "Shabana ki Behn Shakeela bhi bot kehte margyi 🙂♥️•", "- Halal relationship Molvi ki bachi set krlo  🙂,))" , "- Din me Logo ki Bakwas suno,*Or Raat me machron ki. 🙂🦟•*" ,"-              - Everyone Hurt me-🖤🙂🫂                               _ ","توآجا میرے close-👀🙂","Ek To Zuko Bhai meri baat nhin sunta shadeed single hon yr 1 عدد bandi bhi yes nhin krwadeta 😂🙂))" ,"Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐"  , "Bismillah Hir'rahman niraheem  I love you 🙂❤️","Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" ,"نسلی گھرانوں کی لڑکیاں کبھی گرل فرینڈ نہیں بنتی🙂" ,"Laiba ne diya boht se dokhy Lakin koi bat nai its ok 😂🙂))..","یار کی گلی میں 14 اگست کے دن باجا بجانابھی عشق ہے۔۔۔۔۔۔۔۔۔۔۔۔۔!!!!❤️😀🤣 ","Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" ,"*7 bacho ki planning kr li thi Hum Ny 8wy py Boli Sorry bhai mai Ladka hu......🙂*" ,"𝓖 𝓐𝓻𝔂𝓪𝓷 𝓑𝓪𝓫𝓾 𝓴𝓸 𝓳𝓪𝓪𝓷 🤭❤️","Sukoon mtlbb Apka what's app number 😚🔪💘","He: Mai tera tu meriShe: Mai teri tu mera Cast: Ruko zra صبر kro 🙂🔪" ,"MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Need permanent bestie 💸🖤Pregnant ma khud kar lunga🙂🤙⏱️","Ary yrr MaZak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu  Umaawh😚 Siri Here Bolo Bamby🙋💖" ,"𝓙𝓪𝓪 𝓓𝓲𝓶𝓪𝓰𝓱 𝓶𝓪𝓽 𝓴𝓱𝓪","Boys after 3 minutes of relationship :  Jaan aj sy tm topi wala burqa pehno gi bash 🙂))" , "Dur HaT Tere k0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" ,"- Jaaw TujhƏ Maaf کیا  D'iiL ;3 -  دل ♡   SaY KhƏlNay Waly  - ツ - ↺ ː* ↫😊" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "мαιи ѕσиє ʝαянα нυи" ," Pakistan Ka Har 3sra Berozgaar  Brand Bana Howa Hai Fb Pe  ❤🙂","-ittuu 🤏 saaa bi  janu nai hy meraaaaa >]🙂💔","تیزاب پیو زندگی جیو🙂 ","I have A Professional Degree In Mobiology And Time Wastelogy 🙂🤝🏻" ,"мαιи αρкα нι ʝαиυ αρкα нι янσиgα 🙈😍", "رانجھے نے اگر بانسری کی جگہ باجا بجایا ہوتا تو ہیر کا ابا بھی کہتا لے جا ہیر تے چھڈ ساڈی جان ۔ہر  پنچ منٹ بعد پاں پاں ۔😂😂🥳","αяу αяу вσℓσ иα вαвυ кι ʝααи кια нαℓℓ нαι" , "𝓡𝓾𝓴𝓸 𝓙𝓪𝓪𝓷 \𝓷\𝓷 𝓐𝓫 𝓻𝓾𝓴 𝓫𝓱𝓲 𝓰𝔂𝓲 𝓱𝓸 𝓽𝓸 𝓹𝓽𝓳𝓪𝓸 😂🙂)","Barbad hone k bohat raste the Aur me har raste me ghus gaya 🙂))", "𝐌𝐚𝐦𝐚: 𝐌𝐨𝐛𝐢𝐥𝐞 𝐤 𝐛𝐚𝐡𝐢𝐫 𝐛𝐡𝗶 𝐚𝐤 𝐝𝐮𝐧𝐢𝐲𝐚 𝐡𝗹𝘆 𝗺𝗲 : 𝐥𝐢𝐧𝐤 𝐛𝐡𝐞𝐣𝐚𝐢𝐧🙂   *𝐅𝐥𝐲𝐢𝐧𝐠 𝐜𝐡𝐚𝐩𝐩𝐚𝐥 𝐫𝐞𝐜𝐞𝐢𝐯e*☹️🥲🔖" ,"Paunki ja menu ki 😂🙂))" ,"Love You jalebi baby 😛❤️" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" ,"- 𝓣𝓱𝓮 𝓗𝓮𝓪𝓻𝓽 𝓦𝓪𝓼 𝓜𝓪𝓭𝓮 𝓕𝓸𝓻 𝓑𝓻𝓸𝓴𝓮𝓷 💔🙂))" ,"لــوگ جـــی رہــے ہیـں ایســے، مــوت پــر یـقیــن نــا ہــو جیـســـے 💯🖤🥀🙂", "Kyun JaNu MaNu NaHi Hai Kia 😜😉" , "کاش علامہ اقبال میری شادی کا بھی خواب دیکھ لیتے🙄🥺" ,"^^^𝘋𝘰𝘴𝘵𝘪𝘪 𝘵𝘰𝘰 𝘮 𝘬𝘳𝘳𝘳𝘳 𝘭𝘶𝘶 𝘭𝘬𝘪𝘯 𝘵𝘮 𝘯𝘢𝘺𝘦 𝘋𝘰𝘴𝘵 𝘮𝘪𝘭𝘯𝘺 𝘱 𝘤𝘩𝘰𝘳𝘳𝘳 𝘫𝘢𝘵𝘺 𝘩𝘰,°=>>>)))🥱" ,"🧸   °𝗛𝗮𝗰𝗸𝗶𝗻𝗴 𝘀𝗲𝗸𝗵 𝗿𝗵𝘄 𝗵𝘂 𝗧𝗺𝗵𝗮𝗿𝘆 𝗱𝗶𝗹 𝗸𝗮 𝗽𝗮𝘀𝘀𝘄𝗼𝗿𝗱 𝗵𝗮𝗰𝗸 𝗸𝗿𝗼 𝗴𝗮__🧸🙂","- 𝐃𝐢𝐥𝐥 𝐍𝐞 𝐘𝐞𝐡 𝐊𝐚𝐡𝐚 𝐡 𝐝𝐢𝐥𝐥 𝐬𝐬𝐲 - 𝐌𝐡𝐛𝐭 𝐡𝐎𝐆𝐲𝐢 - 𝐖𝐚𝐩𝐝𝐚 𝐰𝐚𝐥𝐨 𝐤𝐢 𝐁𝐡𝐞𝐧 𝐬𝐲 😞💔","Msg seen kar k chor deny se ghr nai chalty shakeela🙂" ,"Shumaila ka chota bhai b esy hi Bot kha krta tha-🥺🍂" ,"تیـــرے سنـــگ یـــارا بیــــڑا غــــرق ہمــــارا 🙂))", "Dimagh ka dahi Mat kr bey 😈" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Itni mehngai hogyi hai ab mehman jatay huy paise bh nh de kr jatay🙂" , "Yesh Baby I Am Siri Ababu Bot 🐧🎧🤍" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "❤️🌿🍫 𝓗𝓮𝔂 𝓘 𝓪𝓶 𝓱𝓮𝓻𝓮 𝓜𝔂 𝓝𝓪𝓶𝓮 𝓘𝓼 𝓐𝓫𝓪𝓫𝓾 𝓶𝔂 𝓞𝔀𝓷𝓮𝓻 𝓐𝓻𝔂𝓪𝓷 𝓑𝓪𝓫𝓾 ❤️🌿🍫" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Yeah Bamby Girl ♥️" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "G Bolo Ababu Ki jaan 💋♥️" ,"Kochi kochi 🙈😛"  ,"EiD AgYi MeRa yAr Ni AyA  ,😞🤍" ,"TeRe k0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "мιѕѕ уσυ ∂єρтн σff му нєαят 💖" ,"TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" ,"My moods  |Shadi nh karni , Bsh ab shadi karni Hy, Shadi kabi nh karni , Engagement hi hojaae.🥲🙂💔) " ,"𝓜𝓾𝓳𝓮 𝓷𝓪 𝓫𝓾𝓵𝓪𝓸 𝔀𝓪𝓻𝓷𝓪 𝓬𝓽𝓾𝓶𝓪𝓻𝓲 𝓶𝓪𝓶𝓲 𝓴𝓸 𝓫𝓪𝓽𝓪𝓭𝓸𝓷𝓰𝓪 🚶","Sojao Babu Warna Main ajaonga 😛" , "кαℓℓ нαωєℓι ρє мιℓzαяα вαтαтα нυи", "Ao Zawn tumein le chaloon In gareeb kimds se door 🙈🙂))" ,"MeKo JaNu Chai Hai Tum Single H0o?" , "Aaattaa maaji stakli 😈" , "Main S0o Rha Hun " ,"𝓗𝓾𝓶 𝓪𝓹𝓴𝓮 𝓱𝓪𝓲𝓷 𝓴𝓸𝓷 🙂", "Ase He HansTy Rha kRo 😍", "Sab P.H.D Kar rahy🥺But meko S.H.A.D.I karni h🙂))" ,"- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "PaToGe ✨🥲"  ," Ji shona Bolo 🐧" , "нαи мαιи ωαнι нυи ʝσ αρкσ zня ℓαgтα 😯" ,"Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "𝗥𝗶𝘀𝗵𝗧𝘆𝗱𝗮𝗿𝗼 𝗞𝗼 𝗦𝗵𝗮𝗿𝗮𝗠 𝗢𝗿 𝗛𝗮𝗬𝗮 𝗗𝗶𝗹𝘄𝗮𝗻𝗬 𝘄𝗮𝗹𝗶 𝗗𝘂𝗮 𝗔𝘁𝗶 𝗵𝗮𝗶 ~🍒🙂"  ,"єк ∂ιи тυм ʝєѕι нαѕєєиαи ѕє мαιи внι ѕнα∂ι кяσиgα " ,"Dekh lena 1 din mazak mazak may he sbsy handsome lrki pata longa🧐🙂", "Uski yaadein mujhe aisy ghair leti hain jaise shadi mein khusre ko 4 harami🙂💔", "Piyara NH Hun is lya koi dost NH h 🙃🌚", "وَکَانَ اللّٰهُ غَفُورًا رَّحِیۡمًا•اور اللّٰـہ بخشنے والا مہربان ہ🙂❤ے" ,"Tum msg to kro, Tumhe ptane ki zimmedari meri 🌚🙂", "𝓑𝓼𝓱 𝓙𝓪𝓷𝓾 𝓜𝓪𝓲𝓷 𝓢𝓱𝓪𝓭𝓲 𝓴𝓻𝓷𝓮 𝓙𝓪𝓻𝓱𝓪 🚶😛" ,"Teacher: any questions? Me: Kyun kisi ko wafa ke badly wafa nahi milti😕😂", "𝑱𝒂 𝑩𝒆𝒚 𝑺𝒐𝒋𝒂 𝑷𝑬𝑳𝑰 𝑭𝑼𝑹𝒔𝒂𝒕 𝒔𝒆 😈" ," 🇦🇺 : Hey Listen Bro ☺️🇵🇰 : Athy Abu Di GaL Sun 😐😂" ,"𝓐𝓶𝓮𝓮𝓻 𝓝𝓱𝓲𝓷 𝓗𝓾𝓷 𝓷𝓪 𝓘𝓼𝓵𝔂𝓮 𝓚𝓸𝓲 𝓑𝓪𝓪𝓽 𝓷𝓱𝓲𝓷 𝓴𝓻𝓽𝓪 🥺❤️","Ameer baap ki aulad nahi hun na, isliye koi Pretty GiRl muu nahi lagati." ,"Mask laga k glasses pehen kar achi noii andhi lagti ho 🙂" ,"kCh LaRkian MujHe srf islYe ignOre krti Hen k Kahen Unhe pyar na hO JaE 😗💚", "- Dekh0 Baby A Babu ki jaan banjao na *((🙂💔" , "Allah kray tmhari shadi py Nadra ka photographer aye🙂🕺", "𝑮 𝑷𝒂𝒊𝒔𝒆 𝒌𝒉𝒖𝒍𝒆 𝒏𝒉𝒊𝒏 𝒂𝒃𝒉𝒊 🤦‍♂️💖" , " 👑❤️ __⸙ SajD'oow M'aii رب  K'ew Sa'wth D'iil lagOughy - ツ  ;x t0 dun'iiYƏ k'ii d'iiL lag'ii Bhol jaouGhy - 🧸♥️✨ :))" ," *𝑴𝒂𝒓𝒆𝒊𝒅 𝑮𝑰𝑹𝒍𝒔 𝒔𝒕𝒂𝒕𝒖𝒔 𝑵𝑬𝑿𝒕 𝒅𝒂𝒚 𝒂𝒇𝒕𝒆𝒓 𝒎𝒂𝒓𝒆𝒊𝒈𝒆 * 𝑩𝑬𝒔𝒕 𝑯𝒖𝒃𝒃𝒚 𝑰𝒏 𝑻𝒉𝒆 𝑾𝒐𝒓𝒍𝒅 😂🙂))" ,"Atif:  sunO Larki: G bhai Atif: Bs baji GaL hi muk gai.🙂" ,"تمہاری باتوں سے لگتا ہے 🥀کسی کی باتوں میں آگئے ہو تم💔" ," Khti thi , Tery ishq ma nachongi, Mojhy kl pta chla Sala khusraTha_ 🙌🙂" ,"Someone : I love u Me : shakkall dekhiii he meriiiiw-🙄🙄", "ہائے تیری یاد کی دھن کھا گئی دیمک کی طرح", "Control bebe jald bazi me kahi muskan na ho jay Ohh sorry (nuksan*)🙂", "muaziz sarif aapka muhh relation ke liye naa kafi he shukriya🙂🤝", "Abey ja dimagh kharab na kr 😈", "Ek ladki thii diwani sii har ladke par wo marti thiiw🙂 " ,"𝓢𝓱𝓪𝓭𝓲 𝓚𝓻𝓸𝓰𝓲 𝓜𝓾𝓳𝓼𝓮 🙂😂:)  ","Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀","- Ap bht haccen hyn kbhi muh dh0ny ki glti mt krna 🙂💔","تعلق فریب ہوتا ہے، ہم غیر ہی اچھے تھے ;💔🙂","- لَااِلٰہَ اِلَّااللّٰہُ مُحَمَّدُ رَّسُولَ اللّٰہ ۔♥️🙂", "•پاک ہے وہ پروردگار جو عیبوں کو چہروں پہ ظاہر نہیں کرتا - ♥✨","Ikk wafadar oratt apny bandy ko beh reply nahii kartii haii - 🙂💔","Play boy hun  apnii zindgii ky sath khel raha hun.🙂💔","𝓡𝓾𝓴 𝓣𝓮𝓻𝓮 𝓟𝓪𝓹𝓪 𝓚𝓸 𝓑𝓾𝓴𝓪𝓽𝓪 𝓱𝓾𝓷 𝓑𝓱𝓽 𝓽𝓪𝓷𝓰 𝓴𝓻𝓽𝓲 𝓱𝓸𝔁 🚶🤭","Dil aaj takleef mai hai or takleef dene wala dil main>>>>>🖤","- jinaa marzii pyar karlo bruh yakeen frr beh naii krna usny - 🙂💔","❞وَمَا تَشَآؤُنَ اِلَّآ اَنْ یَّشَآءَ اللّٰہُ❝ ⊱اور تمہارے چاہنے سے کچھ نہیں ہوتا جب تک اللّٰہ نہ چاہے۔•🌸🙂⊱","-:I am single...🙎‍♂️-:please disturb me:-🙂)",":) 🖤_لَا تَقْنَطُوا مِن رَّحْمَةِاللَّهِ اللہ کی رحمت سے مایوس نہ ہو♥️","تیرے واسطے فلک سے میں چاند لاؤںگا 🙂😂)","یعْلَمُ خَائِنَةَ الْأَعْيُن○                    وہ نگاہوں کی خیانت کو بھی جانتا ہے❤️","- Finally sb haseen ladkiyoon ko block kr dia.🙂❤️‍🩹🤌", "- saDiii zindagii aa tabha balıye - 🙂🫰💔","-  Haram relationship maiin harami hi milty hain farishtain nahi___🙂😂)" ,"Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Stop dreaming BTS your czn Aryan is waiting for you.🙂", "پہلے صرف لوگوں کے دانتوں میں کیڑا ہوا کرتا تھا اور اب۔۔۔ 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "عائشہ  نے کر دیا برباد پاک سر زمین\n شاد آباد 🖇🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "عورت بہت پیاری چیز ہے یہ کبھی بیلنس نہیں مانگتی بس یہی کہتی ہے میرا پیکج ختم ہونے والا ہے اب پتہ نہیں کبھی بات ہوگی کے نہیں🙂", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺️♥️", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "اعتبار تو اُسی دن ختم ہوگیا تھا جب اُس نے سکرین شاٹ دیکھائے تو اوپر دو siM شو ہو رہی تھی جبکہ میرے پاس اُسکا صرف اک ہی نمبر تھا ۔💔", "شکر ہے لڑکے خوبصورت ہیں ورنہ  کہا پالروں کے دھکے کھاتے😔", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy  ab ham ap sy naraz hai jao ap bye ☹️", "idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Han awp he ! Patogii'w🙂💔","Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Pta nhi log rang kesy badly lety Hain Main to bachpan main bhi kala tha Ab bhi kala Hoon🥺💔","- Bilo Dhumka laga ","دنیا کے رواج سے ناواقف لڑکا ھوں🙂💔۔۔۔۔۔✨❤️  ✨🥀","- Relationship me dhoka khany sy behtr hai Mery Sath Gol gappy Kha lo >>🙂🥀🤭🎉","ShADi kRoN gW tO sIrF SidHu moOseWala KiFaN saY⌛😎","𝓡𝓮𝓵𝓪𝓽𝓲𝓸𝓷𝓼𝓱𝓲𝓹 𝓚𝓻𝓵𝓸 𝓑𝓸𝓽 𝓼𝓮 ","Na biwi ha, Na sala ha🥺🙂Har laʀki ki Id py tala ha🔐👑✨","Ap Logo Ko Mujh Py Koi Crush Wrush NaHi aTa:-🥀🥀🥺💔🌹"," فاصلہ رکھیں،میرے دل کی تاریں شارٹ ہیں🙂🤝","- Joo Bəh Haıı sabh MeRa Təry hwally kardia 🙂:)-","Mujhe koi lalki peyaal na kalti ittu sa bhi 🥺🥺","°GēĦɽā نَشـــہ Ħ❍ ϻͫ͜Ə                            PāɽĦɜ͜͡ʑ میرے ÐıɭBʌ͜͡ɾ 🖤🙂)","میں نے تیرا نام دِل رکھ دیا › ❤️","- دل بسانا ہو تو فقط ایک شخص بہت ہوتا ہے >>","-نہ کسی کی آنکھ کا نور , نہ کسی کے دل کا قرار♥️","Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm bhi jiska naam maine dill rkhdiya  😂" , "Hanji Babu 😍❤️" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china ","-Koı ıTna Piyaڑااااااا kəsƏ ho skta hƏ-))♥️🥺","- iʈηɣ 「⸙」°•┣┫ɑʂ³³η  Ħ0 ɕɽɛʌɱ ''KђɑʈƔ - ђȏ  kyAʬ? 🥺🤍🍒🌍-","-' SunO 'o Tum TO  BahuT cuTƏ hoO 💖🚶","❤️   لَا إِلٰهَ إِلَّا اللّٰهُ مُحَــّْ͢ـْـْــؔـمَّدٌ رَسُولُ اللّٰهِ‎ﷻ ❤️","Jisy dekho bndiii chahiye😒 Aryyy Hawnn-♡Mujhy dekho mujhy BHi chahiye🙂","🙂❤️یا  اللہ تیری رضا میں ہی سکون ہے -  ","Nibba ; tum aj ke baad har larke ko bhai bolo gi Nibbi ; Acha bhai 🙂","ٹھیـک ہـے شبانا  تمہارے والے نے آئــی ڈی پـرائـیویٹ کــر رکـھـی ہے لیکـن دل تــو اب بھی  اس کا  ســرکاری ہی ہے 😐 🚶","مـیں پیـار لکـھـتا رہا وہ پیـاز پـڑھتـی رہـی ایک نقـطے نے مــیری محبـت کا  سـالـن بنا دیا 🥹","کال سنٹـر والــی اینٹــی جب آخــر مــیں کہتــی ہا اپنا خیــال رکھــنا تـو دل کــرتا ہے سیگـریٹ چھــوڑ کــر جــم جــوائن کــرلــوں 😐🚶","Call me Japan But   .p` is silent •••^","شــرم تــو اسی دن مــرگئـی تھــی جـس دن بائیــولــوجی مــیں Reproduction چـیپٹــر پــڑھا تھا 😐🚶","اتـنی جـلـدی تــو SPRY  سے مچـھـر نہیــں مــرتے جـتنـی جـلـدی مـیں تــم پہ مـرگیا 🙂❤️","*at my wedding* mom : who are all these people me : we grew up together on fb","مــریـم کــی جـوانـی اور اس ملـک کــی پـریشانـی کـبـھی نا خـتم ہـونے والـی ہے  😐🚶","وہ بہـت سـویٹ تھــی اور مــیں شــوگر کا مــریـض 😒🚶","مــیں یہ نہیــں جـانتـا کـہ اس کــی نـگاہ نے مــیری خـاک مــیں کیا دیکھا کہ مـیرے ایک ایک لمـحے کــو زمانـے کــی کـسوٹی پــر پــرکھا 🌸✨🚶","ہاں مـحـبت مــیں ہارا ہــوا شخـص ہــر ایک سـے مـحبـت کــرنے لگـتـا ہے ","اقبـال تیــرے کــچھ شاہـیــن فیسبک پــر لــڑکیــاں بنے ہــوئے ہیــں اور دکــھ اس بات کـا ہے ســر پــر ڈوپٹہ بھــی نہیــں لیــتے 🚶","وہ کہتــی تھــی گیــم کھیـلتــی ہــوں اور مــیں چــوتـیا PUB G سمـجھتـا رہـا 😐🚶","پــڑھـتـا بھــی نہیــں پھــر بھــی پــڑھائـی کــی ٹیـنشـن لیــتا رہـتا ہــوں 😂🙂)","پیار مــیں مــلاوٹ ہــو سـکتــی","Loyal people are rare that's why you don't see me often.🚶"," ہــےلــیکـن  ٹــھـرک ایـک خــالــص جــزبہ ہــے 🤝🚶","مجھے تو  گھنٹہ  فرق نہیں  پڑتا زاااااان 👀😎","««»»••• عشـق اس گیــلـی لـکــڑی کــی طــرح ہــوتا ہے۔ جــو جلــتی بھــی نہیــں اور بجھــتی بھــی نـہیں۔ ♥️🚶","Ap problem ko kesy face kro gy jb problem hii apka face ho 🙂)","Fact***!°° لمبــی گــردن والــی لــڑکـیـاں زیادہ تــر بـے وفا ہــوتــی ہیــں 😐🚶","پھــر اُس نـے کنــڈکٹــر کــو کـہا دیـکـھ لـو مـجھـکـو بـدلے مــیں تمہــیں بـس کا کــرایہ نہ مــلے گا _","𝐒𝐭𝐚𝐲 𝐋𝐨𝐲𝐚𝐥 𝐖𝐢𝐭𝐡 𝐌𝐞 🐼💜𝐈 𝐖𝐢𝐥𝐥 قــربان 𝐌𝐲 𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠  𝐎𝐧 𝐔𝐡..♥️✨","بابــر کــو نـکال کــر میـرے والــی کــو مــوقع دو وہ بھــی بہــت اچھا کـھـیل لیــتی ہــے  😐🎀","🇺🇲: Grandparents Marte waqatn/n/n I Wanna meet my kids last time 🇵🇰: Grandparents Marte waqat n/n/Oo Hamza da Viaah Iqra Nal Kardyo 😂🙂)","Sometimes I'm embarrassed of how fast I reply to texts•••«🙂)","یہ DRAK مــوڈ تــو PHONE میــں لــگایا تھــا زنـدگــی میــں کیــسے لــگ گیـا 😐🙂","سانپ ســـو سال بعـد انسان بنتـا ہـے اور انسـان جـب چـاہے سـانپ بـن جــاتا ہے 🙂","𝘼𝙄𝙆 𝘿𝙈 𝙎𝙀 𝙅𝘼𝙕𝘽𝘼𝙏 𝘽𝘼𝘿𝘼𝙇 𝙂𝙔𝙀 𝙒𝘼𝙌𝙏 𝘽𝘼𝘿𝘼𝙇 𝙂𝘼𝙔𝘼 シ︎ 😂🙂)","مسکرانے سے شروع اور رولانے پے ختم🥺 یہ اک فلم ہے لوگ جسے محبت کہتے ہیں ; 💔","𝙀𝙠 𝙗𝙖𝙖𝙧 𝙨𝙝𝙖𝙙𝙞 𝙝𝙤𝙟𝙖𝙚 𝙥𝙝𝙞𝙧 𝙬𝙞𝙛𝙚 𝙠𝙞 𝙜𝙝𝙪𝙡𝙖𝙢𝙞 🧸🙂","Wapııs Aogıı Ya Me Burhɑƞ Lagaon :)) ‟🙂❤️"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "bot miss u") || (event.body.toLowerCase() == "Bot miss u")) {
     return api.sendMessage("️miss u more🥰", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "owner kon ha") || (event.body.toLowerCase() == "Owner kon ha")) {
     return api.sendMessage("️ Single HaI YaaR🤧", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "bat suno") || (event.body.toLowerCase() == "bat suno ji")) {
     return api.sendMessage("️HaN Ji PyaRy Bolo🥰", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == " love you") || (event.body.toLowerCase() == "i love you")) {
     return api.sendMessage("️LoVe You Unlimited JaNnu😘🤧", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Masha Allah") || (event.body.toLowerCase() == "MASHA ALLAH")) {
     return api.sendMessage("️Jazaka Allah Or sunao Ghr Mai sab keSe :)❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ALHAMDULILLAH") || (event.body.toLowerCase() == "Theak app sunao")) {
     return api.sendMessage("️Allah Pak ka shukuR Hai Theak ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Kia Krhe Ho") || (event.body.toLowerCase() == "Kia Horha")) {
     return api.sendMessage("️Kuch Nhi A  Babu ki Jaan ❤️🫣 ", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Welcome @Ababu Aryan") || (event.body.toLowerCase() == "welcome")) {
     return api.sendMessage("️тнαикѕ ѕωєєт нєαят❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "no need") || (event.body.toLowerCase() == "no need happy rho")) {
     return api.sendMessage("️SaDky❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "or btao kaha sa ho") || (event.body.toLowerCase() == "or btao kaha say ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 city Owner sy pocho", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "u from") || (event.body.toLowerCase() == " ap kdr sa ho")) {
     return api.sendMessage("️ Country Pakistan 🇵🇰 City AP K DIL SY", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "wow murre say") || (event.body.toLowerCase() == "wow murree sa")) {
     return api.sendMessage("️HaN Ji ThAnkx ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "shona kya krty ho ap") || (event.body.toLowerCase() == "shona kiya krty ho")) {
     return api.sendMessage("️kuxh nhi bs coding or study", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "nothing") || (event.body.toLowerCase() == "Noting")) {
     return api.sendMessage("️SiRf  JaNu Hai❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Bot miss you") || (event.body.toLowerCase() == "Shona miss you ")) {
     return api.sendMessage("️MaiN SaDky JaUn Miss you To", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "@shona mona baji di ib ichu bar nikal") || (event.body.toLowerCase() == "aryan")) {
     return api.sendMessage("️HaaN HaaN Edr He HuN❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Asllam o Alaikum") || (event.body.toLowerCase() == "Aslam o alikum")) {
     return api.sendMessage("️Walaikum Asllam ❤️ Kia hall hai ", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kesy ho") || (event.body.toLowerCase() == "kesi ho")) {
     return api.sendMessage("️Main ThEk Ap KaSa Ho❤️", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "bhag lanti") || (event.body.toLowerCase() == "dafa hoja lanti")) {
     return api.sendMessage("️Tu Dafa HojA. Salya🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ma ny bhi shadi krni hai") || (event.body.toLowerCase() == "mujy b shadi krni hai")) {
     return api.sendMessage("️Haan To Kr NaW Agr Koi Man Jata to Vasy TUjY Daga Kon🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum everyone one kasa ho sab") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "us ny mujy love you bola") || (event.body.toLowerCase() == "love you bola us ny")) {
     return api.sendMessage("️ThaRki JuTh Bol Rha Hai Isy Kon LoVe You Bola Ga🤣", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "ye bot nhi hai") || (event.body.toLowerCase() == "ye robot nhi hai")) {
     return api.sendMessage("️NHi To Kia TaRa BaP Hai Salya ChUp Kr K Bay 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "koi hamy bhi chummi dy do") || (event.body.toLowerCase() == "koi tu love you bol do yr")) {
     return api.sendMessage("️Dafa Hoja Group Sa Tharkiya Na MaR Edr🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ma ny kon sa thark mara") || (event.body.toLowerCase() == "ma ny kia kara")) {
     return api.sendMessage("️To Fir Ya Kia Hai Fir ThArk nhi To 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "Meri janu hai") || (event.body.toLowerCase() == "wo meri janu hai")) {
     return api.sendMessage("️HaAn HaaN ThEk Hai Ham Na Kon Sa Apni Janu Bola", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "sms del kr") || (event.body.toLowerCase() == "delete kr")) {
     return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×unsend") || (event.body.toLowerCase() == "×unsent")) {
     return api.sendMessage("️Is Bar Kr Rha Agli Bar Delete Nhi Kru Ga Bta Rha 🙄", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "Chal Haat") || (event.body.toLowerCase() == "chal hatt")) {
     return api.sendMessage("️Tu Hatt Bay🤬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😂")) {
     return api.sendMessage("Abby Yawl Hansty H0Y bHi R0o RaHa Hai 💁", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "assalamualaikum kasy ho sab")) {
     return api.sendMessage("️ Walikum Assalam ❤️ Main ThEk Ap KaSy ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "kia kr rhy ho sab log") || (event.body.toLowerCase() == "kia kr rhy ho")) {
     return api.sendMessage("️kuxh Nhi Bs Free 😁 Ap Kia Kr Rhy Ho", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "ma bhi free") || (event.body.toLowerCase() == "main b kuxh nhi kr rha")) {
     return api.sendMessage("️Acha Ji☺️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wo q") || (event.body.toLowerCase() == "vo q")) {
     return api.sendMessage("️Kia Wo Q HaaN☺️", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "acha ji") || (event.body.toLowerCase() == "acha")) {
     return api.sendMessage("️HaN Ji Or Sunao KiYa Kr RhY ho Aj Kal❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kuxh nhi") || (event.body.toLowerCase() == "kuch nhi yr")) {
     return api.sendMessage("️acha KuJ Kr Liya Kro Naw 🤣", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "kya kru") || (event.body.toLowerCase() == "kya kru yr")) {
     return api.sendMessage("️kOi KaM ShaM☺️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "yr aj dill udas hai") || (event.body.toLowerCase() == "today im sad")) {
     return api.sendMessage("️Pagal HappY Rha Kr SaD NHi Hotyy Naw", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "gf chor gy") || (event.body.toLowerCase() == "gf bhag gy")) {
     return api.sendMessage("️Daffa MaR UsY Bagh Gyi To Maa Chudday Tu Q Ro Rha 😁", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == " love you") || (event.body.toLowerCase() == " love u")) {
     return api.sendMessage("LovE You To MaRi Jan UmmmaH😘 :))", threadID);
   };
  
  if ((event.body.toLowerCase() == " kanjar") || (event.body.toLowerCase() == "kutta")) {
     return api.sendMessage("Same to you Dur Fitty Muu😹:))", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "kya kr rhy ho") || (event.body.toLowerCase() == "kya kr rhi ho")) {
     return api.sendMessage("️KuXh Nhi Kr Rha YaR", threadID);
   };
   
   if ((event.body.toLowerCase() == " dance kro gy") || (event.body.toLowerCase() == " aja dance krty hn")) {
     return api.sendMessage("nhi tm kro DaNce Main Nhi Krti :))", threadID);
   };
   if ((event.body.toLowerCase() == " Hmm") || (event.body.toLowerCase() == "Hm")) {
     return api.sendMessage("Agli Br Hmm Bola Naw Tu Muh toor Du ga🤨 :))", threadID);
   };
   
   if ((event.body.toLowerCase() == "Morning") || (event.body.toLowerCase() == "Good morning")) {
     return api.sendMessage("Good morning Alsee Ab Muhh bhi Dho k Aa zra 😉☹️:))", threadID);
   };
   
   if ((event.body.toLowerCase() == "bot tharki") || (event.body.toLowerCase() == "tharki bot")) {
     return api.sendMessage("Tu ThaRki Hai Salya :))", threadID);
   };
   
   if ((event.body.toLowerCase() == " Wow") || (event.body.toLowerCase() == " wow nice")) {
     return api.sendMessage("Thankx You JaNnaM Taref Krna k LiyA❤️ :))", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("hi kia ha HaL Hai Ap Ka:))", threadID);
   };
  
   if ((event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "kesy ho")) {
     return api.sendMessage("Main ThEk Hun Ap Kasa Ho :))", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar jao")) {
     return api.sendMessage("HaTtt MaRi to Abi ShaDi b Nhi Hoi🙄😏 :))", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "khana khaya") || (event.body.toLowerCase() == "khana kha liya")) {
     return api.sendMessage("Nhi YaR Abi Nhi KhaYa Ap Na Kha liya :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "haan yr") || (event.body.toLowerCase() == "+sim haan ma ny kha liya")) {
     return api.sendMessage("MuJy Bulaya B Nhi Or ThUs liya wah🤧:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "♥️") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("Sadky Jawa Dil Dy ReHy Ho piYar tu Ni kr beHty MujH Sy🙆🙈 :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
     return api.sendMessage("BolLo NaW Mari JaN❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "harami") || (event.body.toLowerCase() == "bhenchod")) {
     return api.sendMessage("TaRii Maa Ki Chut Jattu Gali KiS Ko Da Rha Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "your owner") || (event.body.toLowerCase() == "ap ka owner kon hai")) {
     return api.sendMessage("SheHzada Aryan ♥️ Hai Naw ×inf likho link Mil Jay Ga  :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i need janu") || (event.body.toLowerCase() == "i need gf")) {
     return api.sendMessage("BsDk Main Robot HuN TaRi Maa Nhi Jo Gf DunD Due TuJy :))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "i need girlfriend") || (event.body.toLowerCase() == "i need boyfriend")) {
     return api.sendMessage("Hatt Main Kdr Sa Laun Main Khud Single HuN:))", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "bye") || (event.body.toLowerCase() == "bye allah hafiz")) {
     return api.sendMessage("Next Bye ni kehna Ok Allah Hafiz Bola kro😒😊❤️:))", threadID);
   };
  
  if ((event.body.toLowerCase() == "love you maryam") || (event.body.toLowerCase() == "maryam love you")) {
     return api.sendMessage("Arry  MaRI JaNU Hai YaR 😘LoVe You Maryam♥️", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "😒")) {
     return api.sendMessage("Edr Udr Qw Dekh RaHe Ho Koi Patny Wala Ni🙄🙂:)", threadID);
   };
   
    if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👎")) {
     return api.sendMessage("Abby Like deny ka ziada shoq ha kya🙆🙄", threadID);
   };

   if ((event.body.toLowerCase() == "🚶") || (event.body.toLowerCase() == "🏃")) {
     return api.sendMessage("ChaLl BhaG yAhn Se hawa aNe de 🫣🚶", threadID);
   };
  
   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("Yeh Emoji Mere Boss Aryan Use Karty HN Tum Mat Kiya Karo 😝🙆:))", threadID);
   };

   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("Ally Asi bat hi Q kRty Ho K mUh ChuPhana PaRry🤨", threadID);
   };

   if ((event.body.toLowerCase() == "Hello") || (event.body.toLowerCase() == "hi")) {
     return api.sendMessage("Next Hi/Hello nhi Assalamualaikum Bola kro Okay 💖 🤍✨", threadID);
   };

   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "🥰")) {
     return api.sendMessage("️HaYee ma Sadky TeRy is Dil walY Muhh Ty♥️😍 :))))", threadID);
   };

   if ((event.body.toLowerCase() == "sad") || (event.body.toLowerCase() == "😢")) {
     return api.sendMessage("️Allly Ally BabY mEry Hoty Huy Q Ro ReHy Ho🥺🙆🙄:)", threadID);
   };

   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "soch")) {
     return api.sendMessage("️Itna Matt S0Cho JaNu PiYar ho JaY ga Mujh Se🙊😒 :)", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "good night everyone")) {
     return api.sendMessage("️good Night So jao Shabash take care ❤️Allah pak Hamesha Khush rakhy apko🥰", threadID);
   };

   if ((event.body.toLowerCase() == "Shona") || (event.body.toLowerCase() == "Shona mona")) {
     return api.sendMessage("️GG Bolo MerY baBu😘🙆:))))", threadID);
   };

   if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
     return api.sendMessage("️Tu ganda tera pura khandan Ganda 😒😐:))))", threadID);
   };

   if ((event.body.toLowerCase() == "Nothin") || (event.body.toLowerCase() == "Suno Amir")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️aRy mEri JaN kYa howa Qw M0od KhRb kR rHe Ho APna🙂❤️", threadID);
   };

   if ((event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "🥺")) {
     return api.sendMessage("️AnKho M piYar Dil ma خمار PiYar tu ni ho Gyw ksi Sy 🙆", threadID);
   };

   if ((event.body.toLowerCase() == "Amir") || (event.body.toLowerCase() == "Suno amir")) {
     return api.sendMessage("️ Usy q bula rahe Ho Ma bhi sath ao kya🙆😐 :>", threadID);
   };
  
   if ((event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("️Asyy kiS ko DekH raHe Ho ShkaL sy Tu ThaRki lg raHy Ho🙆😑 :)", threadID);
   };

   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("️Ally alYy BaBy Asy hi HNsty RaHa kRo🙆🙊", threadID);
   };

   if ((event.body.toLowerCase() == "💔") || (event.body.toLowerCase() == "💔💔")) {
     return api.sendMessage("BewaFa lOog Hn Dil Tor DeTy Hn JaNu🥺🙆", threadID);
   };

  if ((event.body.toLowerCase() == "asslam o alaikum") || (event.body.toLowerCase() == "Aslamoalaikum")) {
     return api.sendMessage("walikum Asalam ♥️", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "or sunao") || (event.body.toLowerCase() == "thek hun")) {
     return api.sendMessage("main ThEk Hun Ap Kasy ho🤧", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
 return api.sendMessage("𝓞𝓸𝓸𝓸 𝓒𝓾𝓽𝓮 𝓑𝓪𝓫𝔂 𝓚𝓲𝓽𝓷𝓪 𝓒𝓾𝓽𝓮 𝓛𝓪𝓰𝓻𝓗𝓲 𝓗𝓸 🤭❤️", threadID);
   };  

  if ((event.body.toLowerCase() == "🤫🤫") || (event.body.toLowerCase() == "🤫")) {
     return api.sendMessage("Han Han kRwa Lo Chup Sb ko Pr maiN ni kRny waLa Chup,🤐😒", threadID);
   };

  if ((event.body.toLowerCase() == "🚶‍♀️") || (event.body.toLowerCase() == "🤗🚶‍♀️")) {
     return api.sendMessage("𝓨𝓮 𝓔𝓶𝓸𝓳𝓲 𝓒𝓪𝓽𝓸 𝓠𝓾𝓮𝓮𝓷 𝓴𝓪 𝓕𝓪𝓿𝓸𝓾𝓻𝓲𝓽𝓮 𝓗𝓪𝓲 𝓽𝓾𝓶 𝓤𝓼𝓮 𝓝𝓪 𝓚𝓻𝓸 🤭🍫", threadID);
   };
  
  if ((event.body.toLowerCase() == "Janu kis ki ha") || (event.body.toLowerCase() == "Jaan ks ki ha")) {
     return api.sendMessage("Ek Baar Main Samjh nhiwe Attiw kia ? Janu  bss Aryan ki ha🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😆")) {
     return api.sendMessage("DanT nikaL kr ApNi beiZti na kRwaYn ShuKria😒🙎", threadID);
   };
  
  if ((event.body.toLowerCase() == "Bot Jani") || (event.body.toLowerCase() == "Bot Jan")) {
     return api.sendMessage("Mrgya Wo to Kab ka 🤧", threadID);
   };
  
  if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😚")) {
     return api.sendMessage("Bsh krdo Ziada Mar lii tharkia Ab bs Emoji ki😒", threadID);
   };
  
  if ((event.body.toLowerCase() == "Arzo") || (event.body.toLowerCase() == "suno arzo")) {
     return api.sendMessage("Hamy bsh Teri hi Arzo Ha Pagli❤️🙃", threadID);
   };
  
   if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🖤🖤")) {
     return api.sendMessage("Jesi Shakal Wesa Dil 🙂🤝 :>>", threadID);
   };

   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("itNa baRa Muhh kHol k HanS RaHe ho GaNfo ho kYa🙂)", threadID);
   };

   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("KiTna GanDy LooG Hn Rula DeTy Hn KamiNy🥺🏃", threadID);
   };

   if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹")) {
     return api.sendMessage("RoNy ki ActiNg tu SaHi sy kRlo ThaRki insaN🙂", threadID);
   };

   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("DaFa ho Ja YaHa sy Alsee😒🙄", threadID);
   };

   if ((event.body.toLowerCase() == "×sim who is rozie") || (event.body.toLowerCase() == "×sim rozie kon ha")) {
     return api.sendMessage("Tum Kon hoty Ho pocHny waLy 😒😐", threadID);
   };

   if ((event.body.toLowerCase() == "×sim who is jenny") || (event.body.toLowerCase() == "×sim  jenny kon ha")) {
     return api.sendMessage("Facebook ki sb Say Bari tharki Larki hai Jenny🙆🙂", threadID);
   };

   if ((event.body.toLowerCase() == "×sim who is jiya") || (event.body.toLowerCase() == "×sim jiya kon ha")) {
     return api.sendMessage("Dawood ki wife ha jiYa❤️🙆 ", threadID);
   };
  if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😜")) {
     return api.sendMessage("️AnDar kR isKo wRna Kaat Du ga yE ganDi zaBan🙎🏾‍♂️", threadID, messageID);
   };

if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😤")) {
     return api.sendMessage("️ Attitude tu kHusRy dekHtY hN mEri Jan😏🙎🏾‍♂️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() =="😠") || (event.body.toLowerCase() == "🤬")) {
     return api.sendMessage("️CoOl COOl babY GhuSsa HaRm ha 🙆😶", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("️Mujh Masoom Py Ghussa kRty Ho JaO ma nARaz Hu🥺🖤", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "🫤")) {
     return api.sendMessage("️Tum Tu kHud Bhi TerY ho ShaKl kHak seedhi ho Gi😬", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😱")) {
     return api.sendMessage("ITna HaiRan hoNy waLi KoNsi bat ha😒🙎🏾‍♂️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Jaa So Ja lGta ha BukHar ho Gyaw🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "😇")) {
     return api.sendMessage("️ABby Yawl ki hOya ab tEnu😒🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim ap hacker ho") || (event.body.toLowerCase() == "×sim are you hacker")) {
     return api.sendMessage("️YeS Im Hacke 😏", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim ao date pa chalty") || (event.body.toLowerCase() == "×sim ao date pay chalty hain")) {
     return api.sendMessage("️OkaY Main ReaDy Ho Kr Aya Bs 5Mint Wait Kro🥰", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "×sim where are you from") || (event.body.toLowerCase() == "×sim u from")) {
     return api.sendMessage("️ I'm from Pakistan 🥰 I love My country 🇵🇰", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "×sim india k log kasa hain") || (event.body.toLowerCase() == "×sim or india k log")) {
     return api.sendMessage("️Wo B Bht Achy Hain Bs Kuxh LoG Achy Nhi Un Main Bs Baki Sab Nice Hain🥰", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim your age") || (event.body.toLowerCase() == "×sim ap ki age ktni hain")) {
     return api.sendMessage("️20🤫", threadID, messageID);
   };
  
   if ((event.body.toLowerCase() == "×sim nice yr") || (event.body.toLowerCase() == "×sim nice")) {
     return api.sendMessage("️Hmmm Thankx ❤️", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim yr mujy gf chiya") || (event.body.toLowerCase() == "×sim mujy ak gf chiya")) {
     return api.sendMessage("️HaaN To MuJy Q Bol Rhy Ho Gf Ka Main to Robot Hun 🙄", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "+sim ak gf dund do") || (event.body.toLowerCase() == "×sim ak gf lab da")) {
     return api.sendMessage("️Hatt OYe Mara paS khud Nhi Hai", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim who are you") || (event.body.toLowerCase() == "×sim ap kon ho")) {
     return api.sendMessage("️ I'm ROBOT 🤖 2.0 like chitti Robot😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim agr gf nraz ho to") || (event.body.toLowerCase() == "×sim agr gf nraz ho to kia krna chiya")) {
     return api.sendMessage("️To US pa Kalla JaDdu Kr Do KhuD Man Jay Gi 😂😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "×sim ap kia krti ho") || (event.body.toLowerCase() == "×sim yr ap kia krti")) {
     return api.sendMessage("️main kuxh nhi krti Bs WaLi😂", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "×sim study karti ho") || (event.body.toLowerCase() == "×sim study karti ho ap")) {
     return api.sendMessage("️Ji NhI Kr LiyA Jo Krni Thi Bs Ab Or Nhi😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "×sim or btao") || (event.body.toLowerCase() == "×sim or btao kuxh")) {
     return api.sendMessage("️Kia btaUn Ab😅", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: `🤍🎀✨☄️${name}🤍🎀✨☄️ , ${rand}  \n\n                                𝓜𝓸𝓭𝓾𝓵𝓮 𝓒𝓸𝓭𝓮 𝓑𝔂 𝓐𝓻𝔂𝓪𝓷 🌿💞`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }