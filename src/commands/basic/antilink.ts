import {isAdmin} from "../../models/group/is_group_admin";
import {findGroups} from "../../models/group/find_groups";
import {readFileSync} from "fs";
require("dotenv").config();

export const antilink = async(message, sock, jid, msg, userNumber, number) => {
    const links = JSON.parse(readFileSync("./database/json/groups/links.json").toString())
    const hasLink = links.some(link => message?.includes(link));
    const userAdmin = await isAdmin(jid, sock, number)
    //const groupMetadata = await sock.groupMetadata(jid)
    const groupData = await findGroups(jid 
    
    if(hasLink && groupData?.data?.antilink && !userAdmin && userNumber != process.env.BOT_NUMBER){
        sock.groupParticipantsUpdate(jid, [number], "remove");
        await sock.sendMessage(jid, { delete: msg?.key });
    }
}
