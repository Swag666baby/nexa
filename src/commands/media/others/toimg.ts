import {downloadMediaMessage} from "@whiskeysockets/baileys";
import {stickerMessageType} from "../../../models/message/message_type";
import * as fs from "fs";
const P = require("pino");

export const toimg =  async(message, sock, jid, msg, dialed) => {
	const logger = P({ level: 'debug' })
	sock.sendMessage(jid, {text: "convertendo figurinha..."}, {quoted:msg})
	
	try{
		if(dialed){
            const buffer = await downloadMediaMessage(stickerMessageType(msg, jid), 'buffer', { }, { logger, reuploadRequest: sock.updateMediaMessage})
            const stringBuffer = buffer.toString('base64');
            const convertedBuffer = Buffer.from(stringBuffer, 'base64');
            await fs.writeFileSync('./database/media/images/toimg.png', convertedBuffer)
            await sock.sendMessage(jid, {image: {url: "./database/media/images/toimg.png"}, mimetype: 'image/jpeg'},{quoted:msg })
        }else{
        	sock.sendMessage(jid, {text: "marque a figurinha a ser convertida em imagem."}, {quoted:msg})
        }
    }catch{
        sock.sendMessage(jid, {text: "erro ao converter sticker. se o erro permanecer, notifique meu desenvolvedor."}, {quoted:msg})
    }
}

