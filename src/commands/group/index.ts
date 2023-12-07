import {
openGroup, 
closeGroup, 
changeGroupName, 
changeGroupDescription
} from "./change_group_settings";
import {isCommand} from "../../models/command/is_command";
import {toggleNsfw} from "./change_database/change_nsfw_database";
import {toggleRpg} from "./change_database/change_rpg_database";
import {toggleAntilink} from "./change_database/change_antilink_database";
import {isAdmin} from "../../models/group/is_group_admin";
import {deleteMessage} from "./delete_message";
import {add} from "./participant_commands/add_participant";
import {ban} from "./participant_commands/remove_participant";
import {promote} from "./participant_commands/promote_participant";
import {demote} from "./participant_commands/demote_participant";
import Message from "../../config/lib/message_class";
import {findGroups} from "../../models/group/find_groups";  
require("dotenv").config();

export const groupCommands = async(m, sock) => {
	const {message, jid, msg, dialed, number} = new Message(m);
	const groupData = findGroups(jid) 
	
    if(isCommand(message, "admin")){
    	
    	const userAdmin = await isAdmin(jid, sock, number)
        const dialedUserAdmin = await isAdmin(jid, sock, dialed)
        const myAdmin = await isAdmin(jid, sock, `${process.env.BOT_NUMBER}@s.whatsapp.net`)
    
	    if(userAdmin){
		    if(groupData){
		        if(message?.toLowerCase()?.startsWith("/nsfw ")){
			        sock.sendMessage(jid, {text: `${toggleNsfw(groupData, jid, message)}`}, {quoted:msg})
			        return;
			    }
			    else if(message?.toLowerCase()?.startsWith("/rpg ")){
			        sock.sendMessage(jid, {text: `${toggleRpg(groupData, jid, message)}`}, {quoted:msg})
			        return;
			    }
			    else if(message?.toLowerCase()?.startsWith("/antilink ")){
			        sock.sendMessage(jid, {text: `${toggleAntilink(groupData, jid, message)}`}, {quoted:msg})
			        return;
			    }
		    }
	        if(myAdmin){
		
		        if(message?.toLowerCase() == "/delete"){
			        deleteMessage(msg, jid, dialed, sock)
			    }
		        else if(message?.toLowerCase() == "/abrirg"){
			        sock.sendMessage(jid, {text: `${openGroup(sock, jid)}`}, {quoted:msg})
			    }
			    else if(message?.toLowerCase() == "/fecharg"){
			        sock.sendMessage(jid, {text: `${closeGroup(sock, jid)}`}, {quoted:msg})
			    }
			    else if(message?.toLowerCase()?.startsWith("/nomeg")){
			        sock.sendMessage(jid, {text: `${changeGroupName(message, sock, jid)}`}, {quoted:msg})
			    }
			    else if(message?.toLowerCase()?.startsWith("/descg")){
			        sock.sendMessage(jid, {text: `${changeGroupDescription(message, sock, jid)}`}, {quoted:msg})
			    }
			    else if(message?.toLowerCase() == "/add"){
			        add(dialed, sock, jid)
			    }
		        else if(message?.toLowerCase() == "/ban"){
			        ban(dialed, sock, jid)
			    }
			    else if(message?.toLowerCase() == "/promover"){
			        sock.sendMessage(jid, {text: `${promote(dialed, dialedUserAdmin, sock, jid)}`}, {quoted:msg})
			    }
			    else if(message?.toLowerCase() == "/rebaixar"){
			        sock.sendMessage(jid, {text: `${demote(dialed, dialedUserAdmin, sock, jid)}`}, {quoted:msg})
			    }
			
	        }else{
		        sock.sendMessage(jid, {text: "não foi possivel executar a ação pois não pussuo admin."}, {quoted:msg})
	        }
        }else{
	        sock.sendMessage(jid, {text: "comando exclusivo para admins."}, {quoted:msg})
        }
    }
}