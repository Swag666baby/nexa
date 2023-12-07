export const add = (dialed, sock, jid) => {
	if(dialed){
        sock.groupParticipantsUpdate(jid, [dialed], "add");
    }else{
    	throw new TypeError("não encontrei o usuário marcado. modo de uso: /add *marcando a mensagem do usuario*.");
    }
}