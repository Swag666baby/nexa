import {TiktokDL} from "@tobyg74/tiktok-api-dl";

export const tiktokVideoDownloader = async(message, sock, jid, msg) => {
	sock.sendMessage(jid, {text: "*fazendo o download do video... aguarde*"}, {quoted:msg})
	try{
		const response = await TiktokDL(message.substr(8))
		sock.sendMessage(jid, {video: {url: `${response.result.video[0]}`}, mimetype: 'video/mp4', caption: `◈━━━━━━━━━━━━━━━◈\n [🌐] ➭ *autor*: ${response.result.author.nickname}\n [🌐] ➭ *descrição*: ${response.result.description}\n \n [🌐] ➭ *views*: ${response.result.statistics.playCount}\n [🌐] ➭ *downloads*: ${response.result.statistics.downloadCount}\n [🌐] ➭ *shareds*: ${response.result.statistics.shareCount}\n [🌐] ➭ *comentarios*: ${response.result.statistics.commentCount}\n [🌐] ➭ *likes*: ${response.result.statistics.likeCount}\n◈━━━━━━━━━━━━━━━◈`},{quoted:msg })
	}catch{
		sock.sendMessage(jid, {text: "*não foi possível realizar o download do vídeo, verifique se a url está correta e tente novamente.* "}, {quoted:msg})
	}
}

export const tiktokAudioDownloader = async(message, sock, jid, msg) => {
	sock.sendMessage(jid, {text: "*fazendo o download do audio... aguarde*"}, {quoted:msg})
	try{
		const response = await TiktokDL(message.substr(11))
		sock.sendMessage( jid, { audio: { url: `${response.result.music[0]}` }, mimetype: "audio/mp4"});
	}catch{
		sock.sendMessage(jid, {text: "*não foi possivel realizar o download do audio, verifique se a url está correta e tente novamente.* "}, {quoted:msg})
	}
}