const axios = require('axios').default;
const txtgen = require('txtgen');

const channelID = '********';
const authorization = '**********';

const baseURL = `https://discord.com/api/v8/channels/${channelID}/messages`
const payload = { content: "2+2=5", tts: false }

setInterval(async () => {

    payload.content = Math.floor(Math.random() * 10) < 5 ? txtgen.sentence() : txtgen.paragraph()

    await axios.post(baseURL, payload, { headers: { 'authorization': authorization } })
    console.log('sent.');
}, 1000 * 60 + 10)