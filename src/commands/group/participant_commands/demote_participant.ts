export const demote = (dialed, dialedUserAdmin, sock, jid) => {
	if(dialed){
		if(dialedUserAdmin){
			sock.groupParticipantsUpdate(jid, [dialed], "demote");
			return "usuário rebaixado com sucesso!";
		}else{
			return "o usuário marcado ja possui admin";
		}
	}else{
		return "não encontrei o usuário marcado. modo de uso: /rebaixar *marcando a mensagem do usuário* ou /rebaixar @usuario.";
	}
}