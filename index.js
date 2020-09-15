const axios = require('axios').default;
const txtgen = require('txtgen');
var credentials = require('./credentials.json')

const baseURL = `https://discord.com/api/v8/channels/${credentials.channelID}/messages`
const payload = { content: "2+2=5", tts: false }

const nsfwCommands = ['m!hentai', 'm!r34', 'm!yandere', 'm!rnsfw', 'm!doujin', 'm!ass', 'm!bdsm', 'm!femdom', 'm!maid', 'm!cum', 'm!3dass', 'm!3dthighs', 'm!3dpantsu', 'm!pantsu', 'm!safebooru']

sendMessage()
makeUtkuHappy();

setInterval(() => {
    sendMessage();
}, 1000 * 60 + 10)

setInterval(() => {
    makeUtkuHappy();
}, 1000 * 60 * 30)

async function  sendMessage()  {
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    payload.content = Math.floor(Math.random() * 10) < 5 ? txtgen.sentence() : Math.floor(Math.random() * 10) > 8 ? 'Utku Sucks dick rn time & date: ' + date + '  ' + time : txtgen.paragraph()

    await axios.post(baseURL, payload, { headers: { 'authorization': credentials.authorization } })
    console.log('sent.');
}

async function makeUtkuHappy() {
    payload.content = nsfwCommands[Math.floor(Math.random() * nsfwCommands.length)];

    await axios.post(_getCustomURL('638209325986217995'), payload, { headers: { 'authorization': credentials.authorization } })
    console.log('utku is happy.');
}

function _getCustomURL(channelID) {
    return `https://discord.com/api/v8/channels/${channelID}/messages`;
}