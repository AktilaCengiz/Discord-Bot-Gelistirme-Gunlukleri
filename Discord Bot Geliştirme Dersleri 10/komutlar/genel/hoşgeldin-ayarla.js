const Discord = require("discord.js");

module.exports = {
    komut: "hoşgeldin-ayarla", 
    açıklama: "hoşgeldin kanalını ayarlar",
    kategori: "genel", 
    alternatifler: ['hg-ayarla'],
    kullanım: "!hoşgeldin-ayarla", 
    yetki: 3,
    args : [
 {
 	  anahtar:"ayarlanacakkanal",
 	  soru:"Hangi kanalı ayarlamak istiyorsunuz?",
 	  tip:"kanal"
 }

    ]
};
                 
module.exports.baslat = (client, message, args) => {

 var kanal = args.ayarlanacakkanal.id;
 console.log(kanal)

client.veritabanı.ayarla("giris_" + message.guild.id ,kanal)

message.channel.send("Bundan sonra giriş çıkış mesajları <#" + args.ayarlanacakkanal.id + "> etiketli kanala atılacaktır." )


};