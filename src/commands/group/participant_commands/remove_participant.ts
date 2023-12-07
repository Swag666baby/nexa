export const ban = (dialed, sock, jid) => {
	if(dialed){
        sock.groupParticipantsUpdate(jid, [dialed], "remove");
    }else{
    	throw new TypeError("não encontrei o usuário marcado. modo de uso: /ban *marcando a mensagem do usuário* ou /ban @usuario.");
    }
}