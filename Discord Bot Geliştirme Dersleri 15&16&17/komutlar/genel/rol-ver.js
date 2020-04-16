const Discord = require("discord.js");

module.exports = {
    komut: "rol-ver", 
    açıklama: "Herhangi bir rolü istediğiniz kişiye verirsiniz.",
    kategori: "genel", 
    alternatifler: ['rol-ver'],
    kullanım: "!rol-ver", 
    yetki: "MANAGE_GUILD",
    args : [
{
    anahtar:"rolverilecekkisi",
    soru:"Hangi kişiye rol vermek istersiniz?",
    tip:"kullanici"
},
{
   anahtar:"verilecekrol",
   soru:"Bu kişiye hangi rolü vermek istersiniz?",
   tip:"rol"
}
]
};

module.exports.baslat = (client,message, args) => {

if(!message.guild) {
    return;
}

if(message.author.bot === true) {
    return;
}
//tanımlamları
var kisi = args.rolverilecekkisi
var rol = args.verilecekrol
var rolID = rol.id;

if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) 
return message.channel.send("Lütfen rol vermem için bana `Rolleri yönet` yetkisini veriniz.")

//rol verme kısmı
message.guild.member(kisi).addRole(rolID)
message.channel.send(`Başarı ile **${kisi.username}** adlı üyeye **${rol.name}** adlı rol verildi.`)


}