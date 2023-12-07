import {GOOGLE_IMG_SCRAP} from "google-img-scrap";

export const imageSearch = async(message, sock, jid, msg) => {
    try{
        const data = await GOOGLE_IMG_SCRAP({
            search: message.substr(11)
        });
        const randomImages = Math.floor(Math.random() * data.result.length - 1)
        sock.sendMessage(jid, {image: {url: `${data.result[randomImages].url}`}, mimetype: 'image/jpeg'},{quoted:msg })
    }catch{
        sock.sendMessage(jid, {text: "imagem não encontrada."}, {quoted: msg})
    }
}