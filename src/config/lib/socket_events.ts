import {Boom} from "@hapi/boom";
import {DisconnectReason} from '@whiskeysockets/baileys';
import {isCommand} from "../../models/command/is_command";
import Message from "./message_class";
import {rpgCommands} from "../../commands/rpg";
import {aiCommands} from "../../commands/ai";
import {basicCommands} from "../../commands/basic";
import {groupCommands} from "../../commands/group";
import {mediaCommands} from "../../commands/media";
import {createInterface} from "readline"

export const socketEvents = async(sock, main) => {
	
	sock.ev.on("connection.update", async(update) => {
        const {connection, lastDisconnect} = update
        if(connection === "close") {
            const shouldReconnect = (lastDisconnect?.error as Boom)?.output?.statusCode !== DisconnectReason.loggedOut
            if(shouldReconnect){
                main();
            }
        }else if(connection === "open") {
            console.log("opened connection")
        }
    })
    
    sock.ev.on("messages.upsert", async(m)=> {
    	const {message} = new Message(m);
        console.log(m?.messages[0])
        
        rpgCommands(m, sock);
        aiCommands(m, sock);
        basicCommands(m, sock);
        mediaCommands(m, sock);
        groupCommands(m, sock);
    });
}