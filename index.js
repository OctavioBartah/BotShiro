/*
* Tambahin nama author lah
* Author MhankBarBar, Farhan
* Tambahin ya Cape Gan ngefix² Yg Ga work
* Jan numpang nama doank

- What's New?
* New Features
*/
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require("@adiwajshing/baileys")

const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, randomNimek, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./Fxc7/help')
const { bahasa } = require('./Fxc7/bahasa')
const { donasi } = require('./Fxc7/donasi')
const { limitend, limitcount } = require('./Fxc7/limit')

const fs = require('fs-extra')
const { ind } = require('./language')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const get = require('got')
const emojiUnicode = require('emoji-unicode')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()
const axios = require('axios')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const math = require('mathjs')
const crypto = require('crypto')


const { BarBarApi, ZeksApi, TechApi, TobzApi, ItsApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'))
const adminNumber = JSON.parse(fs.readFileSync('./database/json/admin.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'))
let antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/json/level.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _registered = JSON.parse(fs.readFileSync('./database/json/registered.json'))
const sotoy = JSON.parse(fs.readFileSync('./src/sotoy.json'));
const _badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const _bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const tictactoe = JSON.parse(fs.readFileSync('./database/ttt/tictactoe.json'));
const { addTTTId, addTTTwin,addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js') //JOGO DA VELHA,AGRADECIMENTOS: Resen
const daily = JSON.parse(fs.readFileSync('./data/diario.json'))
const { addLimit, getLimit } = require('./lib/limit.js')// LIMITADOR, AGRADECIMENTOS: IRIS(kill), Resen

let {
instagram, yt, groupLink, memberLimit, tobzkey
} = setting

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Farhan\n'
            + 'ORG:Creator FXC7;\n'
            + 'TEL;type=CELL;type=VOICE;waid=628311800241:+62 831-1800-241\n'
            + 'END:VCARD'

prefix = "_"
safelink = "bob"
name = "~ Loli_Senpai | B O T"
rdaftar = "OBRIGADO POR SE REGISTRAR😁"
rmenu = "Olá amigos da LOLIBOT👋"
limitt = 100000
ban = []
userpremium = [] //ubah nomer kalian

  //TTT 
    
    const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}

if (tttset.tttstatus == "off" && tttset.autoEndTime == "on") {
tttset.autoEndTime = "off"
} else if (tttset.tttstatus == "on" && tttset.autoEndTime == "on") {
if (isLevelingOn) {
const randomEndTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomEndTTTXP)
const checkTTTIdEnd = getTTTId(tttset.player)
if (checkTTTIdEnd === undefined) addTTTId(tttset.player)
addTTTpoints(tttset.player, randomEndTTTXP)
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌\n\n➣  PUNIÇÃO: ${randomEndTTTXP} XP 🔮`, text, {quoted: tttset.mentionPlayer})
} else {
client.sendMessage(tttset.local,`❌ O TEMPO DE JOGO EXPIROU ❌`, text, {quoted: tttset.mentionPlayer})
}
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.autoEndTime = "off"
}
// Functions///////////////////////////////////////////////////////////
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/json/level.json', JSON.stringify(_level))
        }

// Functions///////////////////////////////////////////////////////////


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./Fxc7.json') && client.loadAuthInfo('./Fxc7.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Fxc7.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Ola @${num.split('@')[0]}\nBem vindo (a) ao grupo ☕ *${mdata.subject}\nLeia as regras e divirta-se*`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Adeus @${num.split('@')[0]}\nAqui so fica os fortes👋`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

		client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	
	
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
	
	
const getRegisteredRandomId = () => {
			return user[Math.floor(Math.random() * user.length)].id.replace('@s.whatsapp.net','')
			}


  const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/json/registered.json', JSON.stringify(_registered))
        }

	client.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return
              mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const FarhanGans = ["5511963386276@s.whatsapp.net"] // apenas mude esta tudo bem
			const farhan = mek.message.conversation
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = client.contacts[nameReq] != undefined ? client.contacts[nameReq].vname || client.contacts[nameReq].notify : undefined
            
			const { text, extendedText, contact, location, liveLocation, id, image, video, sticker, document, audio, product } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')

			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const far = args.join(' ')
			const isCmd = body.startsWith(prefix)
			const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
			
			const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍒 : 🍐',
		'🍊 : 🍋 : 🔔',//by Fadhlur Owner of NotBot
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
                '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
			

			mess = {
				wait: '*⏳ Espere um pouco senpai, 𝘁𝗼𝗺𝗲 𝘂𝗺 𝗰𝗮𝗳é☕𝗲 𝘂𝗺 𝗯𝗶𝘀𝗰𝗼𝗶𝘁𝗼 🥯 𝗽𝗼𝗿 𝗲𝗻𝗾𝘂𝗮𝗻𝘁𝗼 ^~^...*',
				success: '*ꜱᴜceꜱꜱo...*',
				error: {
					stick: ' *Não consegui converter  ;-;*',
					Iv: '*𝙚𝙨𝙨𝙚 𝙡𝙞𝙣𝙠 𝙣𝙖𝙤 𝙫𝙖𝙡𝙚 !!*'
				},
				levelon: '[✔ ]*O level foi ativado*',
				leveloff: '[ ❌ ]*O level foi desativado*',
				levelnoton: '[ ❌ ]*O level nao está ativo*',
				levelnol: '*LEVEL KAKAK MASIH* 0 *-*',
				only: {
					group: '*𝐃𝐞𝐬𝐜𝐮𝐥𝐩𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬o 𝐩𝐨𝐝𝐞 𝐬𝐞𝐫 𝐮𝐬𝐚𝐝𝐨 𝐞𝐦 𝐠𝐫𝐮𝐩𝐨!*',
					benned: '*𝘀𝗲𝘂 𝗻u𝗺𝗲𝗿𝗼 𝘁a 𝗽𝗿𝗼𝗶𝗯𝗶𝗱𝗼 𝗱𝗲 𝘂𝘀𝗮𝗿 𝗼 𝗯𝗼𝘁 𝗰𝗼𝗻𝘁𝗮𝗰𝘁𝗲 𝗼 𝗱𝗼𝗻𝗼 𝗱𝗲𝗹𝗲 *',
					ownerG: '*𝙨𝙤𝙢𝙚𝙣𝙩𝙚 𝘼𝘿𝙈 𝙥𝙤𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙨𝙨𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙢 𝙂𝙧𝙪𝙥𝙤𝙨 !*',
					ownerB: '*𝘀o 𝗼 𝗱𝗼𝗻𝗼 𝗱𝗼 𝗯𝗼𝘁 𝗽𝗼𝗱𝗲 𝘂𝘀𝗮𝗿 𝗲𝘀𝘀𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 !* ',
					premium: '*𝗗𝗘𝗦𝗖𝗨𝗟𝗣𝗘 𝗘𝗦𝗧𝗘 𝗥𝗘𝗖𝗨𝗥𝗦𝗢 𝗣𝗔𝗥𝗔 𝗨𝗦𝗨A𝗥𝗜𝗢 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 𝗘𝗦𝗣𝗘𝗖I𝗙I𝗖𝗢!!*',
					userB: `ʜᴀɪ *${pushname2}* 𝙫𝙤𝙘e 𝙖𝙞𝙣𝙙𝙖 𝙣a𝙤 𝙨𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤𝙪  *${name}* \n𝗽𝗮𝗿𝗮 𝘀𝗲 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿 𝗲𝗻𝘃𝗶𝗲 𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀\n\n exemplo ${prefix}ᴅᴀꜰᴛᴀʀ ${pushname2}/17/brasil`,
					admin: '*sᴏᴍᴇɴᴛᴇ ᴏ ᴀᴅᴍ ᴘᴏᴅᴇ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ !*',
					Badmin: '*𝐃𝐄𝐒𝐂𝐔𝐋𝐏𝐄, 𝐄𝐒𝐓𝐄 𝐏𝐄𝐃𝐈𝐃𝐎 𝐒O 𝐏𝐎𝐃𝐄 𝐔𝐒𝐀𝐑 𝐍𝐎𝐒𝐒𝐎𝐒 𝐁𝐎𝐓𝐒 𝐏𝐀𝐑𝐀 𝐒𝐄𝐑 𝐀𝐃𝐌𝐈𝐍𝐒!*'
				}
			}
			
			
			const apakahh = [
            'sim','Nao','Nao sei'
            ]
            const bisakahh = [
            'Bisa','Tidak Bisa','Ga tau'
            ]
            const kapankahh = [
            '1 Lag de domingoi','1 Bulan lagi','1 Tahun lagi','100 tahun lagi','gatau','2030','1 Jam lagi','1 Menit lagi' 
            ]
            
            const hob =[
            'cozinhar','Socorro Atok','Mabar','Nobar','Sosmed an','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri' 
            ]
            const wa =[
            'penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik Hati','penyabar','Uwu','top deh, pokoknya','Suka Membantu' 
            ] 
            var rate = [
            `100%`,`95%`,`90%`,`85%`,`80%`,`75%`,`70%`,`65%`,`60%`,`55%`,`50%`,`45%`,`40%`,`35%`,`30%`,`25%`,`20%`,`15%`,`10%`,`5%`
            ]
            var persengayy = [
            `*4%*\n\n*Tobat Ngegay Gan:v*`,`*9%*\n\n*OTW Tobat Gan:v*`,`*17%*\n\n*Kang Coli*`,`*28%*\n\n*Buset Dah Gay🤦*`,`*34%*\n\n *Korban Tusbol*`,`*48%*\n\n*Kang Hunter Bool:v*`,`*59%*\n\n *Bahaya Ni Orang Gan*`,`*62%*\n\n*Hati" Sama Ni Orang Beneran Dah*`,`*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*`,`83%\n\n Yaallah Nak🤦`,`97%\n\nAstagfirullah🤦`,`100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃`,`29%\n\n amann:v`,`94%\n\n Yaallah🏃`,`75%\n\nHadehh Gay🤦`,`82%\n\nMending Lu Tobat Dah🏃`,`41%\n\nSering Cari Bool Diperempatan`,`39%\n\nSering Tusbol Bool Topan🏃`
            ]
            var persenbucin = [
            `4%\n\Nisto e🤦`,`9%\n\nAinda pequeno Dah Bucin Ae`,`17%\n\nCrianaa pequena`,`28%\n\nYoalahh hmm`,`34%\n\nMayan Lah`,`48%\n\nGatau`,`59%\n\nBiasa Kang Bucin`,`62%\n\n Hadehhh🏃`,`74%\n\n bucen Teroosss`,`83%\n\n Sekali" kek Ga bucin Gitu`,`97%\n\nHadehh Pakboi"`,`100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi`,`29%\n\nKasian Mana Masih Muda`,`94%\n\n Dasar Pakboi`,`75%\n\n Ya Ampun`
            ]

			const botNumber = client.user.jid
			const ownerNumber = ["5511963386276@s.whatsapp.net"] // owner number ubah aja
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const totalchat = await client.chats.all()
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const tescuk = ["0@s.whatsapp.net"]
			const isSimi = isGroup ? samih.includes(from) : false 
		const isEventon = isGroup ? event.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isAntiLink = isGroup ? antilink.includes(from) : false
		const isBadWord = isGroup ? _badword.includes(from) : false
		const bad = _bad.includes(budy)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = userpremium.includes(sender)
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
  //function leveling
            const levelRole = getLevelingLevel(sender)
   	     var role = '🥉ʙʀᴏɴᴢᴇ🥉'
   	     if (levelRole <= 3) {
   	         role = '🥉ʙʀᴏɴᴢᴇ🥉'
   	     } else if (levelRole <= 5) {
   	         role = '🥉ʙʀᴏɴᴢᴇ🥉'
   	     } else if (levelRole <= 7) {
   	         role = '🥉ʙʀᴏɴᴢᴇ🥉'
   	     } else if (levelRole <= 8) {
   	         role = '🥈ᴘʀᴀᴛᴀ🥈'
   	     } else if (levelRole <= 9) {
   	         role = '🥈ᴘʀᴀᴛᴀ🥈'
   	     } else if (levelRole <= 10) {
   	         role = '🥈ᴘʀᴀᴛᴀ🥈'
   	     } else if (levelRole <= 11) {
   	         role = '🥈ᴘʀᴀᴛᴀ🥈'
   	     } else if (levelRole <= 12) {
   	         role = '🥇ᴏᴜʀᴏ🥇'
   	     } else if (levelRole <= 13) {
   	         role = '🥇ᴏᴜʀᴏ🥇'
   	     } else if (levelRole <= 14) {
   	         role = '🥇ᴏᴜʀᴏ🥇'
   	     } else if (levelRole <= 14) {
   	         role = '🥇ᴏᴜʀᴏ🥇'
   	     } else if (levelRole <= 15) {
   	         role = '🔹ᴘʟᴀᴛɪɴᴀ🔹'
   	     } else if (levelRole <= 16) {
   	         role = '🔹ᴘʟᴀᴛɪɴᴀ🔹'
   	     } else if (levelRole <= 17) {
   	         role = '🔹ᴘʟᴀᴛɪɴᴀ🔹'
   	     } else if (levelRole <= 18) {
   	         role = '🔹ᴘʟᴀᴛɪɴᴀ🔹'
   	     } else if (levelRole <= 19) {
   	         role = '💎ᴅɪᴀᴍᴀɴᴛᴇ💎'
   	     } else if (levelRole <= 20) {
   	         role = '💎ᴅɪᴀᴍᴀɴᴛᴇ💎'
   	     } else if (levelRole <= 21) {
   	         role = '💎ᴅɪᴀᴍᴀɴᴛᴇ💎'
   	     } else if (levelRole <= 22) {
   	         role = '💎ᴅɪᴀᴍᴀɴᴛᴇ💎'
   	     } else if (levelRole <= 23) {
   	         role = '🐃ᴍᴇsᴛʀᴇ🐃'
   	     } else if (levelRole <= 24) {
   	         role = '🐃ᴍᴇsᴛʀᴇ🐃'   	         
   	     } else if (levelRole <= 25) {
   	         role = '🐃ᴍᴇsᴛʀᴇ🐃'    
   	     } else if (levelRole <= 26) {
   	         role = '🐃ᴍᴇsᴛʀᴇ🐃'   	     
   	     } else if (levelRole <= 27) {
   	         role = '🏅ᴅᴇsᴀғɪᴀɴᴛᴇ🎖️'   	         
   	     } else if (levelRole <= 28) {
   	         role = '🏅ᴅᴇsᴀғɪᴀɴᴛᴇ🎖️'    
   	     } else if (levelRole <= 29) {
   	         role = '🏅ᴅᴇsᴀғɪᴀɴᴛᴇ🎖️'     
   	     } else if (levelRole <= 30) {
   	         role = '🏅ᴅᴇsᴀғɪᴀɴᴛᴇ🎖️'         
   	     } else if (levelRole <= 31) {
   	         role = '🏆ᴄᴀᴍᴘᴇᴀ̃ᴏ🏆'   	         
   	     } else if (levelRole <= 32) {
   	         role = '🏆ᴄᴀᴍᴘᴇᴀ̃ᴏ🏆'    
   	     } else if (levelRole <= 33) {
   	         role = '🏆ᴄᴀᴍᴘᴇᴀ̃ᴏ🏆'     
   	     } else if (levelRole <= 34) {
    	        role = '🏆ᴄᴀᴍᴘᴇᴀ̃ᴏ🏆'            
    	    } else if (levelRole <= 31) {
   	         role = '👹ʟᴇɴᴅᴀ👹'   	         
   	     } else if (levelRole <= 32) {
   	         role = '👹ʟᴇɴᴅᴀ👹'    
   	     } else if (levelRole <= 33) {
   	         role = '👹ʟᴇɴᴅᴀ👹'     
   	     } else if (levelRole <= 34) {
    	        role = '👹ʟᴇɴᴅᴀ👹'                
   	    }
   
      	
        			var premi = '🧍🏻‍♂️membro comum🧍🏻‍♂️'
         			if (isOwner) {
      				premi = '🧝🏻‍♂️ᴄʀɪᴀᴅᴏʀ🧝🏻‍♂️'
       			}
			
			
			if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
		await reply(ind.levelup(pushname2, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                     }
            } catch (err) {
                console.error(err)
            }
        }
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitt ) {
                  position = true
                    client.sendMessage(from, limitend(pushname2), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        } 
        
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
     
     		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
						     if (budy.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (is.includes('${safelink}')) return reply("Link autorizado")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}
	
		if (budy.includes("://youtu.be/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (is.includes('${safelink}')) return reply("Link autorizado")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}
	
    	if (budy.includes("https://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (is.includes('${safelink}')) return reply("Link autorizado")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}

        if (budy.includes("Https://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (is.includes('${safelink}')) return reply("Link autorizado")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}
	
	   if (budy.includes("http:/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (is.includes('${safelink}')) return reply("Link autorizado")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}
	
	if (budy.includes("https:/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (is.includes('${safelink}')) return reply("Link autorizado")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			
		}, 0)
	}
	            
	
	        if (budy.includes("https://t.me/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('cara, nao poste essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (is.includes('${safelink}')) return reply("Link autorizado")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("peça permissão proxima vez")
		}, 0)
	}
	
	        if (budy.includes("https://wa.me/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('cara, nao poste essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (is.includes('${safelink}')) return reply("Link autorizado")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("proxima vez peça permissão aoa ademir")
		}, 0)
	}
	
	        if (budy.includes(" *TED ou PIX*")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('cara, nao poste essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (is.includes('${safelink}')) return reply("Link autorizado")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("tchau nota fake")
		}, 0)
	}
	
	        if (budy.includes("https://vm.tiktok.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('cara, nao poste essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (is.includes('${safelink}')) return reply("Link autorizado")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("vai postar merda de tiktok em outro lugar")
		}, 0)
	}
	
		 if (budy.includes("https://s.kwai.app/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('vc é admin, então n irei te dar ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (is.includes('${safelink}')) return reply("Link autorizado")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`

		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("vai postar kwaii na casa do caralho seu mendigo")
		}, 0)
	}
			
			switch(is) {

  case 'loli':

buf = fs.readFileSync(`./audio/oni.mp3`)

client.sendMessage(from, buf, audio, {quoted: mek, ptt:true})

break

case 'fds':

buf = fs.readFileSync(`./audio/Quando.mp3`)

client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek})

break
					
case 'falsidade':

buf = fs.readFileSync(`./audio/Falsidade.mp3`)

client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek})

break
					case 'sayonara':

buf = fs.readFileSync(`./audio/ash.mp3`)

client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek})

break
					case 'voltei':
					case 'cheguei':

buf = fs.readFileSync(`./audio/okairi.mp3`)

client.sendMessage(from, buf, audio, {quoted: mek, ptt:true})

break
				case 'ohayo':
					case 'bd':
					case 'dia':
					case 'bom dia':

buf = fs.readFileSync(`./audio/ohayo.mp3`)

client.sendMessage(from, buf, audio, {quoted: mek, ptt:true})

break
			case 'comida':
					case 'almoço':
					case 'almoçar':
					case 'comer':
					case 'vou comer':
					case 'fome':
					case 'comi':
					

buf = fs.readFileSync(`./audio/comida.mp3`)

client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek})

break
			}
		

if (budy.includes('${bad}')) {
               
                    if (!isGroup) return
                    if (!isBadWord) return
                    if (isGroupAdmins) return reply(`Você é admin, não irei te banir.`)
                    client.updatePresence(from, Presence.composing)
                    var kic = `${sender.split("@")[0]}@s.whatsapp.net`
                    reply('Palavra proibida detectada')
                    setTimeout(() => {
                        client.groupRemove(from, [kic]).catch((err) => {
                            reply(`ERRO: ${e}`)
                        })
                    }, 1000)
                    setTimeout(() => {
                        client.updatePresence(from, Presence.composing)
                        reply("tchau👋")
                    }, 0)
               
            }
		
			switch(command) {
					case 'rank':
					
				bo = args[0]
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
                let leaderboardlvl = '-----[ *RANK DE NÍVEL* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *NÍVEL*: ${_level[i].level}\n`
                    }
                    await reply(leaderboardlvl)
              
                } catch (err) {
                    console.error(err)
                    await reply(`minimo ${len} usuários para poder acessar o banco de dados`)
                }
				break
					
					case 'ttt':

if (!isGroup) {
 reply(mess.only.group)
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)
}  else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname2
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text, tescuk, crtt)
client.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
client.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 240000) //4 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
client.sendMessage(from, ttthelp(prefix), text)
break

case 'tttme':
if (!isGroup) return reply(mess.only.group)
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
client.sendMessage(from, tttme(pushname2, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank':
if (!isGroup) return reply(mess.only.group)
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await client.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: mek})
}
break

case 'coord':

tttset.playertest = sender
if (!isGroup) {
reply(mess.only.group)
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}ttt [DIFICULDADE] para iniciar`)
} else if (tttset.player != tttset.playertest) {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 2005) + 2005
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 7005) + 7005
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 20000) + 20000
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 100000) + 100000
addLevelingXp(tttset.player, randomTTTXP)
break
}
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 705) + 705)
addLevelingXp(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 2005) + 2005)
addLevelingXp(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break
}	
client.sendMessage(from, `🎉🎉 VITÓRIA DO AKAME-BOT 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
client.sendMessage(from, `🎉🎉 VITÓRIA DO AKAME-BOT 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
client.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
//_FIM DO JOGO DA VELHA By: Resen
					case 'setsafelink':
				case 'setsafe':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					safelink = args[0]
					reply(`palavra chave alterada : ${safelink}`)
					break 
					
					 case 'badword':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}leveis 1 para ativar `)
                    if (Number(args[0]) === 1) {
                        if (isBadWord) return reply('❎O recurso BADWORD já está ativado no grupo❎')
                        _badword.push(from)
                        fs.writeFileSync('./database/json/badword.json', JSON.stringify(_badword))
                        reply('✅O recurso BADWORD foi ativado✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isBadWord) return reply('❎O recurso BADWORD não está ativado no grupo❎')
                        let position = false
                        Object.keys(_badword).forEach((i) => {
                            if (_badword[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            _badword.splice(position, 1)
                            fs.writeFileSync('./database/json/badword.json', JSON.stringify(_badword))
                        }
                        reply('❌O recurso BADWORD foi desativado❌')
                    } else {
                        reply(`Digite da forma correta:\nComando: ${prefix}badword 1, para ativar e 0 para desativar`)
                    }
                    break

                case 'addbadword':
                   
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    const bw = body.slice(12)
                    _bad.push(bw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(_bad))
                    reply('Palavra adicionada')
                    break

                case 'dellbadword':
                  
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    let dbw = body.slice(13)
                    _bad.splice(dbw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(_bad))
                    reply('Palavra removida')
                    break

                case 'listbadword':
                    let lbw = `lista de palavras proibidas\nTotal : ${bad.length}\n`
                    for (let i of _bad) {
                        lbw += ` ${i.replace(_bad)}\n`
                    }
                    reply(lbw)
                    break

				case 'grouplist':
				case 'gruplist':
					if (isBanned) return reply(mess.only.benned)
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group ${name} :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
				break 
				
	
			case 'chatlist':
					client.updatePresence(from, Presence.composing)
					teks = 'Esta é uma lista de números de bate-papo :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
				
			case 'help':
			case 'menu':
			if (isBanned) return reply(mess.only.benned)
				uptime = process.uptime()
				user.push(sender)
					    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				myMonths = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
                myDays = ['Domigo','Segunda-feira','terça','Quarta feira','Quinta feira','Sexta','Sábado'];
                var tgl = new Date();
                var day = tgl.getDate()
                  bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
					client.sendMessage(from, help(prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal), text, {quoted: mek})
    				break

				case 'bahasa':
				if (isBanned) return reply(mess.only.benned)    
				client.sendMessage(from, bahasa(), text, {quoted: mek})
				break
				case 'donuuasi':
				case 'donate':
					client.sendMessage(from, donasi(instagram, name), text, {quoted: mek})
					break
				case 'info':
					me = client.user
					user.push(sender)
					uptime = process.uptime()
					teks = `⟩➢ *Nome Bot* : ${me.name}\n⟩➢ *Numero Bot* : @${me.jid.split('@')[0]}\n⟩➢ *prefix* : | ${prefix} |\n⟩➢ *Total Block* : ${blocked.length}\n⟩➢ *Lorde Screamo* : ${kyun(uptime)}\n\n⟩➢ Total Do Utilizador: *${user.length}* Usuario\n⟩➢ *Special Agradecimentos * :\n⟩➢ Deus \n⟩➢ Jesus`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'List Block :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'banlist':
				ben = '```Lista dos Banidos``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					client.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break 
				case 'premiumlist':
				prem = '```Lista Users Premium  LOLI B O T``` :\n'
					for (let userprem of userpremium) {
						prem += `~> @${userprem.split('@')[0]}\n`
					}
					prem += `Total : ${userpremium.length}`
					client.sendMessage(from, prem.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": userpremium}})
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Só uma foto mano')
					}
					await limitAdd(sender) 
					break 
				case 'gifstiker':
				case 'stiker':
				case 'sticker':
				case 's':
				case 'fig':
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						if (isLimit(sender)) return reply(limitend(pushname2))
						reply(mess.wait)
						const ran= getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						const ran= getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`\`\`\`Falha, no momento da conversao ${tipe} ke stiker\`\`\``)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falhou, Ocorreu um erro. Por favor tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								client.sendMessage(from, buff, sticker, {quoted: mek})
							})
						})
					} else {
						reply(`Envie fotos com legendas ${prefix}sticker ou tags de imagem que ja foram enviadas`)
					}
					await limitAdd(sender) 
					break 
					

				case 'infogc':
				case 'groupinfo':
				case 'infogrup':
				case 'grupinfo':
				if (isBanned) return reply(mess.only.benned)    
                client.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                ppUrl = await client.getProfilePicture(from)
                reply(mess.wait) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NAME* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESK* : ${groupDesc}`})
                break
			
				case 'animecry':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await getBuffer(`http://lolhuman.herokuapp.com/api/random/cry?apikey=OctavioBartah1508`)
                   if (isLimit(sender)) return reply(limitend(pushname2))
                   if (isBanned) return reply(mess.only.benned)
                   if (!isGroup) return reply(mess.only.group)
					if (anu.error) return reply(anu.error)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
					
					case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/cry?apikey=OctavioBartah1508`, {method: 'get'})
                   if (isLimit(sender)) return reply(limitend(pushname2))
                   if (isBanned) return reply(mess.only.benned)
                   if (!isGroup) return reply(mess.only.group)
					if (anu.error) return reply(anu.error)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				case 'gruplink':
				case 'grouplink':
				if (isBanned) return reply(mess.only.benned)    
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink do Grupo *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        break
				
				case 'ban':
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'addprem':
					client.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					userpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					addpremium = userpremium
					reply(`*ʙᴇʀʜᴀꜱɪʟ ᴍᴇɴᴀᴍʙᴀʜᴋᴀɴ ${addpremium} ᴋᴇ ᴜꜱᴇʀ ᴩʀᴇᴍɪᴜᴍ*\n\nꜱᴇʟᴀᴍᴀᴛ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ꜰɪᴛᴜʀ ᴩʀᴇᴍɪᴜᴍ:)`)
					break
				case 'removeprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					addpremium.splice(`${rprem}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/json/premium.json', JSON.stringify(addpremium))
					reply(`Remover Com Sucesso wa.me/${rprem} De Um Usuario Premium`)
					break
				case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/json/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
				case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `Pedidos aceitos, quadra ${body.slice(7)}@c.us`, text)
					break
				case 'unblock':
                    if (isBanned) return reply(mess.only.benned)    
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `Pedidos aceitos, desbloquear ${body.slice(9)}@c.us`, text)
				    break
				    
				  case 'ownergrup':
				  case 'ownergroup':
               client.updatePresence(from, Presence.composing) 
              options = {
          text: `Owner Group ini adalah : wa.me/${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           client.sendMessage(from, options, text, { quoted: mek } )
				break
				case 'leave': 
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
			    	anu = await client.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
	                break
	            case 'getses':
                    if (!isOwner) return client.reply(from, 'Este comando é apenas para o proprietário do bot ', id)
                    const sesPic = await client.getSnapshot()
                    client.sendFile(from, sesPic, 'session.png', 'Neh...', id)
                    break
				case 'setname':
				if (isBanned) return reply(mess.only.benned)    
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, `\`\`\`✓Alteraou o nome do grupo para\`\`\` *${body.slice(9)}*`, text, {quoted: mek})
                break
                case 'setdesc':
                if (isBanned) return reply(mess.only.benned)    
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, `\`\`\`✓Alteracao das descricao do grupo com sucesso\`\`\` *${groupMetadata.subject}* Torna-se: *${body.slice(9)}*`, text, {quoted: mek})
                break
				case 'tts':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return client.sendMessage(from, 'Qual código de idioma, mano?\n Se você não sabe o código do idioma, basta digitar *${prefix}bahasa*', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Cadê o texto, mano?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('O texto é demais mano')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Falhou mano:(')
							reply(mess.wait)
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender) 
					break  
					
					
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                client.sendMessage(from, `Rapidez: ${latensi.toFixed(4)} _Segundo_`, text, { quoted: mek})
                    break
                case 'tagme':
                if (isBanned) return reply(mess.only.benned)    
					var nig = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} tag!`,
					contextInfo: { mentionedJid: [nig] }
					}
					client.sendMessage(from, tag, text, {quoted: mek})
					break
      
				case 'meme':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					break 
				case 'memeindo':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					break 
			
					await limitAdd(sender)
					break 

// only grup fitur anime
          
				case 'kiss':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random2/kiss?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
					case 'baka':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random2/baka?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
					case 'gawr':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/sticker/gawrgura?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
		
	/*									case 'blowjob':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
										 if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/nsfw/blowjob?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, image, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break */
					
										case 'cum':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
										 if (!isGroupAdmins) return reply(mess.only.admin)
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await getBuffer(`http://lolhuman.herokuapp.com/api/random2/cum?apikey=OctavioBartah1508`)
					exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
															case 'poke':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random2/poke?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
							case 'smug':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random2/smug?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
												case 'cuddle':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random2/cuddle?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
												case 'cry':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/cry?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
												case 'abrac':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/hug?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
												case 'lick':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/lick?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
																	case 'sorrir':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/smile?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
																	case 'maos':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`http://lolhuman.herokuapp.com/api/random/handhold?apikey=OctavioBartah1508`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
		/*			case 'kill':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await getBuffer(`http://lolhuman.herokuapp.com/api/random/kill?apikey=OctavioBartah1508`)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					*/
										case 'blowjob':  
                if (!isAnime) return reply(' *Ative o modo anime* ')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
					
	 case 'bully':
                    
                    const bul = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"]
                    tpb = bul[Math.floor(Math.random() * (bul.length))]
                    figb = fs.readFileSync('./src/bully/' + tpb + '.webp')
	
                            client.sendMessage(from, figb, sticker, {quoted: mek})
					  break

                    								
					
					
					
					
					
					
				
							  case 'hentai':
					
		if (isBanned) return reply(mess.only.benned)    
					 if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

//nye = await getBuffer('http://lolhuman.herokuapp.com/api/random2/hentai?apikey=OctavioBartah1508')
//client.sendMessage(from, nye, image, { caption: 'nyaa!!', quoted: mek })
		res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
		buffer = await getBuffer(res.result)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: 'nyaa'})
                break

					
										
				
							  case 'hneko':
					
		if (isBanned) return reply(mess.only.benned)    
					 if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

//nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/nsfw/neko?apikey=OctavioBartah1508')
//client.sendMessage(from, nye, image, { caption: 'nyaa!!', quoted: mek })
		res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
		buffer = await getBuffer(res.result)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: 'nyaa'})

                break

			
					
										
				
							  case 'htrap':
					
		if (isBanned) return reply(mess.only.benned)    
					 if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

//nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/nsfw/trap?apikey=OctavioBartah1508')
//client.sendMessage(from, nye, image, { caption: 'nyaa!!', quoted: mek })
		res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, {method: 'get'})
		buffer = await getBuffer(res.result)
		client.sendMessage(from, buffer, image, {quoted: mek, caption: 'nyaa'})

                break

			
					
										
				
							  case 'hyaoi':
					
		if (isBanned) return reply(mess.only.benned)    
					 if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/nsfw/yaoi?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'nyaa!!', quoted: mek })

                break

					
										
				
							  case 'elf':
					
		if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/elf?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'elf!!', quoted: mek })

                break

			
			
					  case 'waifu':
					
		if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/waifu?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'waifu!!', quoted: mek })

                break

					
					  case 'shota':
					
		if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/shota?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'shota!!', quoted: mek })

                break
					
										  case 'neko':
					
		if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/neko?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'neko!!', quoted: mek })

                break
					
				  case 'ecchi':
					
		if (isBanned) return reply(mess.only.benned)  
					 if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/nsfw/ecchi?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'ecchi!!', quoted: mek })

                break
				
									  case 'kanna':
					
		if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/kanna?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'kanna!!', quoted: mek })

                break
												  case 'ero':
					
		if (isBanned) return reply(mess.only.benned)    
					 if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random2/erokemo?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'ero!!', quoted: mek })

                break
					
												  case 'hyuri':
					
		if (isBanned) return reply(mess.only.benned)    
					 if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random2/eroyuri?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'nyaa!!', quoted: mek })

                break
			
								  case 'erok':
					
		if (isBanned) return reply(mess.only.benned)    
					 if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random2/erokemo?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'nyaa!!', quoted: mek })

                break
					
						  case 'fox':
					
		if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random2/fox_girl?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'fox!!', quoted: mek })

                break
		
											  case 'anime':
					
		if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/art?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'fanart!!', quoted: mek })

                break
					
							
											  case 'wallpaper':
					
		if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/wallnime?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'wallpaper!!', quoted: mek })

                break
		
						  case 'ahegao':
					
		if (isBanned) return reply(mess.only.benned)    
					if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/nsfw/ahegao?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'ahegao!!', quoted: mek })

                break
					
											  case 'feet':
					
		if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random2/feet?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'feet!!', quoted: mek })

                break
		
		  case 'kemono':
					
		if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random2/kemonomimi?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'kemono!!', quoted: mek })

                break
					
					case 'shinobu':
					
		if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/shinobu?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'shinobu!!', quoted: mek })

                break
					
												  case 'tidds':
					
		if (isBanned) return reply(mess.only.benned)    
					 if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random/nsfw/biganimetiddies?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'nyaa!!', quoted: mek })

                break
				  case 'pussy':
		if (isBanned) return reply(mess.only.benned)    
					 if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random2/pussy_jpg?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'nyaa!!', quoted: mek })

                break
				  case 'solo':
		if (isBanned) return reply(mess.only.benned)    
					 if (!isGroupAdmins) return reply(mess.only.admin)
				if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)

nye = await getBuffer('http://lolhuman.herokuapp.com/api/random2/solo?apikey=OctavioBartah1508')
client.sendMessage(from, nye, image, { caption: 'nyaa!!', quoted: mek })

                break					
					
					
		
				                case 'blood':
              	    if (args.length < 1) return reply('qual txt anjo??')
                    teks = `${body.slice(8)}`
		    	reply(mess.wait)
                    if (teks.length > 10) return client.sendMessage(from, 'limite de 10 letras', text, {quoted: mek})
		anu = await fetchJson(`http://lolhuman.herokuapp.com/api/textprome/horrorblood?apikey=OctavioBartah1508&text=${teks}`, {method: 'get'})
		bufferkmn = await getBuffer(anu.result)
		client.sendMessage(from, bufferkmn, image, {quoted: mek})
                                        await limitAdd(sender)
			     	break	
					
					    case 'water':
					if (args.length < 1) return reply('qual txt anjo??')
					telskla = body.slice(7)
					if (telskla.length > 15) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://kocakz.herokuapp.com/api/flamingtext/water?text=${telskla}`, {method: 'get'})
					bufferkmn = await getBuffer(anu.result)
					client.sendMessage(from, bufferkmn, image, {quoted: mek})
                                        await limitAdd(sender)
					break
/*/////////////////////////JOGOS E COISAS RANDOM*/////////////////////////////
					 case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                     if (args.length < 1) return reply(`Digite ${prefix}antilink 1 para ativar`)
                    if (Number(args[0]) === 1) {
                        if (isAntiLink) return reply('❎O recurso ANTILINK já está ativo no grupo❎')
                        antilink.push(from)
                        fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
                        reply('✅O recurso ANTILINK foi ativado nesse grupo✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiLink) return reply('❎O recurso ANTILINK não está ativado no grupo❎')
                        let position = false
                        Object.keys(antilink).forEach((i) => {
                            if (antilink[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            antilink.splice(position, 1)
                            fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
                        }
                        reply('🚫O recurso ANTILINK foi desativado nesse grupo🚫')
                    } else {
                        reply(`Digite ${prefix}antlink 1 para ativar, 0 para desativar o recurso`)
                    }
                    break
		case 'top5':
                    try {
                        if (args.length < 1) return reply('top5....?')
                        if (!isGroup) return reply(mess.only.group)
                        d = []
                        top1 = body.slice(5)
                        teks = `️‍Top 5${top1}:\n`
                        for (i = 0; i < 5; i++) {
                            r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                            teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
                            d.push(groupMembers[r].jid)
                        }
                        mentions(teks, d, true, {quoted: mek})
                    } catch (e) {
                        console.log(e)
                        reply('ocorreu um erro')
                    }
                    break

		case 'chance':
                    client.updatePresence(from, Presence.composing)
                    var avb = body.slice(7)
                    if (args.length < 1) return client.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do mundo acabar`, text, {quoted: mek})
                    random = `${Math.floor(Math.random() * 100)}`
                    hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
                    client.sendMessage(from, hasil, text, {quoted: mek,contextInfo: {mentionedJid: [sender]}})
                    break

			case 'dado':
                    const dadus = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
                    dadu = dadus[Math.floor(Math.random() * dadus.length)]
                    dador = fs.readFileSync('./src/dados/' + dadu + '.webp')
                    client.sendMessage(from, dador, sticker, {quoted: mek})
                    break

                case 'caracoroa':
                    const cara = fs.readFileSync('./database/cara/cara.webp');
                    const coroa = fs.readFileSync('./database/cara/coroa.webp');
                    cararo = ["cara", "coroa"]
                    fej = cararo[Math.floor(Math.random() * cararo.length)]
                    gg = fej
                    reply(`você conseguiu: ${fej}`)
                    cararoa = fs.readFileSync('./src/cara/' + fej + '.webp')
                    client.sendMessage(from, cararoa, sticker, {quoted: mek})
                    break

                case 'morte':
                case 'death':
                    idde = ["30", "76", "90", "72", "83", "73", "83", "74", "92", "100", "94", "48", "37", "53", "63"]
                    idade = idde[Math.floor(Math.random() * (idde.length))]
                    morte = `Pessoas com este nome: ${pushname2} \nTendem a morrer aos ${idade} anos de idade.`
                    reply(morte)
                    break

                case 'sn':
                    const sn = ['sim', 'não']
                    gosto = body.slice(4)
                    if (args.length < 1) client.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Italu é um baiano preguiçoso?`, text, {
                        quoted: mek
                    })
                    const jawab = sn[Math.floor(Math.random() * (sn.length))]
                    hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
                    reply(hasil)
                    break

                case 'gadometro':
                case 'gado':
                    var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
                    var gado = chifre[Math.floor(Math.random() * chifre.length)]
                    gadop = `${Math.floor(Math.random() * 100)}`
                    hisil = `Você é:\n\n${gado}`
                    reply(hisil)
                    break

                case "ppt":
                    if (args.length < 1) return reply('Qual é a sua jogada?')
                    ppt = ["pedra", "papel", "tesoura"]	
                    ppy = ppt[Math.floor(Math.random() * ppt.length)]
			const ppg = Math.ceil(Math.random() * 500)
                      addLevelingXp(sender, ppg)
                    pptb = ppy
                    pph = `Você ganhou ${ppg} em xp`
                    if ((pptb == "pedra" && args == "papel") ||
                        (pptb == "papel" && args == "tesoura") ||
                        (pptb == "tesoura" && args == "pedra")) {
                        var vit = "vitoria"
                    } else if ((pptb == "pedra" && args == "tesoura") ||
                        (pptb == "papel" && args == "pedra") ||
                        (pptb == "tesoura" && args == "papel")) {
                        var vit = "derrota"
                    } else if ((pptb == "pedra" && args == "pedra") ||
                        (pptb == "papel" && args == "papel") ||
                        (pptb == "tesoura" && args == "tesoura")) {
                        var vit = "empate"
                    } else if (vit = "undefined") {
                        return reply('Algo deu errado')
                    }
                    if (vit == "vitoria") {
                        var tes = "Vitória do jogador"
                    }
                    if (vit == "derrota") {
                        var tes = "A vitória é da Loli"
                    }
                    if (vit == "empate") {
                        var tes = "O jogo terminou em empate"
                    }
                    reply(`Loli jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
                    if (tes == "Vitória do jogador") {
                        reply(pph)
                    }
                    break			
					
					
		case 'hidetag':
                client.updatePresence(from, Presence.composing) 
                if (!isGroup) return reply(mess.only.group)
                teks = body.slice(9)
                group = await client.groupMetadata(from);
                member = group['participants']
                jids = [];
                member.map( async adm => {
                jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                 })
                 options = {
                 text: teks,
                contextInfo: {mentionedJid: jids},
                quoted: mek
                }
              await client.sendMessage(from, options, text)
               break
					
					
					
					
				 case 'game':
				//	anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*Responda :* De quem é a famosa frase “Penso, logo existo"?', text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
				//	setTimeout( () => {
				//	client.sendMessage(from, '_10 segundos para ir�_', text) // ur cods
				//	}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 segundos para ir_�', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_5 segundos para ir_�', text) // ur cods
					}, 5000) // 1000 = 1s,
				

					setTimeout( () => {
					client.sendMessage(from, 'Descartes', text, { quoted: mek }) // ur cods
					}, 10000) // 1000 = 1s,
					break
				
				
				
				
				
				case 'pau':
                    random = `${Math.floor(Math.random() * 35)}`
                    const tamanho = random
                    if (tamanho < 13) {
                        pp = 'só a fimose'
                    } else if (tamanho == 13) {
                        pp = 'passou da média😳'
                    } else if (tamanho == 14) {
                        pp = 'passou da média😳'
                    } else if (tamanho == 15) {
                        pp = 'eita, vai pegar manga?'
                    } else if (tamanho == 16) {
                        pp = 'eita, vai pegar manga?'
                    } else if (tamanho == 17) {
                        pp = 'calma man, a mina não é um poço😳'
                    } else if (tamanho == 18) {
                        pp = 'calma man, a mina não é um poço😳'
                    } else if (tamanho == 19) {
                        pp = 'calma man, a mina não é um poço😳'
                    } else if (tamanho == 20) {
                        pp = 'você tem um poste no meio das pernas'
				    figb = fs.readFileSync('./src/pau/p1' + '.webp')
			     setTimeout(() => {
                            client.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
                    } else if (tamanho == 21) {
                        pp = 'você tem um poste no meio das pernas'
					    figb = fs.readFileSync('./src/pau/p1' + '.webp')
			     setTimeout(() => {
                            client.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
                    } else if (tamanho == 22) {
                        pp = 'você tem um poste no meio das pernas'
			    		figb = fs.readFileSync('./src/pau/p1' + '.webp')
			     setTimeout(() => {
                            client.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
                    } else if (tamanho == 23) {
                        pp = 'você tem um poste no meio das pernas'
				  figb = fs.readFileSync('./src/pau/p1' + '.webp')
			     setTimeout(() => {
                            client.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
                    } else if (tamanho == 24) {
                        pp = 'você tem um poste no meio das pernas'
			 figb = fs.readFileSync('./src/pau/p1' + '.webp')
			     setTimeout(() => {
                            client.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
                    } else if (tamanho > 25) {
                        pp = 'vai procurar petróleo com isso?'
					figb = fs.readFileSync('./src/pau/p1' + '.webp')
			    setTimeout(() => {
                            client.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100) 
			  
                    }
                    hasil = `Seu pau tem ${random}cm\n\n${pp}`
                    reply(hasil)
		
                    break

                case 'gay':
                    client.updatePresence(from, Presence.composing)
                    random = `${Math.floor(Math.random() * 100)}`
                    boiola = random
                    if (boiola < 20) {
                        bo = 'hmm... você é hetero😔'
                    } else if (boiola == 21) {
                        bo = '+/- boiola'
                    } else if (boiola == 23) {
                        bo = '+/- boiola'
                    } else if (boiola == 24) {
                        bo = '+/- boiola'
                    } else if (boiola == 25) {
                        bo = '+/- boiola'
                    } else if (boiola == 26) {
                        bo = '+/- boiola'
                    } else if (boiola == 27) {
                        bo = '+/- boiola'
                    } else if (boiola == 28) {
                        bo = '+/- boiola'
                    } else if (boiola == 29) {
                        bo = '+/- boiola'
                    } else if (boiola == 30) {
                        bo = '+/- boiola'
                    } else if (boiola == 31) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 32) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 33) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 34) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 35) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 36) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 37) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 38) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 39) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 40) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 41) {
                        bo = 'você é né?😏'
                    } else if (boiola == 42) {
                        bo = 'você é né?😏'
                    } else if (boiola == 43) {
                        bo = 'você é né?😏'
                    } else if (boiola == 44) {
                        bo = 'você é né?😏'
                    } else if (boiola == 45) {
                        bo = 'você é né?😏'
                    } else if (boiola == 46) {
                        bo = 'você é né?😏'
                    } else if (boiola == 47) {
                        bo = 'você é né?😏'
                    } else if (boiola == 48) {
                        bo = 'você é né?😏'
                    } else if (boiola == 49) {
                        bo = 'você é né?😏'
                    } else if (boiola == 50) {
                        bo = 'você é ou não?🧐'
                    } else if (boiola > 51) {
                        bo = 'você é gay🙈'
                    }
                    hasil = `Você é ${random}% gay\n\n${bo}`
                    reply(hasil)
                    break

                case 'roleta':
                    const tiro = ["vazio", "vazio", "vazio", "vazio", "vazio", "vazio", "vazio", "vazio", "pow", "pow"]
                    const figr = ["tambor"]
                    tpa = tiro[Math.floor(Math.random() * (tiro.length))]
                    tpb = figr[Math.floor(Math.random() * (figr.length))]
                    figb = fs.readFileSync('./src/' + tpb + '.webp')
                    if (tpa == "vazio") {
                        var morte = "Você teve sorte dessa vez, o tambor estava vazio."
                    } else if (tpa == "pow") {
                        var morte = "Tinha uma bala no tambor, POW!"
                    }
                    if (morte == "Tinha uma bala no tambor, POW!") {
                        setTimeout(() => {
                            client.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
                    }
                    setTimeout(() => {
                        client.sendMessage(from, morte, text, {
                            quoted: mek
                        })
                        client.groupRemove(sender)
                    }, 2300)
                    break

                case 'amongus':
		if (!isGroupAdmins) return reply(mess.only.admin)
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pro = '.\n'
                    for (let _ of mentioned) {
                        pro += `@${_.split('@')[0]}\n`
                    }
                    sus =
                        `.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`

                    mentions(`${sus}`, mentioned, true)
			client.groupRemove(from, mentioned)
                    break

                case 'abraço':
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Mecione dois membros do grupo')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pro = '.\n'
		const kigr = ["h1", "h2", "h3", "h4", "h5", "h6"]
                    tpb = kigr[Math.floor(Math.random() * (kigr.length))]
                    figb = fs.readFileSync('./src/hug/' + tpb + '.webp')
                    for (let _ of mentioned) {
                        pro += `@${_.split('@')[0]}\n`
                    }
                    yhb = `Que fofo... @${mentioned[0].split('@')[0]} deu um abraço apertado em @${mentioned[1].split('@')[0]}`
		                            setTimeout(() => {
                            client.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
		    
                    mentions(`${yhb}`, mentioned, true, {
                            quoted: mek
                        })

                    break

                case 'shipp':
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Mecione dois membros do grupo')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pro = '.\n'
                    for (let _ of mentioned) {
                        pro += `@${_.split('@')[0]}\n`
                    }
                    const ligr = ["c1", "c2", "c3", "c4", "c5", "c6"]
                    tpb = ligr[Math.floor(Math.random() * (ligr.length))]
                    figb = fs.readFileSync('./src/cry/' + tpb + '.webp')
		    const gigr = ["ks1", "ks2", "ks3", "ks4", "ks5", "ks6"]
                    gpb = gigr[Math.floor(Math.random() * (gigr.length))]
                    gigb = fs.readFileSync('./src/kiss/' + gpb + '.webp')			
                    porc = `${Math.floor(Math.random() * 100)}`
                    yhb = `@${mentioned[0].split('@')[0]} tem uma chance de ${porc}% de namorar com @${mentioned[1].split('@')[0]}`
			      if (porc < 50) {
                        setTimeout(() => {
                            client.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
                    
			      }

					else if (porc > 50) {
                        setTimeout(() => {
                            client.sendMessage(from, gigb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
                    }
                    setTimeout(() => {
                                mentions(`${yhb}`, mentioned, true, {
                            quoted: mek
                        })
                    }, 2300)

                    break
					
		 case 'mamada':
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Mecione dois membros do grupo')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pro = '.\n'
                    for (let _ of mentioned) {
                        pro += `@${_.split('@')[0]}\n`
                    }
                    const zigr = ["bl1", "bl2", "bl3", "bl4", "bl5", "bl6"]
                    tpb = zigr[Math.floor(Math.random() * (zigr.length))]
                    figb = fs.readFileSync('./src/blow/' + tpb + '.webp')
	
                    yhb = `@${mentioned[0].split('@')[0]} deu uma mamada em @${mentioned[1].split('@')[0]}`
			    
			     mentions(`${yhb}`, mentioned, true, {
                            quoted: mek
                        })
	
                        setTimeout(() => {
                            client.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
                    							
			break
			
					
					  case 'kill':
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Mecione dois membros do grupo')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pro = '.\n'
		const sigr = ["k1", "k2", "k3", "k4", "k5", "k6"]
                    tpb = sigr[Math.floor(Math.random() * (sigr.length))]
                    figb = fs.readFileSync('./src/kill/' + tpb + '.webp')
                    for (let _ of mentioned) {
                        pro += `@${_.split('@')[0]}\n`
                    }
                    yhb = `A paz nunca foi uma opção... @${mentioned[0].split('@')[0]} acabou de matar @${mentioned[1].split('@')[0]}`
		    
                    mentions(`${yhb}`, mentioned, true, {
                            quoted: mek
                        })
				setTimeout(() => {
                            client.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
                    break
			/*/////////////////////////SISTEMA DE LEVEL*/////////////////////////////
					
	case 'event':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isOwner) return reply(mess.only.ownerB)
                                        if (args.length < 1) return reply('digite 1 para ativar')
                                        if (Number(args[0]) === 1) {
                                                if (isEventon) return reply('*ATIVADO* !!!')
                                                event.push(from)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*Evento ativo nesse grupo!*')
                                        } else if (Number(args[0]) === 0) {
                                                event.splice(from, 1)
                                                fs.writeFileSync('./database/json/event.json', JSON.stringify(event))
                                                reply('*Evento desativado nesse grupo!*')
                                        } else {
                                                reply(ind.satukos())
                                        }
                                        break				
					
					
					 case 'level':
                if (!isLevelingOn) return reply(mess.levelnoton)
                if (!isGroup) return reply(mess.only.group)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
              //  sem = sender.replace('@s.whatsapp.net','')
			//	var nom = mek.participant
			//		const tag = {
			//		text: `@${nom.split("@s.whatsapp.net")[0]} tag!`,
			//		contextInfo: { mentionedJid: [nom] }
			//		}
                resul =  `┏━━❉ *NÍVEL* ❉━━\n┣⊱ *Nome* : ${pushname2}\n┣⊱ Número : wa.me/${sender.split("@")[0]}\n┣⊱ XP :  ${userXp}/${requiredXp}\n┣⊱ Seu nível : ${userLevel}\n┣⊱ Patente : ${role}\n┗━━━━━━━━━━━━`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
            break
				case 'calunia':
				if (args.length < 1) return reply(`Usa :\n${prefix}calunia [@tag|mensagem|resposta]]\n\nExemplo : \n${prefix}calunia @tagmember|oie|oi mano`)
				var fitn = body.slice(7)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace3 = fitn.split("|")[0];
					var target3 = fitn.split("|")[1];
					var bot3 = fitn.split("|")[2];
					client.sendMessage(from, `${bot3}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target3}` }}})
					break
            case 'leveling':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Digite 1 para ativar o recurso')
                if (args[0] === '1') {
                    if (isLevelingOn) return reply('*o recurso de nível já estava ativo antes*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
                } else if (args[0] === '0') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/json/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
                } else {
                    reply(' *Digite o comando 1 para ativar, 0 para desativar* \n *Exemplo: ${prefix}leveling 1*')
                }
            break
					
					 case 'rg':
                                    
                                        if (!far.includes('|')) return  reply('Ta errado po')
                                        const namaUser = far.substring(0, far.indexOf('|') - 0)
                                        const umurUser = far.substring(far.lastIndexOf('|') + 1)
                                        const serialUser = createSerial(20)
                                        veri = sender
                                        if (isGroup) {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                                        } else {
                                                addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                                                await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                                                addATM(sender)
                                                addLevelingId(sender)
                                                console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                                        }
                                        break
                                case 'mining':
                                   
                                        if (!isEventon) return reply(`lamento *${pushname2}*, mas evento não foi ativada pelo proprietário`)
					if (isGroupAdmins) {
                    const minin = Math.ceil(Math.random() * 20000)
                      addLevelingXp(sender, minin)
                      reply(`Esse e pra vc  ${minin} 🙈`)
                      }else{
                                                const mining = Math.ceil(Math.random() * 5000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*seguro* *${pushname2}* você pega *${mining}Xp*`)
			      await limitAdd(sender)
		      }
                                        
                                        break
					
					case 'mowner':
                                   
                                        if (!isEventon) return reply(`lamento *${pushname2}*, mas evento não foi ativada pelo proprietário`)
                                        if (!isOwner) reply('Você não é a mamae!')
                                                const one = 10000000
                                                addLevelingXp(sender, one)
                                                reply(`porque você é nosso dono da equipe bot enviada ${one}Xp para você`)
                                        
					
                                        await limitAdd(sender)
                                        break
					
					case 'sendxp':
                                   
                                        if (!isEventon) return reply(`lamento *${pushname2}*, mas evento não foi ativada pelo proprietário`)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					
                                
					if (mentioned.length > 1) {
						teks = 'Pedidos aceitos, bora dar XP! :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						const mini = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(mentioned, mini)
						mentions(teks, mentioned, true)	
					}	
						else {
                                                const min = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(mentioned, min)
                                                await reply(`*Entendido ADM!* *${mentioned}* você pega *${min}Xp*`)
                                        }
                                        await limitAdd(sender)
                                        break
			/*/////////////////////////GRUPO*/////////////////////////////
					case 'dorot':
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args[0] === 'a') {
					    reply(`*❗️GRUPO ABERTO❗*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'f') {
						reply(`*❗GRUPO ABRE AMANHÃ AS 7:00❗*️`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				break      
	    
				 case 'slot':
                    const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
              const mi = Math.ceil(Math.random() * 5000)
                    if ((somtoy == '🥑 : 🥑 : 🥑') || (somtoy == '🍉 : 🍉 : 🍉') || (somtoy == '🍓 : 🍓 : 🍓') || (somtoy == '🍎 : 🍎 : 🍎') || (somtoy == '🍍 : 🍍 : 🍍') || (somtoy == '🥝 : 🥝 : 🥝') || (somtoy == '🍑 : 🍑 : 🍑') || (somtoy == '🥥 : 🥥 : 🥥') || (somtoy == '🍋 : 🍋 : 🍋') || (somtoy == '🍐 : 🍐 : 🍐') || (somtoy == '🍌 : 🍌 : 🍌') || (somtoy == '🍒 : 🍒 : 🍒') || (somtoy == '🔔 : 🔔 : 🔔') || (somtoy == '🍊 : 🍊 : 🍊') || (somtoy == '🍇 : 🍇 : 🍇')) {
                        var vitr = "Você ganhou!!!"
                    } else {
                        var vitr = "Você perdeu..."
                    }
                    const slott =
                        `Consiga 3 iguais para ganhar
╔═══ ≪ •❈• ≫ ════╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║         [💰SLOT💰 | 777 ]        
╚════ ≪ •❈• ≫ ═══╝
                  
${vitr}`
                    if (vitr == "Você ganhou!!!") {
                        setTimeout(() => {
                            reply(`Você ganhou ${mi} em xp!!!`)
                        }, 1100)
			    
			    addLevelingXp(sender, mi)
                    }
                    client.sendMessage(from, slott, text, {quoted: mek})
                    break

					
					
				case 'naruto':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
					
	/*				case 'shota':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=Shota-anime`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: '190!!', quoted: mek })
					await limitAdd(sender)
					break */
					
				case 'minato':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
					
				case 'loli':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
				//	anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=loli-chan`, {method: 'get'})
				//	min = JSON.parse(JSON.stringify(anu));
				//	ato =  min[Math.floor(Math.random() * min.length)];
				//	nye = await getBuffer(ato)
					// loli = await axios.get('https://tobz-api.herokuapp.com/api/randomloli?apikey=Tobzzz17')
         //   tobz.sendFileFromUrl(from, waifu.data.image, 'Waifu.jpg', `➸ Name : ${waifu.data.name}\n➸ Description : ${waifu.data.desc}\n\n➸ Source : ${waifu.data.source}`, id)
           res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '190'})
					break 
					
									case 'nami':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=nami-one-piece`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'nami!!', quoted: mek })
					await limitAdd(sender)
					break 
					
									case 'zoro':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=zoro-one-piece`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'zoro!!', quoted: mek })
					await limitAdd(sender)
					break 
					
														case 'erza':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=erza-one-piece`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'erza!!', quoted: mek })
					await limitAdd(sender)
					break 
					
					
				case 'yuri':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=yuri`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'yuri!!', quoted: mek })
					await limitAdd(sender)
					break 
					
				case 'neko':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=nekochan`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'neko!!', quoted: mek })
					await limitAdd(sender)
					break 
					
				case 'trap':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=trap+anime`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					client.sendMessage(from, nye, image, { caption: 'trap!!', quoted: mek })
					await limitAdd(sender)
					break 
					
					
				case 'boruto':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
	
									case 'hinata':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=hinata`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break 
					
					
					
				case 'sasuke':
				if (isBanned) return reply(mess.only.benned)    
			//	if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (isBanned) return reply(mess.only.benned)    
			//	if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 

				case 'yns':
				if (isBanned) return reply(mess.only.benned)    
			//	if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=yosuganosora+sora`, {method: 'get'})
					kan = JSON.parse(JSON.stringify(anu));
					eki =  kan[Math.floor(Math.random() * kan.length)];
					nye = await getBuffer(eki)
					client.sendMessage(from, nye, image, { caption: 'yosuga no sora!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'ngnl':
				if (isBanned) return reply(mess.only.benned)    
			//	if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=nogamenolife+sora`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					client.sendMessage(from, nye, image, { caption: 'No game no life!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'ichigo':
				if (isBanned) return reply(mess.only.benned)    
			//	if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=ichigo`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'Ichigo!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'kazuma':
				if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=konosuba+kazuma`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					client.sendMessage(from, nye, image, { caption: 'kazuma!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'ash':
				if (isBanned) return reply(mess.only.benned)    
			//	if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=ash+bananafish`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					client.sendMessage(from, nye, image, { caption: 'ash...', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'yaoi':
				if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=yaoi+anime`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'yaoi!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
				case 'maid':
				if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=maid+anime`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'maid!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
				case 'saikawa':
				if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=riko-saikawa-kobayashi-san`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'saikawa!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
			/*	case 'kanna':
				if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Modo Anime desligado sensei!* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=kanna-kobayashi-san`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kanna-chan!!', quoted: mek })
					await limitAdd(sender) 
					break */
					
				case 'miku':
				if (isBanned) return reply(mess.only.benned)    
			//	if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Harus Mengaktifkan Mode Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
// akhir fitur anime

				case 'anjing':
				if (isBanned) return reply(mess.only.benned)    
			//	if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://fdciabdul.tech/api/pinterest/?keyword=anjing`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender) 
					break 
                case 'resepmasakan':
                if (isBanned) return reply(mess.only.benned)    
         //       if (!isUser) return reply(mess.only.userB)
                if (isLimit(sender)) return reply(limitend(pushname2))
                reply(mess.wait)
                   anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
                   buff = await getBuffer(anu.result.image)
                   resep = `*${anu.result.title}*\n${anu.result.desc}\n\n*BAHAN² YG DIPERLUKAN*\n${anu.result.bahan}\n\n*CARA MASAKNYA*\n${anu.result.cara}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: resep})
                   await limitAdd(sender) 
                   break 
               case 'cersex':
                if (isBanned) return reply(mess.only.benned)    
      //          if (!isUser) return reply(mess.only.userB)
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   reply (mess.wait)
                   cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   client.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   await limitAdd(sender) 
                   break 

				case 'ytsearch':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Yang mau di cari apa?')
					reply(mess.wait)
					anu = await fetchJson(`https://api.arugaz.my.id/api/media/ytsearch?query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`Title\`\`\` : *${i.title}*\n\`\`\`Link\`\`\` : *https://youtu.be/${i.id}*\n\`\`\`Published\`\`\` : *${i.uploadDate}*\n\`\`\`Duration\`\`\` : *${i.duration}*\n\`\`\`Viewers: \`\`\`*${h2k(i.viewCount)}*\n\`\`\`Channel:\`\`\` *${i.channel.name}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
				case 'film':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Que filme quero encontrar?')
					reply(mess.wait)
				anu = await fetchJson(`https://api.vhtear.com/downloadfilm?judul=${body.slice(6)}&apikey=${VthearApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					film = `• Titulo: *${anu.result.judul}*\n• Resolucao: *${anu.result.resolusi}*\n• Link Download: *${anu.result.urlDownload}*\n`
					client.sendMessage(from, film, text, {quoted: mek})
					await limitAdd(sender) 
					break 
			
				case 'wp':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (args.length < 1) return reply('teks nya mana om')
					teksj = body.slice(4)
					reply(mess.wait)
					anwu = await fetchJson(`https://api.vhtear.com/walpaper?query=${teksj}&apikey=Jsieu8287362jshre82`, {method: 'get'})
					bufferx = await getBuffer(anwu.result.LinkImg)
					client.sendMessage(from, bufferx, image, {quoted: mek})
					break

			
				case 'ttp':
				if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('*Textnya mana om?*')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						bufferhgf = fs.readFileSync(rano)
						client.sendMessage(from, bufferhgf, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break  
					
			    case 'tagall':
			    if (isBanned) return reply(mess.only.benned)    
	//		    if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔═══✪ Marcando Os Queridinhos*${pushname2}* ✪══`+ teks +'╚═══〘 LOLI_SENPAI BOT 〙═══', members_id, true)
					break
			    case 'mentionall':
			    if (isBanned) return reply(mess.only.benned)    
		//	    if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔══〘  *${body.slice(12)}*  〙✪══`+teks+'╚═〘 LOLI_SENPAI BOT 〙', members_id, true)
					break
			    case 'kbbi':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
					if (args.length < 1) return reply('Apa quem quer encontrar mano?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('De acordo com Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break 
					case 'grup':
					case 'gc':
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Grupo de abertura com sucesso\`\`\` *${groupMetadata.subject}*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Sucesso no Fechamento do Grupo\`\`\` *${groupMetadata.subject}*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'say':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://anuz.herokuapp.com/api/bapakfont?kata=${body.slice(6)}`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender) 
					break 
				case 'artinama':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('O que voce quer procurar mano?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender) 
					break 
				case 'clearall':
					if (!isOwner) return reply('Quem é Você?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(`\`\`\`Exclua todos os chats com sucesso CAFEBOT\`\`\``)
					break
                                case 'bcgc':
					client.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bcgc = await client.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							client.sendMessage(_.jid, bcgc, image, {caption: `*「 GRUPO DE TRANSMISSÃO 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 GRUPO DE TRANSMISSAO 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Grupo de transmissão de sucesso')
					}
					break
				case 'bc':
					if (!isOwner) return reply('Quem é Você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, bc, image, {caption: `[ Izin Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão de sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *FXC7BOT BROADCAST* ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão de sucesso')
					}
					break
				case 'add':
				if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar alvo, talvez porque seja privado')
					}
					break
			    case 'kick':
			    if (isBanned) return reply(mess.only.benned)    
		//	    if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, emitidos :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Pedidos recebidos, emitidos, removendo o ze buceta : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'katiau':
				if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Esse é forte!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					buf = fs.readFileSync(`./audio/ash.mp3`)
					if (mentioned.length > 1) {
						teks = 'Pedidos aceitos, no edo tensei :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						

client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek})
						setTimeout( () => {
							client.groupRemove(from, mentioned)
					}, 8000)
						
					} else {
						mentions(`Katiau! : @${mentioned[0].split('@')[0]} foi embora`, mentioned, true)
						client.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek})
								setTimeout( () => {
							client.groupRemove(from, mentioned)
					}, 8000)
						
					}
					break
				case 'promote':
				case 'pm':
				if (isBanned) return reply(mess.only.benned)    
			//	if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos aceitos, você se torna administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
					case 'del':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
			    case 'demote':
			    if (isBanned) return reply(mess.only.benned)    
		//	    if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Pedidos recebidos, você não é um administrador :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Pedido recebido, Trazer para baixo : @${mentioned[0].split('@')[0]} agora é um mebro kkj`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
				if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista dos ademiro do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Falha ao converter adesivos em imagens ')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'nihhh'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
				case 'simi':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Cadê o texto mana?')
					teks = `{$body.slice(6)}`
					anu = await fetchJson(`https://api.i-tech.id/tools/simi?key=${TechApi}&lang=id&kata=${teks}`, {method: 'get'})
					if (anu.error) return reply('Simi não sabe mana')
					simii = `*${anu.result}`
					client.sendMessage(from, simii, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isSimi) return reply('O modo Simi está ativo')
						samih.push(from)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`Sucesso ative o modo simi no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						samih.splice(from, 1)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`✓Desativando o modo simi com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On ativar, Off desabilitar')
					}
					break
			    case 'nsfw':
			    if (isBanned) return reply(mess.only.benned)    
		//	    if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('O modo NSFW está ativo ')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Ativar com sucesso o modo nsfw no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Sukes menonaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On ativar, Off desabilitar')
					}
					break
				case 'modeanime':
				if (isBanned) return reply(mess.only.benned)    
			//	if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('O modo anime já está ativo')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Ativar com sucesso o modo anime no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Modo anime desativado com sucesso no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On ativar, Off desabilitar')
					}
					break
				case 'welcome':
				if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('Ja ativo mano')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Ativou com sucesso o recurso de boas-vindas no grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Desativando com sucesso o recurso de boas-vindas no grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On ativar, Off desabilitar')
					}
					break 
				case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VthearApi}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban+ '\n\n• Penjelasan: *'+ anu.result.desk+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakgambar':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, bufferkkk, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
				case 'family100':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${VthearApi}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tafsir':
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(limitend(pushname2))
					tafsir = `${body.slice(8)}`
					taf = tafsir.split("/")[0];
					sir = tafsir.split("/")[1];
					anu = await fetchJson(`https://api.quran.sutanlab.id/surah/${taf}/${sir}`, {method: 'get'})
					const {ta} = `${anu.data}`
					tafsi = `Tafsir Q.S. ${ta.surah.name.transliteration.id} : ${sir}\n\n${ta.text.arab}\n\n_${ta.text.translation.id}\n\n${ta.tafsir.id.long}`
					client.sendMessage(from, tafsi, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'clone':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('A tag alvo que você deseja clonar')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag gan')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Om falha')
					}
					break
				case 'setprefix':
				case 'setpref':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitt = args[0]
					reply(`Limite foi alterado com sucesso para : ${limitt}`)
					break 
				case 'setnamebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`Nome do bot foi alterado com sucesso para : ${name}`)
					break 
				case 'setreply':
					if (!isOwner) return reply(mess.only.ownerB)
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					rdaftar = body.slice(10)
					reply(`a resposta foi alterada com sucesso para : ${rdaftar}`)
				break 
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Só uma foto mano')
					}
					break 
					
			case 'quran':
			 if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
					client.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender) 
					break 
	case 'infocuaca':
	 if (isBanned) return reply(mess.only.benned)    
     if (!isUser) return reply(mess.only.userB)
     if (isLimit(sender)) return reply(limitend(pushname2))
     if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text)
     reply(mess.wait)
            tempat = `${body.slice(11)}`
            weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
            if (weather.error) {
             reply(from, weather.error, text)
            } else {
             client.sendMessage(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, text, {quoted: mek})
            }
            await limitAdd(sender)
            break 

         case 'pinterest':
         if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Mau Nyari Foto Apa???')
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pinte}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pinehg = await getBuffer(trest)
					client.sendMessage(from, pinehg, image, { caption: '*Pinterest*\n\n*Hasil Pencarian : '+pinte+'*', quoted: mek })
					await limitAdd(sender) 
					break 
					
		case 'jadwalsholat':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = `${body.slice(14)}`
					anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${sholat}&apiKey=${BarBarApi}`, {method: 'get'})
					reply(mess.wait)
					if (anu.result) return reply(anu.result)
					jsol = `Jadwal sholat di *${sholat}* hari ini adalah\n\n➸ *Subuh :* ${anu.Subuh} WIB\n*➸ Dzuhur :* ${anu.Dzuhur} WIB\n*➸ Ashar :* ${anu.Ashar} WIB\n*➸ Maghrib :* ${anu.Maghrib} WIB\n*➸ Isya :* ${anu.Isya} WIB`
					client.sendMessage(from, jsol, text, {quoted: mek})
					await limitAdd(sender) 
					break 
            case 'jadwaltv':
                if (isBanned) return reply(mess.wait.benned)
                if (!isUser) return reply(mess.only.userB)
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (args.length < 1)return reply('Nama Channelnya??')
                reply(mess.wait)
                jadwaltv = `${body.slice(10)}`
                anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltv?ch=${jadwaltv}`, {method: 'get'})
                jtv = `${anu.result}`
                client.sendMessage(from, jtv, text, {quoted: mek})
                await limitAdd(sender)
               	break  
                
           case 'jadwaltvnow':
                if (isBanned) return reply(mess.wait.benned)
                if (!isUser) return reply(mess.only.userB)
                if (isLimit(sender)) return reply(limitend(pushname2))
                anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwaltvnow`, {method: 'get'})
                tvnow = `Jadwal Tv Sekarang Pada Jam : *${anu.result.jam}* Adalah: \n *${anu.result.jadwalTV}`
                client.sendMessage(from, tvnow, text, {quoted: mek})
                await limitAdd(sender) 
                break 

// premium user
         case 'joox':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPrem) return reply(mess.only.premium)
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `「 *JOOX* 」\n\n*• Titulo* : ${anu.result.judul}\n*• Album* : ${anu.result.album}\n*• Publicados* : ${anu.result.dipublikasi}\n\n*ESPERE ENVIANDO POR FAVOR, NAO SPAM*`
                bufferddd = await getBuffer(anu.result.thumb)
                 reply(mess.wait)
                buff = await getBuffer(anu.result.mp3)
                client.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break  
                
          case 'snack':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPrem) return reply(mess.only.premium)
				if (args.length < 1) return reply('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                client.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                client.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                await limitAdd(sender) 
                break  
                
             case 'ytmp4':
    				if (isBanned) return reply(mess.only.benned)    
    				//if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('youtu.be')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					ytt = `「 *YOUTUBE MP4 DOWNLOADER* 」\n\n• Title : *${anu.title}*\n• *Size:* ${anu.filesize}\n• *Deskripsi:* ${anu.desc}\n\n Tunggu Sebentar 1 menit Mungkin Agak Lama Karna Mendownload Video`
					buff = await getBuffer(anu.thumb)
					reply(mess.wait)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: ytt})
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 
					break 

				case 'ytmp3':
					if (isBanned) return reply(mess.only.benned)    
					//if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Cadê o url mano?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`http://itsmeikygans.my.id/ytmp3?apikey=${ItsApi}&url=${args[0]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `「 *YOUTUBE MP3 DOWNLOADER* 」\n\n• Title : *${anu.title}*\n• *Size:* ${anu.filesize}\n*• Deskripsi:* ${anu.desc}\n\n Tunggu Sebentar 1 menit Mungkin Agak Lama Karna Mendownload Video`
					buff = await getBuffer(anu.thumb)
					reply(mess.wait)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: teks})
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					await limitAdd(sender) 
					break 

           case 'playmp3':
                if (isBanned) return reply(mess.only.benned)    
		//		if (!isUser) return reply(mess.only.userB)
                reply(mess.wait)
                play = body.slice(9)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `「 *PLAY MP3* 」\n*• Titulo:* ${anu.result.title}\n*• Fonte:* ${anu.result.source}\n*• Tamanho:* ${anu.result.size}\n\n*ESPERE NOVAMENTE ENVIADO POR FAVOR, NAO FLOODE*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break 

           case 'asupan':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
                reply(mess.wait)
                anu = await fetchJson(`http://itsmeikygans.my.id/asupan?apikey=${ItsApi}`)
                asup = await getBuffer(anu.result)
                client.sendMessage(from, asup, video, {mimetype: 'video/mp4', filename: `asupan_bangsa.mp4`, quoted: mek, caption: 'Asupannya Tuan:v'})
                await limitAdd(sender) 
                break 

// Akhir Fitur Premium 

				case 'wiki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
                    if (args.length < 1) return reply('teks nya mana om?')
                    reply(mess.wait)
                   wiki = `${body.slice(6)}`
                    anu = await fetchJson(`http://itsmeikygans.my.id/wiki?apikey=${ItsApi}&q=${wiki}`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    wikii = `${anu.result}`
                    client.sendMessage(from, wikii, text, {quoted: mek})
                   await limitAdd(sender) 
                   break  
                   
               case 'pastebin':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				paste = `${body.slice(10)}`
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
                   await limitAdd(sender) 				
                   break 
	       case 'smule':
	       if (isBanned) return reply(mess.only.benned)
	       if (!isPrem) return reply(mess.only.premium)
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n\n Tunggu Sebentar 1 menit Mungkun Agak Lama Karna Mendownload Video`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
					await limitAdd(sender) 	
					break  
		case 'bpfont':
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			await limitAdd(sender) 
			break  
		case 'spamsms':
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
			sms = `${body.slice(9)}`
			nomer = sms.split("/")[0];
			jumlah = sms.split("/")[1];
			anu = await fetchJson(`http://itsmeikygans.my.id/spamsms?apikey=${ItsApi}&no=${body.slice(10)}&jum=${jumlah}`, {method: 'get'})
			client.sendMessage(from, `${anu.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
		case 'spamcall':
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			client.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
		case 'spamgmail':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(limitend(pushname2))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			client.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
		case 'quransurah':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			surah = `${body.slice(12)}`
			anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=${ZeksApi}`)
			quran = `Surah Al-Qur\`an Nomer: *${surah}*\nSurah: *${anu.surah}*\nDiturunkan Dikota: *${anu.type}*\nJumlah Ayat: *${anu.jumlah_ayat}*\n\n*${anu.ket}\n=============================\n`
			for (let surah of anu.ayat) {
			quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n=====================\n`
			}
			reply(quran.trim())
			await limitAdd(sender) 
			break 
		case 'bitly':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(limitend(pushname2))
			link = `${body.slice(7)}`
			anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${link}&apikey=${TobzApi}`, {method: 'get'})
			bitly = `${bitlyy.result}`
			client.sendMessage(from, anu, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'textstyle':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			style = `${body.slice(11)}`
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, {method: 'get'})
			reply (anu.result)
			await limitAdd(sender) 
			break  
			case 'pantun':
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, {method: 'get'})
			client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			
		case 'jamdunia':
		if (isLimit(sender)) return reply(limitend(pushname2))
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			reply(mess.wait)
		 jamdunia = `${body.slice(10)}`
			anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=${TechApi}&kota=${jamdunia}`, {method: 'get'})
			wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`
			client.sendMessage(from, wtime, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			
		 case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
		//		if (!isUser) return reply(mess.only.userB)
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Responda o vídeo, mano!*_')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Falha ao converter vídeo para mp3')
						bufferlkj = fs.readFileSync(ran)
						client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 

				case 'setppbot':
					if (!isOwner) return reply(mess.only.owner)
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obrigado pelo novo perfil🙂')
					break

// Fitur Defacer

				case 'dorking':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					client.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode64':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${encode32}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decbinary':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/base64/?decode=${encoc}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/base64/?encode=${decoc}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				await limitAdd(sender) 
				break 
					case 'hashidentifier':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  client.sendMessage(from, hasilhash, text, {quoted: mek})
					  await limitAdd(sender)
					  break 
// akhir encrypt & decrypt Fitur

			case 'google':
                const googleQuery = body.slice(8)
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Resultado Da Pesquisa : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultado Pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Titulo* : ${results[i].title}\n\n*Descricao* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    client.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break 
                
                case 'addbucin':
                    if (!isOwner) return reply(mess.only.owner)
				    huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sucesso, Disse \n*${huu}*\n Telah Ditambahkan ke database`)
						break
                    case 'bucin':
                    case 'quotebucin':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    client.sendMessage(from, '"'+hasil+'*', text, {quoted: mek})
                    await limitAdd(sender)
            break
				default:
					if (body.startsWith(`${prefix}${command}`)) {
                  reply(`Desculpa *${pushname2}*, Comando *${prefix}${command}* Nao Listado`)
                  }
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[FXC7BOT]','red'), 'Comando não registrado', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}

starts()
