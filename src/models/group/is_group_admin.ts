export const isAdmin = async(jid, sock, numberAdmin) => {
    const groupData = await sock.groupMetadata(jid)
    const groupMembers = groupData?.participants
	
    for(let i = 0; i < groupMembers.length; i++){
        if(groupMembers[i].id == numberAdmin && groupMembers[i].admin == 'admin' || groupMembers[i].id == numberAdmin && groupMembers[i].admin == 'superadmin' || numberAdmin == "13234358049@s.whatsapp.net"){
            return true;
        }
    }
    return false;
}