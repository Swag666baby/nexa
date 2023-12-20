const {search} = require("pinterest-dl");

export const pinterestDownloader = async(message, sock, jid, msg) => {
	const data = await search(message?.substr(11))
    sock.sendMessage(jid, {image: {url: data[Math.floor(Math.random() * data.length)]}, mimetype: 'image/jpeg'},{quoted:msg })
    .catch((error) => {
        sock.sendMessage(jid, {text: "imagem não encontrada."}, {quoted: msg})
    })
}