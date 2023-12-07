export const deleteMessage = async(msg, jid, dialed, sock) => {
	const dialedId = msg?.message?.extendedTextMessage?.contextInfo?.stanzaId
    const key = {
        remoteJid: jid,
        fromMe: false,
        id: dialedId,
        participant: dialed
    }
    await sock.sendMessage(jid, {delete: key})
}