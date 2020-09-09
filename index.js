const axios = require('axios').default;
const txtgen = require('txtgen');
var credentials = require('./credentials.json')

const baseURL = `https://discord.com/api/v8/channels/${credentials.channelID}/messages`
const payload = { content: "2+2=5", tts: false }

sendMessage()

setInterval(() => {
    sendMessage();
}, 1000 * 60 + 10)

async function  sendMessage()  {
    payload.content = Math.floor(Math.random() * 10) < 5 ? txtgen.sentence() : txtgen.paragraph()

    await axios.post(baseURL, payload, { headers: { 'authorization': credentials.authorization } })
    console.log('sent.');
}