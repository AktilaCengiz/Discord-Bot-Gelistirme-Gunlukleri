//guildMemberRemove = bir kişi sunucudan çıktığında çalıaşcak fonksiyon
module.exports = (client, member) => {

if(client.veritabanı.varMı("giris_" + member.guild.id) == true) {
	var kanalıd  = client.veritabanı.veri("giris_" + member.guild.id)
client.channels.get(kanalıd).send(`:outbox_tray: | **${member.user.username}** adlı kişi sunucudan çıkış yaptı. `)
} else {
	return;
}

}

