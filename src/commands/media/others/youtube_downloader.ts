const YTB = require("youtube-sr").default
const ytdl = require("ytdl-core");
const fs = require("fs")

export const youtubeMusicDownloader = async(message, sock, jid, msg) => {
    const data = await YTB.search(message.substr(6), { limit: 1 });
    sock.sendMessage(jid, {image: {url: `${data[0].thumbnail.url}`}, mimetype: 'image/jpeg' , caption: `◈━━━━━━━━━━━━━━◈\n                 🌐「𝐩𝐥𝐚𝐲」🌐\n [🌐] ➭ *musica:* ${data[0].title}\n [🌐] ➭ *canal:* ${data[0].channel.name}\n [🌐] ➭ *publicacao:* ${data[0].uploadedAt}\n [🌐] ➭ *duracao:* ${data[0].durationFormatted}\n◈━━━━━━━━━━━━━━◈\n*fazendo download... aguarde*`},{quoted:msg })
    ytdl(`https://www.youtube.com/watch?v=${data[0].id}`, {quality: 'lowestaudio'})
    .pipe(fs.createWriteStream('./database/media/audios/music.mp3'))
    .on('finish', () => sock.sendMessage( jid, { audio: { url: `./database/media/audios/music.mp3` }, mimetype: "audio/mp4"}));
}