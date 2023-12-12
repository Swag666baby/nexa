import {downloadMediaMessage} from "@whiskeysockets/baileys";
const P = require("pino");
import * as fs from "fs";
import * as ffmpeg from 'fluent-ffmpeg';

export const stickerMaker =  async(message, sock, jid, msg) => {
	const logger = P({ level: 'debug' })
	sock.sendMessage(jid, {text: "criando figurinha..."}, {quoted:msg})
	
	try{
        const buffer = await downloadMediaMessage(msg, 'buffer', { }, { logger, reuploadRequest: sock.updateMediaMessage})
        const stringBuffer = buffer.toString('base64');
        const convertedBuffer = Buffer.from(stringBuffer, 'base64');
        fs.writeFileSync('./database/media/stickers/sticker.png', convertedBuffer)
	    ffmpeg()
            .input("./database/media/stickers/sticker.png")
            .inputFPS(10) 
            .loop(1)     
            .outputOptions('-pix_fmt yuva420p') 
            .toFormat('webp')
            .on('end', () => {
               sock.sendMessage(jid, {sticker: {url: "./database/media/stickers/sticker.webp"}, mimetype: 'image/webp'},{quoted:msg })
            })
            .on('error', (err) => {
                sock.sendMessage(jid, {text: "erro ao criar o sticker. se o erro permanecer, notifique meu desenvolvedor."}, {quoted:msg})
            })
            .save("./database/media/stickers/sticker.webp");
        }catch{
        	sock.sendMessage(jid, {text: "erro ao criar o sticker. o comando deve estar na descrição da *imagem*. se o erro permanecer, notifique meu desenvolvedor."}, {quoted:msg})
        }
}

