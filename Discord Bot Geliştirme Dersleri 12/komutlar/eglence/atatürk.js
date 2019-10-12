module.exports = {
    komut: "atatürk", 
    açıklama: "Rastgele Atatürk Fotoğrafı Gönderir",
    kategori: "eglence", 
    alternatifler: ['atatürk', "atam"],
    kullanım: "!atatürk", 
    yetki: ''
}

module.exports.baslat = (client, message) => {

    const request = require('request');

    request('http://api.thefunt.net/ataturk', function (error, response, body) {

    var api = JSON.parse(body);
    var link = api.link;

    message.channel.send(link);

});
};