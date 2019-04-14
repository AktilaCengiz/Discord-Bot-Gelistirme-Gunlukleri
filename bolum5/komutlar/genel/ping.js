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
    message.channel.send("Botun gecikme süresi: " + Math.round(client.ping) + " MS")

};