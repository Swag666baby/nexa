export const promote = (dialed, dialedUserAdmin, sock, jid) => {
	if(dialed){
		if(dialedUserAdmin){
			sock.groupParticipantsUpdate(jid, [dialed], "promote");
			return "usuário promovido com sucesso!";
		}else{
			return "o usuário marcado ja possui admin";
		}
	}else{
		return "não encontrei o usuário marcado. modo de uso: /promover *marcando a mensagem do usuário* ou /promover @usuario.";
	}
}