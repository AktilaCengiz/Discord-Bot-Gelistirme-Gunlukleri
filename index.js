//-Değişkenler-
const Discord = require("discord.js");
const chalk = require("chalk");
const Advanced = require('discordjs-advanced');
                         
const client = new Advanced.Client({
    token: "TOKENİNİZ", 
    prefix: "!", 
    sahip: ["276057718354083860"], 
    komutDosya: "komutlar",
    veritabanı : {
       dosya:"database.json"
    },
    varsayılanKomutlar: ['yardım'],
    everyoneKapat: true
});  

client.kategoriYükle([ 
    ['eglence', 'Eglence Komutları'],
    ['moderasyon','Moderasyon Komutları'],
    ['kullanıcı','Kullanıcı komutları'] ,
    ['genel', 'Genel komutlar']
]);

//-Bot hazır mesajı-
var log =  chalk.red("Bot başarı ile giriş yaptı.")
var log01 = chalk.bold.yellow("Bot başarı ile giriş yaptı.")
    

client.on("ready",() => {
 console.log(log)
 console.log(log01)
});
                     
client.giris();




