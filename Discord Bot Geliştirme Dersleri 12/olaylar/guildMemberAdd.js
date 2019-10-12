//guildMemberAdd = bir kişi sunucuya girdiğinde çalıaşcak fonksiyon

module.exports = (client, member) => {

if(client.veritabanı.varMı("giris_" + member.guild.id) == true) {
	var kanalıd  = client.veritabanı.veri("giris_" + member.guild.id)
client.channels.get(kanalıd).send(`:inbox_tray: | <@${member.id}> adlı kişi sunucuya giriş yaptı. `)
if(member.user.bot === true) {
  client.channels.get(kanalıd).send("Bu kişi bir bot olarak giriş yaptı.")
} 
} else {
	return;
}

}
