export const openGroup = (sock, jid) => {
    sock.groupSettingUpdate(jid, "not_announcement");
    return "grupo aberto com sucesso!";
}
export const closeGroup = (sock, jid) => {
    sock.groupSettingUpdate(jid, "announcement");
    return "grupo fechado com sucesso!";
}
export const changeGroupName = (message, sock, jid) => {
	const newName = message?.substr(7);
	sock.groupUpdateSubject(jid, newName)
	return "nome alterado com sucesso!";
}
export const changeGroupDescription = (message, sock, jid) => {
    const newDescription = message?.substr(7);
    sock.groupUpdateDescription(jid, newDescription);
    return "descrição alterada com sucesso!";
}