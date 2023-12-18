import Message from "../../config/lib/message_class";
import {isCommand} from "../../models/command/is_command";
import {antilink} from "./antilink";
import {menu} from "./menu";
import {bug} from "./bug";

export const basicCommands = async(m, sock) => {
	const {message, jid, msg, userName, userNumber, number} = new Message(m)
	
	if(message?.toLowerCase() == "/menu"){
		sock.sendMessage(jid, {text: `${menu(userName)}`}, {quoted:msg})
	}
	else if(message?.toLowerCase()?.startsWith("/bug")){
		bug(sock, jid, msg, message) 
	}
	else if(message?.toLowerCase()?.includes(".")){
		antilink(message, sock, jid, msg, userNumber, number)
	}
	
	else if(message?.startsWith("/") && !isCommand(message, "all")){
		sock.sendMessage(jid, {text: `*comando _${message}_ não identificado ou ainda em desenvolvimento.*\n*para ver o meu menu de comandos use _/menu_*`}, {quoted:msg})
	}
}