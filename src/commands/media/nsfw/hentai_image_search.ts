import {default as axios} from "axios";

export const hentaiImageSearch = async(message, sock, jid, msg) => {
    const request = await axios.get(`https://nsfw-api-p302.onrender.com/h/image/search?q=${message.substr(9)}`)
    const imageNumber = Math.floor(Math.random() * request.data.length - 1)
    sock.sendMessage(jid, {image: {url: `${request?.data[imageNumber]}`}, mimetype: 'image/jpeg'},{quoted:msg })
    .catch(() => sock.sendMessage(jid, {text: "erro ao enviar imagem! se permanecer, notifique o meu desenvolvedor."}, {quoted: msg}))
}