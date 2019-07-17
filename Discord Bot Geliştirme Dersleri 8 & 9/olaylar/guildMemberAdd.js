//guildMemberAdd = bir kişi sunucuya girdiğinde çalıaşcak fonksiyon

module.exports = (client, member) => {

var kanal = client.channels.get("597800135493419009")

console.log(member.user.bot)
if(member.user.bot === true) {
  kanal.send("Bu kişi bir bot olarak giriş yaptı.")
} 
 kanal.send(`:inbox_tray: | <@${member.id}> adlı kişi sunucuya giriş yaptı. `)

}
