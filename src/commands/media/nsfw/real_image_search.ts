import axios from "axios";

export const realImageSearch = async(message, sock, jid, msg) => {
    const request = await axios.get(`https://nsfw-api-p302.onrender.com/r/image${message}`);
    const randomImages = Math.floor(Math.random() * request.data.length -1);
    sock.sendMessage(jid, {image: {url: `${request.data[randomImages]}`}, mimetype: 'image/jpeg'},{quoted:msg })
	.catch(() => sock.sendMessage(jid, {text: "erro ao enviar imagem! se permanecer, notifique o meu desenvolvedor."}, {quoted: msg}))
}