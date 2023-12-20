import Message from "../../config/lib/message_class";
import {nexaAi} from "./nexa";
import {saraAi} from "./sara";

export const aiCommands = async(m, sock) => {
	const {message, jid, msg} = new Message(m);
	
	if(message?.toLowerCase()?.startsWith("nexa ")){
		nexaAi(message)
		.then(response => sock.sendMessage(jid, {text: `${response}` }, {quoted:msg}))
	}else if(message?.toLowerCase()?.startsWith("sara ")){
		saraAi(message)
		.then(response => sock.sendMessage(jid, {text: `${response}` }, {quoted:msg}))
	}
} 