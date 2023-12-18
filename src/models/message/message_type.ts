export const stickerMessageType = (msg, jid) => {
    const data = msg?.message?.extendedTextMessage?.contextInfo
	return {
	    key: {
		    remoteJid: jid,
	        fromMe: false,
	        id: data?.stanzaId,
		    participant: data?.participant
	    },
        messageTimestamp: 0,
        pushName: 'usuário',
        broadcast: false,
        message: {
            stickerMessage: {
                interactiveAnnotations: [],
                scanLengths: [],
                url: data?.quotedMessage?.stickerMessage?.url,
                mimetype: 'image/webp',
                fileSha256: data?.quotedMessage?.stickerMessage?.fileSha256,
                fileLength: data?.quotedMessage?.stickerMessage?.fileLength,
                height: data?.quotedMessage?.stickerMessage?.height,
                width: data?.quotedMessage?.stickerMessage?.width,
                mediaKey: data?.quotedMessage?.stickerMessage?.mediaKey,
                fileEncSha256: data?.quotedMessage?.stickerMessage?.fileEncSha256,
                directPath: data?.quotedMessage?.stickerMessage?.directPath, 
                mediaKeyTimestamp: data?.quotedMessage?.stickerMessage?.mediaKeyTimestamp,
                jpegThumbnail: data?.quotedMessage?.stickerMessage?.jpegThumbnail
            }
        }
    }
}

export const imageMessageType = (msg, jid) => {
    const data = msg?.message?.extendedTextMessage?.contextInfo
	return {
	    key: {
		    remoteJid: jid,
	        fromMe: false,
	        id: data?.stanzaId,
		    participant: data?.participant
	    },
        messageTimestamp: 0,
        pushName: 'usuário',
        broadcast: false,
        message: {
            imageMessage: {
                interactiveAnnotations: [],
                scanLengths: [],
                url: data?.quotedMessage?.imageMessage?.url,
                mimetype: 'image/jpeg',
                fileSha256: data?.quotedMessage?.imageMessage?.fileSha256,
                fileLength: data?.quotedMessage?.imageMessage?.fileLength,
                height: data?.quotedMessage?.imageMessage?.height,
                width: data?.quotedMessage?.imageMessage?.width,
                mediaKey: data?.quotedMessage?.imageMessage?.mediaKey,
                fileEncSha256: data?.quotedMessage?.imageMessage?.fileEncSha256,
                directPath: data?.quotedMessage?.imageMessage?.directPath, 
                mediaKeyTimestamp: data?.quotedMessage?.imageMessage?.mediaKeyTimestamp,
                jpegThumbnail: data?.quotedMessage?.imageMessage?.jpegThumbnail
            }
        }
    }
}