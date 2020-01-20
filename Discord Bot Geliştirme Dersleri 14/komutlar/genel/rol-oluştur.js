const Discord = require("discord.js");

module.exports = {
    komut: "rol-oluştur", 
    açıklama: "Herhangi bir rolü oluşturursunuz.",
    kategori: "genel", 
    alternatifler: ['rol-oluştur', "rol-create"],
    kullanım: "!rol-oluştur", 
    yetki: 4,
    args : [
{
    anahtar:"olusturulacakrol",
    soru:"Oluşturacağınız rolün ismi ne olsun?",
    tip:"yazi"
}
]
};

module.exports.baslat = (client,message, args) => {

if(message.author.bot === true) {
	return;
}

if(!message.guild) {
	return message.channel.send("Lütfen özel mesajlarda bu komutu kullanamayınız.")
}

var olusacakrol = args.olusturulacakrol;

if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) 
return message.channel.send("Lütfen rol oluşturmam için bana `Rolleri yönet` yetkisini veriniz.")

message.guild.createRole({ 
name: olusacakrol,
color: "BLUE"
})

message.channel.send(` ${olusacakrol} adlı rolünüz başarı ile oluşturuldu`)


}
                 