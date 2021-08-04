const tttme = (pushname2, userWins, userDefeats, userTies, userPoints) => {
  return `
「 🌀💮 Tic Tac Toe 💮🌀 」
❖ NOME: ${pushname2} 

    ➣ Vitórias: ${userWins} 🎊
    ➣ Derrotas: ${userDefeats} 💥
    ➣ Empates : ${userTies} 🌀
    ➣ Pontos  : ${userPoints} ✨
    `
}

exports.tttme = tttme
