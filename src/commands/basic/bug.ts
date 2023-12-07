require("dotenv").config();

export const bug = (sock, jid, msg, message) => {
	sock.sendMessage(jid, {text: "bug reportado com sucesso!\né importante que a descrição esteja bem construída."}, {quoted: msg});
	sock.sendMessage(`${process.env.MY_NUMBER}@s.whatsapp.net`, {text: `BUG ENCONTRADO: ${message.substr(5)}`}, {quoted: msg});
}