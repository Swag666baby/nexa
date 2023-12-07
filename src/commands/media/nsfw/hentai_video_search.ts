import axios from "axios";

export const hentaiVideoSearch = async(message, sock, jid, msg) => {
    const request = await axios.get(`https://nsfw-api-p302.onrender.com/h/video/search?q=${message.substr(14)}`)
    const imageNumber = Math.floor(Math.random() * request.data.length - 1)
    sock.sendMessage(jid, {video: {url: `${request?.data[imageNumber]}`}, mimetype: 'video/mp4'},{quoted:msg })
    .catch(() => sock.sendMessage(jid, {text: "erro ao enviar vídeo! se permanecer, notifique o meu desenvolvedor."}, {quoted: msg}))
}