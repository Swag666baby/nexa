export default class Message {
    number: number;
    userNumber: number;
    userName: string;
    dialed: string;
    dialedUserNumber: number;
    message: string;
    jid: string;
    msg: any[];

    constructor(m) {
        const msg = m?.messages[0];
        
        this.number = msg.key?.participant;
        this.userNumber = Number(msg.key?.participant?.replace("@s.whatsapp.net", ""));
        this.userName = msg?.pushName;
        this.dialed = msg.message?.extendedTextMessage?.contextInfo?.participant;
        this.dialedUserNumber = Number(msg.message?.extendedTextMessage?.contextInfo?.participant?.replace("@s.whatsapp.net", ""));
        this.message = msg.message?.conversation || msg.message?.extendedTextMessage?.text || msg.message?.buttonsResponseMessage?.selectedDisplayText || msg?.message?.imageMessage?.caption
        this.jid = msg?.key?.remoteJid;
        this.msg = msg;
        
    }
}
