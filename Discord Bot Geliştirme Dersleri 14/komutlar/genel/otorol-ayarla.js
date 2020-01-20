const Discord = require("discord.js");

module.exports = {
    komut: "otorol-ayarla", 
    açıklama: "",
    kategori: "genel", 
    alternatifler: ['otorol-ayarla',"otorolayarla"],
    kullanım: "!otorol-ayarla", 
    yetki: 3,
    args: [
    {
          anahtar:"role",
          soru:"Hangi rolün otomatik olarak verilmesini istiyorsunuz?",
          tip:"rol"
    }
    ]
};

module.exports.baslat = (client,message,args)  => {

//rolümüzü çektik
 var veri = args.role;
 var rolid = veri.id;

//veritabanına veri yazdırma
client.veritabanı.ayarla("otorol-" + message.guild.id,rolid)
message.channel.send("Otorol başarı ile <@&" + rolid + "> olarak ayarlandı.")
}
      