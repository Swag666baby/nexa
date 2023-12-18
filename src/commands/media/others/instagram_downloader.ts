const instagramDl = require("@sasmeee/igdl");

export const instagramDownloader = async(message, sock, jid, msg) => {
	try{
		const dataList = await instagramDl(message?.substr(7));
		sock.sendMessage(jid, {video: {url: `${dataList[0]?.download_link}`}, mimetype: 'video/mp4'},{quoted:msg })
	}catch{
		sock.sendMessage(jid, {text: "erro ao fazer o download do video. verifique a url e tente novamente"}, {quoted:msg})
	}
}