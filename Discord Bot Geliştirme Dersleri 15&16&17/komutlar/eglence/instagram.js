//import ediyoruz.
const croxy = require("croxy-api")
const Discord = require("discord.js")

module.exports = {
    komut: "instagram", 
    açıklama: "",
    kategori: "eglence", 
    alternatifler: ['instagram'],
    kullanım: "!instagram", 
    yetki: 0,

    args : [
        {
            anahtar:"kullanıcı",
            soru:"Aratacağınız hesabın kullanıcı adı nedir?",
            tip:"yazi"
        }
    ]
}

module.exports.baslat = async function(client,message,args) {


    var holdMessage = new Discord.RichEmbed()
    .setDescription("Veriler hazırlanıyor..")
    .setColor("RANDOM")


    var veri = args.kullanıcı;

    var isim = await croxy.instagram(veri).then(x => x.isim)
    if(isim == undefined) {
        return message.channel.send(new Discord.RichEmbed() 
        .setColor("RANDOM")
        .setDescription("Lütfen kullanıcı ismini doğru girdiğinizden emin olunuz."))
    }

    message.channel.send(holdMessage).then(m => m.delete(7000))

    var kullanıcıAdı = await croxy.instagram(veri).then(x => x.kullanıcıAdı)
    var takipçi = await croxy.instagram(veri).then(x => x.takipçi)
    var takipEdilen = await croxy.instagram(veri).then(x => x.takipEdilen)
    var gönder = await croxy.instagram(veri).then(x => x.gönderi)
    var biyografi = await croxy.instagram(veri).then(x => x.biyografi)
    
    if(biyografi == "blank") {
        var biyografisi = "Boş"
    } else {
        var biyografisi = biyografi;
    }

    var gizli = await croxy.instagram(veri).then(x => x.gizliMi)

    if(gizli == true) {
        var gizliMi = "evet"
    } else {
        var gizliMi = "hayır"
    }

    var profilFotoğrafı = await croxy.instagram(veri).then(x => x.profilFotoğrafı)
    var dogrulanmıs = await croxy.instagram(veri).then(x => x.doğrulanmışMı)

    if(dogrulanmıs == true) {
        var dogrulanmısMı = "evet"
    } else {
        var dogrulanmısMı = "hayır"
    }

    message.channel.send(new Discord.RichEmbed()
    .addField("isim:", isim, true)
    .addField("kullanıcı Adı: ", kullanıcıAdı, true)
    .addField("Takipçi: ", takipçi, true)
    .addField("Takip edilen: " , takipEdilen, true)
    .addField("Gönderiler: ", gönder, true)
    .addField("Biyografisi:", biyografisi)
    .addField("Hesap gizli mi?: ", gizliMi,true)
    .addField("Hesap doğrulanmış mı?: ", dogrulanmısMı,true)
    .setThumbnail(profilFotoğrafı)
    .setColor("RANDOM"))
}