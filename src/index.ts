import makeWASocket, {useMultiFileAuthState} from '@whiskeysockets/baileys';
import {socketEvents} from "./config/lib/socket_events";
const P = require("pino");

async function main(){
	const {state} = await useMultiFileAuthState('auth_info_baileys');
	
    socketEvents(makeWASocket({
        logger: P({ level: 'debug' }),
        printQRInTerminal: true,
        auth: state,
    }), main); 
    
}
main()