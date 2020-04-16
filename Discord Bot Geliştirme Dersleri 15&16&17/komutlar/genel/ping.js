const Discord = require("discord.js");

module.exports = {
    komut: "ping", 
    açıklama: "Botun pingini ölçer.",
    kategori: "genel", 
    alternatifler: ['ping','p','gecikmesüresi'],
    kullanım: "!ping", 
    yetki: '',
};
                 
module.exports.baslat = (client, message) => {
    //mesaj gönderme 
    message.channel.send(new Discord.RichEmbed()
    .setDescription("Botun ping değeri aşağı satırlarda gösterilmektedir.")
    .setColor("RANDOM")
    .setTitle("Ping Ölçüm tablosu")
    .setURL("https://www.youtube.com/c/aktilacengiz")
    .addField("Botun gecikme süresi:", Math.round(client.ping) + " MS", true)
    .addField("Bir başlık2", "başlığın açıklaması",true)
    .addBlankField()
	.addField("Bir başlık", "başlığın açıklaması")
    .addField("Bir başlık2", "başlığın açıklaması")
    .setFooter("Bu bir bitiş açıklaması")
    .setTimestamp()
    .setAuthor(message.author.username,message.author.avatarURL)
    .setThumbnail("https://images-ext-2.discordapp.net/external/DRZcof68F0ishEiw6EkiEouhDj3b74rxucmfEMSch6c/http/wttr.in/kayseri_0tqp_lang%3Dtr.png?width=177&height=114")
    .setImage("https://images-ext-2.discordapp.net/external/DRZcof68F0ishEiw6EkiEouhDj3b74rxucmfEMSch6c/http/wttr.in/kayseri_0tqp_lang%3Dtr.png?width=177&height=114"))
};
