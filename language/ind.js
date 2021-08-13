exports.noregis = () => {
        return `*「 REGISTRE-SE 」*\n\n*cara registrar ${prefix}registrar nome|idade* \n*Contoh: ${prefix}registrar Zeus|18*`
}

exports.rediregis = () => {
        return `*「 JA REGISTRADO! 」*\n\n*VOCE SE REGISTROU NO BANCO DE DADOS DO BOT`
}

exports.wrongf = () => {
        return`*formato errado / texto vazio`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*「 REGISTRO 」*\n\Para saber se voce ja se registrou, verifique a nota que eu enviei \n\nNOTE:\n*Se voce nao recebeu uma mensagem, significa que voce ainda nao se registrou*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRO DE DADOS 」*\n\nvocê se registrou com os dados \n\n◪ *DADOS* \n  │ \n  ├─ ❏ NOME : ${namaUser} \n  ├─ ❏ NUMERO : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Registrar hora : ${time} \n  │ \n └─ ❏ CPF : ${serialUser} \n\n ❏ NOTA : \n NÃO ESQUEÇA ESTE NÚMERO PORQUE É IMPORTANTE`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* Nao encontrado tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe mas... ${pushname} nao é o dono do bot*`
}

exports.limitend = (pushname) => {
        return`*Desculpa ${pushname} limite de hoje expira,*\n*o limite é redefinido a cada 24h*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMITE DA CONTA 」*
Seu limite restante : ${limitCounts}

NOTA: Para obter o limite pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
        return`*Adicione 1 para/habilitar ou 0/para desabilitar`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nome* : ${pushname}\n  ❏ *Numero* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}

exports.levelup = (pushname2, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 🥳 LEVEL UP 🥳 」*
┏⊱ *Nome* : ${pushname2}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Patente*: ${role}
┗⊱ *Nível* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
