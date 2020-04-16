const Discord = require("discord.js");

module.exports = {
    komut: "ban", 
    açıklama: ".",
    kategori: "moderasyon", 
    alternatifler: ['.'],
    kullanım: "!ban", 
    yetki: "BAN_MEMBERS",
    args: [
        {
           anahtar:"banlanacakkisi",
           soru:"Hangi üyeyi banlamak istiyorsunuz?",
           tip:"kullanici"  
        },
        {
            anahtar:"banlanmanedeni",
            soru:"Bu kişyi neden banlamak istiyorsunuz?",
            tip:"yazi"
        }
    ]
};

module.exports.baslat = (client,message, args) => {

//verilerimizi çekelim
let banlanacakkisi = args.banlanacakkisi;
let banlanmanedeni = args.banlanmanedeni;
let banlogchannel = message.guild.channels.find(x => x.name === "ban-log")

if(!banlogchannel) {
    message.channel.send("Ban atabilmek için lütfen ban-log adlı kanalı oluşturunuz.")
}

message.guild.member(banlanacakkisi).ban()

message.channel.send(":white_check_mark: | Başarı ile "+ banlanacakkisi.username + " kullanıcısı banlandı.")


message.guild.channels.get(banlogchannel.id).send(new Discord.RichEmbed()
.addField("Banlanan kişi:",banlanacakkisi.username,true)
.addField("Banlayan kişi:",message.author.username, true)
.addField("Banlanma Nedeni:",banlanmanedeni, true)
.setColor("RANDOM")
.setTimestamp()
.setFooter("Ban-Log Sistemi | Aktila..")
.setTitle("Ban-Log Sistemi")
)

}